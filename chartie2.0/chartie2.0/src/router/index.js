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
      path: '/crypto',
      name: 'crypto',
      component: () => import('../views/Crypto.vue')
    },
    {
      path:'/game',
      name: 'game',
      component:() => import('../views/Game.vue')
    },
    {
      path:'/gpw',
      name:'gpw',
      component:()=>import('../views/Gpw.vue')
    }
  ]
})

export default router