<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        
      </q-toolbar>
      <div class="q-px-md q-pt-xl q-mb-md">
        <h3 class="text-h4 q-mt-none q-mb-none">Список задач</h3>
        <div class="text-subtitle1">{{getDate}}</div>
      </div>

    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 182px); margin-top: 182px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            exact
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Список задач
              </q-item-section>
            </q-item>

            <q-item
            exact
            to="/DDD"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                dddd
              </q-item-section>
            </q-item>

            <q-item
            to="/help"
            exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Помощь
              </q-item-section>
            </q-item>

            <q-item
            to="/About_Me"
            exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="warning" />
              </q-item-section>

              <q-item-section>
                Обо мне
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 182px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~/assets/duba.jpg">
            </q-avatar>
            <div class="text-weight-bold">Viktor Korneplod</div>
            <div>@vk</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {date} from 'quasar'


export default defineComponent({
  name: 'MainLayout',

  computed: {
    getDate () {
      const timeStamp = Date.now ()
      return date.formatDate(timeStamp, 'dddd, D MMMM YYYY')
    }

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
}
</style>
