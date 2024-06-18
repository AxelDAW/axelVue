import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Test from '@/views/Test.vue'
import Prueba from '@/views/Prueba.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    }

  ]
})

export default router
