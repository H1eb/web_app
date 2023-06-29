
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TodoPage.vue') },
      { path: '/help', component: () => import('src/pages/HelpPage.vue') },
      { path: '/About_Me', component: () => import('src/pages/About_Me.vue') },
      { path: '/DDD', component: () => import('src/pages/DDD.vue') }
    ]
  },
  
  {
    path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') 
  }
]

export default routes
