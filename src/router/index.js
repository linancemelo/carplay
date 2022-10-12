import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'vue3_customized',
    component: () => import('../views/Vue3_customized.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../components/Home.vue')
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('../components/Map.vue')
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('../components/Music.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../components/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
