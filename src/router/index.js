import { createRouter, createWebHistory } from 'vue-router'
import HomepagePublic from '../views/Public/HomepagePublic.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomepagePublic.vue',
      component: HomepagePublic
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/CarritoView',
      name:'CarritoView',
      component:()=>import('../views/CarritoView.vue')
    },{
    path:'/LoginView',
    name:'LoginView',
    component:()=>import('../views/Public/LoginView.vue')},
    {
      path:'/ProfileView',
      name:'ProfileView',
      component:()=>import('../views/ProfileView.vue')
    },{
      path:'/MessageView',
      name:'MessageView',
      component:()=>import('../views/MessageView.vue')
    }
  ]
})

export default router
