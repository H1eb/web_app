<!--
A fully spec-compliant TodoMVC implementation
https://todomvc.com/
-->

<script>
const STORAGE_KEY = 'vue-todomvc'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}

export default {
  // начальное состояние
  data: () => ({
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'), //получить данные из localStorage
    editedTodo: null,
    visibility: 'all'
  }),

  // просмотр изменений задач для сохранения в localStorage. Запускается при каждом изменении
  watch: {
    todos: {
      handler(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)) //сохранить данные в localStorage
      },
      deep: true //для сохранения задач
    }
  },

  mounted() {
    window.addEventListener('hashchange', this.onHashChange) //при нажатии переходит между страницами "Все", "Активные" и "Завершённые"
    this.onHashChange() //Открывает ту страницу, на которой остановился
  },

  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos) //возвращает массив заданий
    },
    remaining() {
      return filters.active(this.todos).length //возвращает количество невыполненных задач
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    toggleAll(e) {
      this.todos.forEach((todo) => (todo.completed = e.target.checked)) //делает все задачи завершёнными
    },

    addTodo(e) {
      const value = e.target.value.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: Date.now(),
        title: value,
        completed: false
      })
      e.target.value = ''
    },

    removeTodo(todo) { //удаление задачи
      this.todos.splice(this.todos.indexOf(todo), 1) //удаление задачи
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title //сохраняет в beforeEditCache изначальный текст задачи
      this.editedTodo = todo //сохраняет в editedTodo новое значение задачи
    },

    doneEdit(todo) { //сохранение изменений
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit(todo) { //при нажатии на esc изменения сбрасываются
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted() { //массовое уничтожение завершённых задач
      this.todos = filters.active(this.todos)
    },

    onHashChange() {
      var visibility = window.location.hash.replace(/#\/?/, '') //в visibility хранится занчение "all", "active" или "complited"
      if (filters[visibility]) {
        this.visibility = visibility
      } else { 
        window.location.hash = ''
        this.visibility = 'all'
      }
    }
  }
}
</script>

<template>
  <section class="todoapp">

    <!-- -------------------------------------- -->
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        placeholder="Что нужно сделать?"
        @keyup.enter="addTodo"
      >
    </header>
    <!-- -------------------------------------- -->

    <!-- -------------------------------------- -->
    <section class="main" v-show="todos.length">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="remaining === 0"
        @change="toggleAll"
      >
      <label for="toggle-all">Все задачи как выполненные</label>
      <ul class="todo-list">
        <li
          v-for="(todo, idx) in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo === editedTodo }"
        > <!-- Цикл проходится по всем заданиям... -->
          <div class="view">
            <input :id="idx" class="toggle" type="checkbox" v-model="todo.completed">
            <label :for="idx" @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div> <!-- ...и выводит их -->
          <input
            v-if="todo === editedTodo"
            class="edit"
            type="text"
            v-model="todo.title"
            @vnode-mounted="({ el }) => el.focus()"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit(todo)"
          > <!-- поле ввода текста -->
        </li>
      </ul>
    </section>
    <!-- -------------------------------------- -->

    <!-- -------------------------------------- -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        <span>{{ remaining === 1 ? ' задача не выполнена' : ' задачи не выполнены' }}</span>
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility === 'all' }">Все</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility === 'active' }">Активные</a>
        </li>
        <li>
          <a href="#/completed" :class="{ selected: visibility === 'completed' }">Завершённые</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Чистка
      </button>
    </footer> <!-- всякие приколы внизу)))) -->
    <!-- -------------------------------------- -->

  </section>
</template>

<style>
@import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
.new-todo {
  background-color: #fff;
}
.todoapp {
  width: 700px;
}
</style>