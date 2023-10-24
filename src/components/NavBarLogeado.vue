
<template>
    <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: black" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'HomepageLogged' }" class="nav-link active-link " :class="{ active: nombreActivo === 'HomepageLogged' }">Mercadoso</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Categoría 1</a></li>
              <li><a class ="dropdown-item" href="#">Categoría 2</a></li>
              <li><a class="dropdown-item" href="#">Categoría 3</a></li>
              <li><a class="dropdown-item" href="#">Categoría 4</a></li>
              <li><a class="dropdown-item" href="#">Categoría 5</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search" @submit.prevent="searchProducts">
    <input :value="searchTerm" @input="searchTerm = $event" class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
    <button class="btn btn-outline-success" type="submit">Buscar</button>
  </form>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Publicar' }" class="nav-link active" :class="{ active: nombreActivo === 'Publicar' }">
              <IconPublish></IconPublish>Publicar
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'MisPublicaciones' }" class="nav-link active" :class="{ active: nombreActivo === 'MisPublicaciones' }">
              <IconMyPublication></IconMyPublication>Mis publicaciones
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'MessageView' }" class="nav-link active" :class="{ active: nombreActivo === 'MessageView' }">
              <IconMessages></IconMessages> Mensajes
            </router-link>
                    </li>
          <li class="nav-item">
            <router-link :to="{ name: 'CarritoLoggedView' }" class="nav-link active" :class="{ active: nombreActivo === 'CarritoLoggedView' }">
              <IconCarrito></IconCarrito> Ver carrito
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'MisCompras' }" class="nav-link active" :class="{ active: nombreActivo === 'MisCompras' }">
              <IconMiCompra></IconMiCompra> Mis compras
            </router-link>
          </li>
        </ul>
        <div class="nav-item active">
          <IconProfile></IconProfile>
        </div>
        <ProfileButton></ProfileButton>
      </div>
    </div>
  </nav>

<ProfileConfiguration></ProfileConfiguration>
    </template>


  <script>
export default {
  data() {
    return {
      nombreActivo: 'HomepageLogged', // Define el valor de nombreActivo
    };
  },
  props: {
    searchTerm: String,
  },
  methods: {
    searchProducts() {
      this.$emit('search'); // Emit the search event
    },
  },
  // Resto de la configuración de tu componente principal
};


</script>
    <script setup>
    import { RouterLink } from 'vue-router';
    import IconMessages from './icons/IconMessages.vue';
      import IconCarrito from './icons/IconCarrito.vue';
      import IconMiCompra from './icons/IconMiCompra.vue';
      import IconPublish from './icons/IconPublish.vue';
      import ProfileButton from './ProfileButton.vue';
      import IconMyPublication from './icons/IconMyPublication.vue';
      import ProfileConfiguration from './ProfileConfiguration.vue';
    </script>
    <style>
    .user-name{
        color: blue;
        font-weight: bold;
        font-size: 16px; 
    }
    
    .custom-border-bottom{
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 2px solid #dee2e6;
    }
    .active-link {
  font-weight: bold; /* Cambia el peso de la fuente para que se vea más brillante */
  color: #ff5733; /* Cambia el color del texto a tu preferencia */
  /* Otros estilos que desees aplicar */
}
    </style>