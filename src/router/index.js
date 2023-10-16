import { createRouter, createWebHistory } from 'vue-router'
import HomepagePublic from '../views/HomepagePublic.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/CarritoView',
      name:'CarritoView',
      component:()=>import('../views/CarritoView.vue')
    },{
    path:'/LoginView',
    name:'LoginView',
    component:()=>import('../views/LoginView.vue')},
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
