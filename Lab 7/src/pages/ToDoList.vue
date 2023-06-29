<template>
  <div class="q-pa-md box_content">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Список дел</q-toolbar-title>
    </q-toolbar>

    <task-list :tasks=notes :users=users title="Невыполненные" :complete=false />
    <task-list :tasks=notes :users=users title="Выполненные" :complete=true />
    
    <q-pagination
      class="pagination"
      v-model="page"
      @click="getList()"
      :max="total_count"
      direction-links
      flat
      color="grey"/>
  </div>
</template>


<script>
import axios from 'axios'
import TaskList from 'components/TaskList.vue'
import {Loading} from 'quasar'
  export default{
    components: {
      TaskList
    },
    data () {
      return {
        notes:[],
        users:[],
        page: 1,
        total_count: 0,
        limit: 10
      }
    },

    methods : {
      async getList(){
        Loading.show({
          message: 'Ожидайте'
        })
        try {
          const config = {
            params: {
              _limit: this.limit,
              _page: this.page,
            }
          }
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos', config);
          const responseUs = await axios.get('https://jsonplaceholder.typicode.com/users');
          
          this.users = responseUs.data;
          this.notes = response.data;
          this.total_count = response.headers.get('x-total-count');

          if(this.total_count % this.limit == 0)
            this.total_count = this.total_count / this.limit;
          else
            this.total_count = this.total_count / this.limit + 1;
        }
        catch (e){
          alert('Ошибка');
        }
        Loading.hide();
      }    
  },

  mounted() {
    this.getList();
  }

  }
</script>

<style>
  .pagination {
    margin-top: 20px;
  }
  .box_content {
    width: fit-content;
  }
</style>