import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/dasboard',
      name: 'dasboard',
      component: () => import('../views/DasboardView.vue')
    }
  ]
})

export default router
