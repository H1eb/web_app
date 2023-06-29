<!--
A nested tree component that recursively renders itself.
You can double click on an item to turn it into a folder.
-->

<script>
import TreeItem from './components/TreeItem.vue'
import Modal from './components/Modal.vue'

const treeData = {
  name: 'Транспорт',
  children: [
    { 
      name: 'Наземный',
      children: [
        { 
          name: 'Безрельсовый',
          children: [
            {name: 'Автомобили'},
            {name: 'Мотоциклы'},
            {name: 'Велосипеды'},
            {name: 'Тракторы'}
          ]
        },
        {
          name: 'Рельсовый',
          children: [
            {name: 'Ж.д. состав'},
            {name: 'Трамвай'}
          ]
        }
      ]
    },
    { 
      name: 'Водный',
      children: [
        { 
          name: 'Надводный',
          children: [
            {name: 'Теплоход'},
            {name: 'Катер'},
            {name: 'Танкер'}
          ]
        },
        {
          name: 'Подводный',
          children: [
            {name: 'Подводная лодка'}
          ]
        }
      ]
    },
    { 
      name: 'Воздушный',
      children: [
        {name: 'Самолёт'},
        {name: 'Вертолёт'},
        {name: 'Воздушный шар'},
      ]
    },
    { 
      name: 'прочее'
    },
  ]
}

export default {
  components: {
    TreeItem,
    Modal
  },
  data() {
    return {
      treeData,
      showModal1: false,
      showModal2: false
    }
  }
}

</script>

<template>
<div class="page">
  <!--------------------------------------Начало Модалки------------------------------------------->
  <div class="modal">
    <button id="show-modal-1" @click="showModal1 = true">Show Modal 1</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :open="showModal1" @close="showModal1 = false" id="modal1" header="header1">
        <!-- <template #header>
          <h3>custom header 1</h3>
        </template> -->
      </modal>
    </Teleport>

    <button id="show-modal-2" @click="showModal2 = true">Show Modal 2</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal2" @close="showModal2 = false" id="modal2" header="header2">
        <!-- <template #header>
          <h3>custom header 2</h3>
        </template> -->
      </modal>
    </Teleport>
  </div>
  <!--------------------------------------Конец Модалки------------------------------------------->
  
  <!--------------------------------------Начало Дерева------------------------------------------->
  <div class="tree">
    <ul>
      <TreeItem class="item" :model="treeData"></TreeItem>
    </ul>
  </div>
  <!--------------------------------------Конец Дерева------------------------------------------->
</div>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
.page {
  display: flex;
}
</style>