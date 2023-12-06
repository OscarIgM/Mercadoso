
<template>
  
    <nav
          class="navbar navbar-expand-sm navbar-dark"
          style="background-color: black; padding-left: 5%;"
          data-bs-theme="dark"
        >
          <div class="container-fluid" style="padding-right: 5%;">
            <a style="font-weight: bold; color: white;">
              <router-link :to="{ name: 'HomeAdmin' }" class="nav-link active-link " :class="{ active: nombreActivo === 'HomeAdmin' }">
                Mercadoso
              </router-link>
            </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <li v-for="category in categories" :key="category.id">
                    <a class="dropdown-item" @click="seleccionarCategoria(category)">
                      {{ category.name }}
                    </a>
                  </li>
                </ul>
                </li>
              </ul>
              <form class="d-flex" @submit.prevent="buscarProductos">
                <input
                  v-model="query"
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>        
              <ProfileButton :isAdmin="true"></ProfileButton>
            </div>
          </div>
        </nav>
<ProfileConfiguration></ProfileConfiguration>
    </template>
<script>
import axios from 'axios';

export default {
  data() {
    return{
      nombreActivo: 'HomeAdmin',
    };
  },
  methods: {
    navegar(nombre) {
          if (nombre === "LoginView") {
            this.$router.push("/LoginView");
          } else if (nombre === "MyPublish") {
            this.$router.push("/ProfileView");
          }
          else if (nombre === "HomepageLogged"){
            this.$router.push("/HomepageLogged");
          }
          else if (nombre === "CarritoLoggedView"){
            this.$router.push("/CarritoLoggedView");
          }
        },   
  },
};
    </script>

    <script setup>
    import IconMessages from '../icons/IconMessages.vue';
    import ProfileButton from '../ProfileButton.vue';
    import ProfileConfiguration from '../ProfileConfiguration.vue';
    import { RouterLink, useRouter, useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';


    const router = useRouter();
    const categories = ref([]);
    const query = ref('');

    const fetchCategories = () => {
    axios.get('http://localhost:8080/category')
      .then(response => {
        categories.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching categories: ', error);
      });
    };

    const seleccionarCategoria = (category) => {
      if (category && category.name) {
        console.log('Category selected:', category);
        router.push({ name: 'SearchCategory', params: { category: category.name } });
      } else {
        console.error('Invalid category:', category);
      }
    };
    

    const buscarProductos = async () => {
      try {
        console.log('buscar:', query.value);
        await router.push({ name: 'SearchBar', params: { query: query.value }
       });
        console.log('Después de redirigir');
      } catch (error) {
        console.error('Error al buscar productos:', error);
    }
  };

    onMounted(() => {
      fetchCategories();
    });

    
    </script>