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
      path:'/CarritoLogged',
      name:'CarritoLogged',
      component:()=>import('../views/Logged/CarritoLogged.vue')
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
    },{
    path:'/MyPublish',
    name:'MyPublish',
    component:()=>import('../views/MyPublish.vue')},
    {
      path:'/CarritoViewPublic',
      name:'CarritoViewPublic',
      component:()=>import('../views/Public/CarritoViewPublic.vue')},
      {
        path:'/HomepageLogged',
        name:'HomepageLogged',
        component:()=>import('../views/Logged/HomepageLogged.vue')
      },
      {
        path:'/CalificacionCompraLogged',
        name:'CalificacionCompraLogged',
        component:()=>import('../views/Logged/CalificacionCompraLogged.vue')
      }
  ]
})

export default router
