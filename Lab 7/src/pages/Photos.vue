<template>
  <div class="q-pa-md box_content">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Фотографии</q-toolbar-title>
    </q-toolbar>
    <div v-for="photo in photos" :key="photo.id"> 
      <q-card class="my-card">
        <q-card-section>
          <q-item-label class="title_img">{{photo.title}}</q-item-label>
        
          <img :src="photo.url">
        </q-card-section>
      </q-card>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
import { Loading } from 'quasar'
export default {
  data() {
    return {
      photos: []
    }
  },
  methods: {
    async getPhotos() {
      Loading.show()({
        message: "Ожидайте"
      })
      try {
        const config = {
          params: {
            _limit: 10
          }
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', config);
        this.photos = response.data;
      }
      catch (e){
        alert('Ошибка');
      }
      Loading.hide()
    }
  },
  mounted() {
    this.getPhotos()
  }
}
</script>

<style scoped>
  .box_content {
      width: fit-content;
  }
  .image {
    width: auto;
    height: auto;
  }
  .title_img {
    padding: 0px 0px 7px 5px;
    font-size: 16px;
  }
</style>