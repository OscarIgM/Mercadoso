
<template>
  
<nav
      class="navbar navbar-expand-sm navbar-dark"
      style="background-color: black"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a
              class="nav-link active"
              :class="{ active: nombreActivo === 'HomepagePublic' }"
              @click="navegar('HomepagePublic')"
              >Mercadoso</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Categoría 1</a></li>
                <li><a class="dropdown-item" href="#">Categoría 2</a></li>
                <li><a class="dropdown-item" href="#">Categoría 3</a></li>
                <li><a class="dropdown-item" href="#">Categoría 4</a></li>
                <li><a class="dropdown-item" href="#">Categoría 5</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
            <li class="nav-item">
              <a
              class="nav-link active"
              :class="{ active: nombreActivo === 'CarritoViewPublic' }"
              @click="navegar('CarritoViewPublic')"
              >
             <IconCarrito></IconCarrito>   Ver carrito</a
              >
            </li>
            <li class="nav-item">
              <a
              class="nav-link active"
              :class="{ active: nombreActivo === 'LoginView' }"
              @click="navegar('LoginView')"
              >Perfil
             <IconProfile></IconProfile>   </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  props: ["nombreActivo"],
  methods: {
    navegar(nombre) {
      if (nombre === "LoginView") {
        this.$router.push("/LoginView");
      } else if (nombre === "MyPublish") {
        this.$router.push("/ProfileView");
      }
      else if (nombre === "HomepagePublic"){
        this.$router.push("/");
      }
      else if (nombre === "CarritoViewPublic"){
        this.$router.push("/CarritoViewPublic");
      }
    },
  },
};
</script>
<script setup>
import IconMessages from './icons/IconMessages.vue';
  import IconCarrito from './icons/IconCarrito.vue';
  import IconProfile from './icons/IconProfile.vue';
  import IconMiCompra from './icons/IconMiCompra.vue';
  import IconPublish from './icons/IconPublish.vue';
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


</style>