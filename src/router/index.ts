import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/ExampleView.vue')
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: () => import('@/views/LayoutsView.vue')
    }
  ]
})

export default router
