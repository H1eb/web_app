<script>
export default {
  name: 'TreeItem', // necessary for self-reference
  props: {
    model: Object
  },
  data() {
    return {
      isOpen: false,
      textInput: "",
      check: false,
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length //true, если не ребёнок
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.model.children = []
        this.textInput = "New_stuff_skip" //автоматическое создание ребёнка
        this.addChild()
        this.isOpen = true
      }
    },
    addChild() {
      if (this.textInput != "") {
        this.model.children.push({
          name: this.textInput
        })
        this.textInput = ""
        this.check = false;
      }
    }
  }
}
</script>

<template>
  <li v-show="model.name != 'New_stuff_skip'"> <!-- не показывает ребёнка, который был создан автоматически -->
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        v-for="model in model.children"
        :model="model"> <!-- просто требует :key. Всё хорошо -->
      </TreeItem>
      <li class="add" @click="check = !check">+</li>
      <input 
            v-if = "check"
            type = "text"
            v-model = "textInput"
            @keyup.enter = "addChild">
    </ul>
  </li>
</template>