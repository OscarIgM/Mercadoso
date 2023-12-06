import { createRouter, createWebHistory } from 'vue-router';
import HomepagePublic from '../views/Public/HomepagePublic.vue';
import { useStore } from 'vuex';

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
      },{
        path:'/SignupView',
        name:'SignupView',
        component: ()=>import('../views/Public/SignupView.vue')
      },{
        path:'/SearchBar/:query',
        name:'SearchBar',
        component: ()=>import('../views/Public/SearchBar.vue')
      },{
        path:'/SearchCategory/:category',
        name:'SearchCategory',
        component: ()=>import('../views/Public/SearchCategory.vue')
      },
      //LOGEADAS
      {
        path: '/CarritoLogged',
        name: 'CarritoLogged',
        component: () => import('../views/Logged/CarritoLogged.vue'),
        meta: { requiresAuth: true, isUser: true } 
      },
    {
      path:'/ProfileView',
      name:'ProfileView',
      component:()=>import('../views/ProfileView.vue'),
      meta: { requiresAuth: true, isUser: true }  

    },{
      path:'/MessageView',
      name:'MessageView',
      component:()=>import('../views/MessageView.vue'),
      meta: { requiresAuth: true, isUser: true }  

    },{
    path:'/MisPublicaciones',
    name:'MisPublicaciones',
    component:()=>import('../views/Logged/MisPublicaciones.vue'),
    meta: { requiresAuth: true, isUser: true }

  },
    {
      path:'/CarritoViewPublic',
      name:'CarritoViewPublic',
      component:()=>import('../views/Public/CarritoViewPublic.vue'),
      meta: { requiresAuth: true, isUser: true }  

    },
      {
        path:'/HomepageLogged',
        name:'HomepageLogged',
        component:()=>import('../views/Logged/HomepageLogged.vue'),
        meta: { requiresAuth: true, isUser: true } 

      },
      {
        path:'/CalificacionCompraLogged',
        name:'CalificacionCompraLogged',
        component:()=>import('../views/Logged/CalificacionCompraLogged.vue'),
        meta: { requiresAuth: true, isUser: true }  

      },
      
    {path:'/MisCompras',
  name: 'MisCompras',
component:()=>import('../views/Logged/MisCompras.vue'),
meta: { requiresAuth: true, isUser: true }  

},
{
  path:'/CalificationsView',
name:'CalificationsView',
component:()=>import('../views/CalificationsView.vue'),
meta: { requiresAuth: true, isUser: true }  

},
{
  path:'/productlog/:id',
  name: 'ProductDetailLogged',
  component:()=>import('../views/Logged/ProductDetailLogged.vue'),
  meta: { requiresAuth: true, isUser: true }  

},
{
  path:'/misventas',
  name: 'misventas',
component:()=>import('../views/Logged/misventas.vue'),
meta:{requiresAuth:true, isUser:true} 
},
{
  path:'/Publicar',
  name: 'Publicar',
  component:()=>import('../views/Logged/Publicar.vue'),
  meta: { requiresAuth: true, isUser: true }  

},{path:'/CarritoLoggedView',
 name: 'CarritoLoggedView'
, component:()=>import('../views/Logged/CarritoLogged.vue'),
meta: { requiresAuth: true, isUser: true }  

},
//ADMIN
{
  path:'/HomeAdmin',
  name:'HomeAdmin',
  component:()=>import('../views/Admin/HomeAdmin.vue'),
  meta: { requiresAuth: true, isAdmin: true }
},
{
  path:'/ProductoAdmin/:id',
  name:'ProductoAdmin',
  component:()=>import('../views/Admin/ProductoAdmin.vue'),
  meta: { requiresAuth: true, isAdmin: true }
},
{
  path:'/UsuarioAdmin',
  name:'UsuarioAdmin',
  component:()=>import('../views/Admin/UsuarioAdmin.vue'),
  meta: { requiresAuth: true, isAdmin: true }
}
  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  const isAuthenticated = store.getters.isAuthenticated;
  const userRole = isAuthenticated ? store.getters.role : null;
  if (to.name === 'SearchCategory' || to.name === 'SearchBar') {
    // Si la ruta es 'FilterProductsPublic', permitir el acceso sin restricciones
    next();
  } else {
  if (!to.meta.requiresAuth) {
    if (!isAuthenticated) {
      next(); 
    } else {
      next({ name: userRole === "ADMIN" ? 'HomeAdmin' : 'HomepageLogged' });
    }
  } else {
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'LoginView' }); 
    } else {
      if ("USER" !== userRole && "ADMIN" !== userRole) {
        next(false);
      } else {
        if (userRole === "ADMIN" && to.meta.isAdmin) {
          next(); 
        } else if (userRole === "USER" && to.meta.isUser) {
          next(); 
        } else {
          next({ name: userRole === "ADMIN" ? 'HomeAdmin' : 'HomepageLogged' });
        }
      }
    }
  }
}
});


export default router;
