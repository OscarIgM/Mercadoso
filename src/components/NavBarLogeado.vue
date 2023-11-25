
    <template>
        <nav 
          class="navbar navbar-expand-sm navbar-dark" 
          style="background-color: black; padding-left: 5%;" 
          data-bs-theme="dark"
        >
        <div class="container-fluid" style="padding-right: 5%;">
          <a style="font-weight: bold; color: white;">
          <router-link :to="{ name: 'HomepageLogged' }" 
          class="nav-link active-link " :class="{ active: nombreActivo === 'HomepageLogged' }">
          Mercadoso
          </router-link>
          </a>
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
                aria-expanded="false">
                Productos
                </a>
                <ul class="dropdown-menu">
                  <li v-for="category in categories" :key="category">
                    <a class="dropdown-item" @click="seleccionarCategoria(category)">
                      {{ category }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form 
            class="d-flex" 
            role="search" 
            @submit.prevent="searchProducts">
            <input :value="searchTerm" @input="searchTerm = $event" 
            class="form-control me-2" 
            type="search" 
            placeholder="Buscar" 
            aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style="margin-right: 3%;">

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
          <li class="nav-link active">
              <ProfileButton></ProfileButton>
          </li>
        </div> 
      </div>
    </nav>

  <ProfileConfiguration></ProfileConfiguration>
      </template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      nombreActivo: 'HomepageLogged', // Define el valor de nombreActivo
      categories :[],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  props: {
    searchTerm: String,
  },
  methods: {
    searchProducts() {
        this.$emit('search'); // Emit the search event
    },
    fetchCategories() {
      axios.get('http://localhost:8080/products/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error('Error fetching categories: ', error);
      });
    },
    seleccionarCategoria(category) {
      console.log('Category selected:', category);
    },
  },
};
</script> 
<script setup>
import { RouterLink } from 'vue-router';
import IconMessages from './icons/IconMessages.vue';
import IconCarrito from './icons/IconCarrito.vue';
import IconMiCompra from './icons/IconMiCompra.vue';
import IconPublish from './icons/IconPublish.vue';
import IconMyPublication from './icons/IconMyPublication.vue';
import ProfileConfiguration from './ProfileConfiguration.vue';
import ProfileButton from './ProfileButton.vue';
</script>
    