<template>
  <div class="q-pa-md" >
    <div>Выведено {{posts.length}} из {{total_count}}</div>
      <!-- <q-btn class="q-mb-md" @click="getPosts" color="deep-orange" glossy label="Получи посты" /> -->
    <q-list bordered separator padding>
      <q-item v-for="post in posts">
        <q-item-section top avatar>
          <q-avatar>
            <!-- <img src="https://cdn.quasar.dev/img/boy-avatar.png"> -->
            <div>{{post.id}}</div>
          </q-avatar>
        </q-item-section>
 
        <q-item-section>
          <q-item-label>{{post.title}}</q-item-label>
          <q-item-label caption>{{post.body}}</q-item-label>
        </q-item-section>
 
        <q-item-section side top>
          <q-badge>user {{post.userId}}</q-badge>
        </q-item-section>
      </q-item>
    </q-list>
    <q-pagination
        v-model="current"
        :max="page"
        direction-links
        flat
        color="grey"
        active-color="primary"
        @click="loadPosts"
      />
  </div>
</template>

<script>
import axios from 'axios'
import {Loading} from 'quasar'
export default {
  data() {
    return {
      posts: {},
      total_count: 0,
      page: 1,
      current: 1,
      limit: 10
    }
  },
  methods : {
    async getPosts(){
      Loading.show({
        message: 'Ожидайте'
      })
      try {
        const config = {
          params: {
            _limit: this.limit,
            _page: this.current
          }
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
        this.posts = response.data;
        this.total_count = response.headers['x-total-count'];
        console.log(response.headers);
        
        if(this.total_count % this.limit == 0)
          this.page = this.total_count / this.limit;
        else
          this.page = this.total_count / this.limit + 1;
      }
      catch (e){
        alert('Ошибка');
      }
      Loading.hide()
    },
    loadPosts() {
      this.getPosts();
    }
  },
  mounted() {
      this.getPosts()
  }
}
</script>

<style scoped>
  .btn_add {
    margin-top: 10px;
  }
</style>