<script>
import { cells, evalCell } from './store.js'

export default {
  props: {
    c: Number, //column
    r: Number  //row
  },
  data() {
    return {
      editing: false,
      cells
    }
  },
  methods: {
    evalCell,
    update(e) { //изменение значения внутри клетки
      this.editing = false
      cells[this.c][this.r] = e.target.value.trim()
    }
  }
}
</script>

<template>
  <div class="cell" :title="cells[c][r]" @click="editing = true">
    <input
      v-if="editing"
      :value="cells[c][r]"
      @change="update"
      @blur="update"
      @vnode-mounted="({ el }) => el.focus()"
    > <!-- вызов формы для редактирования -->
    <span v-else>{{ evalCell(cells[c][r]) }}</span> <!-- ну иначе попробовать что-то посчитать -->
  </div>
</template>

<style>
.cell, .cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
}
</style>