
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

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';  // Cambiado de useRoute a useRouter
import axios from 'axios';
import IconPublich from './icons/IconPublish.vue';
import IconProfile from './icons/IconProfile.vue';

const nombreActivo = defineProps(["nombreActivo"]);

const categories = ref([]);

const router = useRouter();  // Usar useRouter en lugar de useRoute

const navegar = (nombre) => {
  if (nombre === "LoginView") {
    router.push("/LoginView");
  } else if (nombre === "MyPublish") {
    router.push("/ProfileView");
  } else if (nombre === "HomepagePublic") {
    router.push("/");
  } else if (nombre === "SignupView") {
    router.push("/SignupView");
  }
};

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

onMounted(() => {
  fetchCategories();
});
</script>


    

