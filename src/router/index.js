import { createRouter, createWebHistory } from 'vue-router'
import HomepagePublic from '../views/Public/HomepagePublic.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //PUBLICAS
    {
      path: '/',
      name: 'HomepagePublic.vue',
      component: HomepagePublic
    },{
      path:'/LoginView',
      name:'LoginView',
      component:()=>import('../views/Public/LoginView.vue')},
      {
        path:'/product/:id',
        name:'ProductDetail',
        component:()=>import('../views/Public/ProductDetail.vue')
      },
      //LOGEADAS
    {
      path:'/CarritoLogged',
      name:'CarritoLogged',
      component:()=>import('../views/Logged/CarritoLogged.vue')
    },
    {
      path:'/ProfileView',
      name:'ProfileView',
      component:()=>import('../views/ProfileView.vue')
    },{
      path:'/MessageView',
      name:'MessageView',
      component:()=>import('../views/MessageView.vue')
    },{
    path:'/MisPublicaciones',
    name:'MisPublicaciones',
    component:()=>import('../views/Logged/MisPublicaciones.vue')},
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
      },
      
    {path:'/MisCompras',
  name: 'MisCompras',
component:()=>import('../views/Logged/MisCompras.vue')
},
{
  path:'/CalificationsView',
name:'CalificationsView',
component:()=>import('../views/CalificationsView.vue')
},
{
  path:'/productlog/:id',
  name: 'ProductDetailLogged',
  component:()=>import('../views/Logged/ProductDetailLogged.vue')
},
{
  path:'/Publicar',
  name: 'Publicar',
  component:()=>import('../views/Logged/Publicar.vue')
},{path:'/CarritoLoggedView', name: 'CarritoLoggedView', component:()=>import('../views/Logged/CarritoLogged.vue')},
//ADMIN
{path:'/HomeAdmin',
name:'HomeAdmin',
component:()=>import('../views/Admin/HomeAdmin.vue')},{
path:'/ProductoAdmin',
name:'ProductoAdmin',
component:()=>import('../views/Admin/ProductoAdmin.vue')},
{
  path:'/UsuarioAdmin',
  name:'UsuarioAdmin',
  component:()=>import('../views/Admin/UsuarioAdmin.vue')}
  ]
})

export default router
