<!--
https://eugenkiss.github.io/7guis/tasks/#cells
-->

<script>
import Cell from './components/Cell.vue'
import { cells } from './components/store.js'

export default {
  components: {
    Cell
  },
  data() {
    return {
      cols: cells.map((_, i) => String.fromCharCode(65 + i)),
      cells
    }
  }
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols">{{ c }}</th> <!-- цикл проходит по столбцам и ставит букву-->  <!-- просто требует :key. Всё хорошо -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in cells[0].length"> <!-- цикл проходит по строчкам тела -->  <!-- просто требует :key. Всё хорошо doubleKill -->
        <th>{{ i - 1 }}</th> <!-- расставляет id -->
        <td v-for="(c, j) in cols"> <!-- цикл проходит по столбцам тела -->  <!-- просто требует :key. Всё хорошо tripleKill-->
          <Cell :r="i - 1" :c="j"></Cell> <!-- вызывает cell -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>