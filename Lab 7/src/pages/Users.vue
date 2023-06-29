<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Пользователи</q-toolbar-title>
    </q-toolbar>
    <q-list bordered>
      <q-item v-for="user in users" 
          :key="user.id" exact clickable v-ripple :to="`/users/${user.id}`"
          v-show="user.email.endsWith('.biz')"
          :class="{box_bg: user.name[0] == 'K'}">
        <q-item-section style="display: contents">
          <q-item-section side>
            <q-badge>user {{user.id}}</q-badge>
          </q-item-section>

          <div class="div_content">
            <q-item-section>
              <q-item-label caption>Имя</q-item-label>
              <q-item-label class="item-label">{{user.name}}</q-item-label>
            </q-item-section>
            
            <q-item-section>
              <q-item-label caption>Ник</q-item-label> 
              <q-item-label class="item-label">{{user.username}}</q-item-label>
            </q-item-section>
          </div>

          <div class="div_content">
            <q-item-section>
              <q-item-label caption>Почта</q-item-label> 
              <q-item-label class="item-label">{{user.email}}</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label caption>Сайт</q-item-label> 
              <q-item-label class="item-label">{{user.website}}</q-item-label>
            </q-item-section>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import axios from 'axios'
import {Loading} from 'quasar'
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getUsers() {
      Loading.show({
        message: 'Ожидайте'
      })
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        this.users = response.data;
      }
      catch (e){
        alert('Ошибка');
      }
      Loading.hide();
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style scoped>
  .item-label {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .div_content {
    padding-right: 25px;
  }
  .box_bg {
    background: #1976d293;
  }
</style>