<template>
    <q-list bordered padding v-if="this.tasks.filter((todo) => {return todo.completed === complete}).length>0">
      <q-item-label header>{{title}}</q-item-label>
      <q-item tag="label" v-ripple v-for="task in tasks" :key="task.id" v-show="task.completed==complete">
        
        <q-item-section side top>
          <q-checkbox v-model="task.completed"/> 
        </q-item-section>
        
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label> 
        </q-item-section>

        <q-item-section v-for="user in users" :key="user.id" v-show="task.userId==user.id">
          <q-item-label>Пользователь: {{user.name}}</q-item-label> 
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script>
export default {
  props: {
    tasks: Array,
    users: Array,
    title: String,
    complete: Boolean
  },
  data() {
    return{
    }
  },
  methods() {

  }
}
</script>

<style scoped>

</style>