<template>
<div>
  <q-page-about-me class="flex flex-center">
    <q-video
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
  </q-page-about-me>
  

    <div class="q-pa-md flex-star">
      <div class="q-gutter-y-md column">
        <q-rating
          v-model="ratingModel"
          size="3.5em"
          color="gold-5"
          icon="star_border"
          icon-selected="star"
        />
      </div>
    </div>
</div>
</template>
  
<script>
  import { ref } from 'vue'

  export default {
    setup () {
      return {
        ratingModel: ref(1)
      }
    }
  }
</script>
  
<style>
  .flex-star {
    display: flex;
    justify-content: center;
  }
  .q-page-about-me {
    position: relative;
    padding-top: 25px;
    height: 500px;
  }
  .q-video {
    width: 600px;
    height: 300px;
  }
  .flex {
    padding-top: 25px;
  }
</style>
  