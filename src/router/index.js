import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Test from '@/views/Test.vue'
import Prueba from '@/views/Prueba.vue'
import login from '@/views/login.vue'
import errorUser from '@/views/errorUser.vue'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/errorUser',
      name: 'errorUser',
      component: errorUser
    }
  ]
})

router.beforeEach((to, from, next) => {
      const usuario = localStorage.getItem('usuario');
      const contraseña = localStorage.getItem('contraseña');
      console.log( usuario, contraseña );
      if (to.path === '/test' && (!usuario || !contraseña)){
        next('/errorUser')
      } else {
        next();
      }
})


export default router
