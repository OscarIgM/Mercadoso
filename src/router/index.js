<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import HomepagePublic from "../views/Public/HomepagePublic.vue";
=======
import { createRouter, createWebHistory } from 'vue-router'
import HomepagePublic from '../views/Public/HomepagePublic.vue'
import store from '../store'; 
>>>>>>> c.2belen
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //PUBLICAS
    {
<<<<<<< HEAD
      path: "/",
      name: "HomepagePublic.vue",
      component: HomepagePublic,
    },
    {
      path: "/LoginView",
      name: "LoginView",
      component: () => import("../views/Public/LoginView.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: () => import("../views/Public/ProductDetail.vue"),
    },
    {
      path: "/SignupView",
      name: "SignupView",
      component: () => import("../views/Public/SignupView.vue"),
    },
    //LOGEADAS
    {
      path: "/CarritoLogged",
      name: "CarritoLogged",
      component: () => import("../views/Logged/CarritoLogged.vue"),
    },
    {
      path: "/ProfileView",
      name: "ProfileView",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/MessageView",
      name: "MessageView",
      component: () => import("../views/MessageView.vue"),
    },
    {
      path: "/MisPublicaciones",
      name: "MisPublicaciones",
      component: () => import("../views/Logged/MisPublicaciones.vue"),
    },
    {
      path: "/CarritoViewPublic",
      name: "CarritoViewPublic",
      component: () => import("../views/Public/CarritoViewPublic.vue"),
    },
    {
      path: "/HomepageLogged",
      name: "HomepageLogged",
      component: () => import("../views/Logged/HomepageLogged.vue"),
    },
    {
      path: "/CalificacionCompraLogged",
      name: "CalificacionCompraLogged",
      component: () => import("../views/Logged/CalificacionCompraLogged.vue"),
    },

    {
      path: "/MisCompras",
      name: "MisCompras",
      component: () => import("../views/Logged/MisCompras.vue"),
    },
    {
      path: "/CalificationsView",
      name: "CalificationsView",
      component: () => import("../views/CalificationsView.vue"),
    },
    {
      path: "/productlog/:id",
      name: "ProductDetailLogged",
      component: () => import("../views/Logged/ProductDetailLogged.vue"),
    },
    {
      path: "/Publicar",
      name: "Publicar",
      component: () => import("../views/Logged/Publicar.vue"),
    },
    {
      path: "/CarritoLoggedView",
      name: "CarritoLoggedView",
      component: () => import("../views/Logged/CarritoLogged.vue"),
    },
    //ADMIN
    {
      path: "/HomeAdmin",
      name: "HomeAdmin",
      component: () => import("../views/Admin/HomeAdmin.vue"),
    },
    {
      path: "/ProductoAdmin",
      name: "ProductoAdmin",
      component: () => import("../views/Admin/ProductoAdmin.vue"),
    },
    {
      path: "/UsuarioAdmin",
      name: "UsuarioAdmin",
      component: () => import("../views/Admin/UsuarioAdmin.vue"),
    },
  ],
});

export default router;
=======
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
      },{
        path:'/SignupView',
        name:'SignupView',
        component: ()=>import('../views/Public/SignupView.vue')
      },
      //LOGEADAS
      {
        path: '/CarritoLogged',
        name: 'CarritoLogged',
        component: () => import('../views/Logged/CarritoLogged.vue'),
        meta: { requiresAuth: true }  // Esta ruta requiere autenticación
      },
    {
      path:'/ProfileView',
      name:'ProfileView',
      component:()=>import('../views/ProfileView.vue'),
      meta: { requiresAuth: true }  // Esta ruta requiere autenticación

    },{
      path:'/MessageView',
      name:'MessageView',
      component:()=>import('../views/MessageView.vue'),
      meta: { requiresAuth: true }  // Esta ruta requiere autenticación

    },{
    path:'/MisPublicaciones',
    name:'MisPublicaciones',
    component:()=>import('../views/Logged/MisPublicaciones.vue'),
    meta: { requiresAuth: true }  // Esta ruta requiere autenticación

  },
    {
      path:'/CarritoViewPublic',
      name:'CarritoViewPublic',
      component:()=>import('../views/Public/CarritoViewPublic.vue'),
      meta: { requiresAuth: true }  // Esta ruta requiere autenticación

    },
      {
        path:'/HomepageLogged',
        name:'HomepageLogged',
        component:()=>import('../views/Logged/HomepageLogged.vue'),
        meta: { requiresAuth: true }  // Esta ruta requiere autenticación

      },
      {
        path:'/CalificacionCompraLogged',
        name:'CalificacionCompraLogged',
        component:()=>import('../views/Logged/CalificacionCompraLogged.vue'),
        meta: { requiresAuth: true }  // Esta ruta requiere autenticación

      },
      
    {path:'/MisCompras',
  name: 'MisCompras',
component:()=>import('../views/Logged/MisCompras.vue'),
meta: { requiresAuth: true }  // Esta ruta requiere autenticación

},
{
  path:'/CalificationsView',
name:'CalificationsView',
component:()=>import('../views/CalificationsView.vue'),
meta: { requiresAuth: true }  // Esta ruta requiere autenticación

},
{
  path:'/productlog/:id',
  name: 'ProductDetailLogged',
  component:()=>import('../views/Logged/ProductDetailLogged.vue'),
  meta: { requiresAuth: true }  // Esta ruta requiere autenticación

},
{
  path:'/Publicar',
  name: 'Publicar',
  component:()=>import('../views/Logged/Publicar.vue'),
  meta: { requiresAuth: true }  // Esta ruta requiere autenticación

},{path:'/CarritoLoggedView',
 name: 'CarritoLoggedView'
, component:()=>import('../views/Logged/CarritoLogged.vue'),
meta: { requiresAuth: true }  // Esta ruta requiere autenticación

},
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LoginView' }); // Redirige al usuario al inicio de sesión si no está autenticado
  } else {
    next(); // Continúa con la navegación normal
  }
});


export default router
>>>>>>> c.2belen
