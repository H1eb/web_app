<template>
  <q-page class="bg-gray-3">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="task" label="Add task" filled bg-color="white" class="col" @:keypress = "inputKeypress" square>
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask"/>
        </template>  
      </q-input>
    </div>

    <div v-if="tasks.length == 0" class="no-tasks absolute-center">
      <q-icon
        name="check"
        size="100px"
        color="primary"
      ></q-icon>
      <div class="text-h5 text-primary text-center">Задач нет</div>
    </div>
    
    <div v-for="(task, idx) in tasks" :key="task.id">
      <task-list
        :task=task
        :idx=idx
        @update=ChangeStatus
        @delete=Delete_Note
      />
    </div>
  </q-page>
</template>

<script>
import TaskList from 'components/TaskList.vue'
export default{
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [
        {
          title: 'Проснуться',
          done: false
        },
        {
          title: 'Прийти на пару',
          done: false
        },
        {
          title: 'Уйти домой',
          done: false
        }
      ],
      task: ""
    }
  },
  methods: {
    addTask () {
      if (this.task) {
        this.tasks.push({
          title: this.task,
          done: false
        });
        this.task="";
      }
    },
    Delete_Note(idx) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(idx, 1);
        this.$q.notify({
          message: 'Deleted.'
        })
      })
    },
    inputKeypress(event){
        if (event.key ==='Enter' || event.key ==='+'){
            this.addTask();
            event.preventDefault();
        }
    },
    ChangeStatus(idx) {
      const task = this.tasks.splice(idx, 1);
      task[0].done=!task[0].done;
      if (task[0].done)
        this.tasks.push(task[0]);
      else
        this.tasks.unshift(task[0]);
    }
  }

}
</script>
