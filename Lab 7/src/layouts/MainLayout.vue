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

        <q-toolbar-title>
          Work with Api
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item to="/posts" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="newspaper" />
              </q-item-section>

              <q-item-section>
                Посты
              </q-item-section>
            </q-item>

            <q-item to="/comments" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="comment" />
              </q-item-section>

              <q-item-section>
                Комментарии
              </q-item-section>
            </q-item>

            <q-item to="/albums" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="album" />
              </q-item-section>

              <q-item-section>
                Альбомы
              </q-item-section>
            </q-item>

            <q-item to="/photos" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="photo" />
              </q-item-section>

              <q-item-section>
                Фотографии
              </q-item-section>
            </q-item>

            <q-item to="/todolist" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Список дел
              </q-item-section>
            </q-item>

            <q-item to="/users" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>

              <q-item-section>
                Пользователи
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
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
//import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default defineComponent({
  name: 'MainLayout',

  components: {
    //EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      //essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
