
  <template>
    
    <nav
        class="navbar navbar-expand-sm navbar-dark"
        style="background-color: black; padding-left: 5%;"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a style="font-weight: bold; color: white;">
            <router-link :to="{ name: 'HomepagePublic.vue' }" 
            class="nav-link active-link " :class="{ active: nombreActivo === 'HomepagePublic.vue' }">
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
                  <li v-for="category in categories" :key="category.id">
                    <a class="dropdown-item" @click="seleccionarCategoria(category)">
                      {{ category.name }}
                    </a>
                  </li>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
      
              <li class="nav-item">
                <a
                class="nav-link active"
                :class="{ active: nombreActivo === 'SignupView' }"
                @click="navegar('SignupView')"
                >
              <IconPublich></IconPublich> Registrate
              </a>
              </li>
              <li class="nav-item">
                <a
                class="nav-link active"
                :class="{ active: nombreActivo === 'LoginView' }"
                @click="navegar('LoginView')"
                >
              <IconProfile></IconProfile> Inicia sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </template>
  <script>
  import axios from 'axios';

  export default {
    props: ["nombreActivo"],
    data() {
      return {
        categories :[],
      };
    },
    mounted() {
      this.fetchCategories();
    },
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
        else if (nombre === "SignupView"){
          this.$router.push("/SignupView");
        }
      },
      fetchCategories() {
      axios.get('http://localhost:8080/category')
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
      import IconPublich from './icons/IconPublish.vue';
      import IconProfile from './icons/IconProfile.vue';
    </script>

    

