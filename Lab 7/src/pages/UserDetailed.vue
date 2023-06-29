<template>
<div class="q-pa-md info-block">

    <back-btn to="/users"></back-btn>

    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Информация о пользователе</q-toolbar-title>
    </q-toolbar>

    <q-card class="my-card" flat bordered v-if="Object.keys(user).length != 0">
      <q-item style="background-color: aliceblue;">
        <q-item-section avatar>
          <q-avatar style="font-size: 60px;">
            <q-icon name="face"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{user.username}} </q-item-label>
          <q-item-label caption>
            Имя: {{user.name}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
           <p class="subtitle">Адрес </p>
           <q-separator />
           <p class="title">Город: {{user.address.city}}</p>
           <p class="title">Улица: {{user.address.street}}</p>
           <p class="title">Апартаменты: {{user.address.suite}}</p>
           <p class="title">Индекс: {{user.address.zipcode}}</p>

        </q-card-section>

        <q-separator vertical />

        <q-card-section>
            <p class="subtitle">Компания </p>
           <q-separator />
           <p class="title">Название: {{user.company.name}}</p>
           <p class="title">Слоган: {{user.company.catchPhrase}}</p>
          <p class="subtitle">Контакты </p>
           <q-separator />
           <p class="title">Тел.: {{user.phone}}</p>
           <p class="title">Почта: {{user.email}}</p>
           <p class="title">Сайт: {{user.website}}</p>
        </q-card-section>
      </q-card-section>
    </q-card>

</div>
</template>

<script>
import axios from 'axios'
import {Loading} from 'quasar'
import BackBtn from '../components/BackBtn.vue'
export default {
  components: { BackBtn },
    data () {
        return {
            user: []
        }
    },

    methods : {
      async getPosts(){
        Loading.show({
          message: 'Ожидайте'
        })
        try {
            const id = this.$route.params.id;
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            this.user = response.data;
        }
        catch (e){
            alert('Ошибка ' + e);
        }
        Loading.hide()
      }    
    },
    mounted() {
            this.getPosts();
    },

    // computed:{
    //     id(){
    //         return this.$route.params.id
    //     }
    // },

}
</script>

<style>
p.subtitle{
  font-weight: bold;
  margin-bottom: 10px;
}
p.title{
  margin: 3px 20px 10px 0;
}
.info-block{
  width: max-content;
}
</style>