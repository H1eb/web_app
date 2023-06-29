
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/posts', component: () => import('pages/Posts.vue') },
      { path: '/comments', component: () => import('pages/Comments.vue') },
      { path: '/albums', component: () => import('pages/Albums.vue') },
      { path: '/photos', component: () => import('pages/Photos.vue') },
      { path: '/todolist', component: () => import('pages/ToDoList.vue') },
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/users/:id', component: () => import('pages/UserDetailed.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
