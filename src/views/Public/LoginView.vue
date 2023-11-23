<template>
  <div id="contenedor">
    <NavBarPublic></NavBarPublic>
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh"
      >
        <div class="row" style="width: 400px">
          <div class="mx-auto">
            <h4 class="mb-3" style="font-weight: bold">Bienvenido</h4>
            <h6 class="mb-3 text-black-50">Iniciar sesión con correo</h6>
            <form @submit.prevent="submitLogin" ref="form" class="needs-validation">
              <div class="mb-3">
                <label for="email" class="form-label" style="font-weight: bold"
                  >Correo electrónico</label>
                <input
                  v-model="userData.username"
                  type="email"
                  id="email"
                  name="email"
                  class="form-control border border-secondary rounded-0"
                  required
                  
                />
                <div class="invalid-feedback">
                  Por favor ingresa un correo electrónico válido.
                </div>
              </div>

              <div class="mb-3">
                <label
                  for="password"
                  class="form-label"
                  style="font-weight: bold"
                  >Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control border border-secondary rounded-0"
                  required
                  v-model="userData.password"
                />
                <div class="invalid-feedback">
                  Por favor ingresa tu contraseña.
                </div>
              </div>
              <div class="mt-5 d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill"
                  style="width: 250px; font-weight: bold"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <div class="mt-3 d-flex justify-content-center">
              <p class="text-black-50">O crea una</p>
              <RouterLink :to="{ name: 'SignupView' }">
                <p class="ms-1 text-primary" style="font-weight: bold">
                  cuenta
                </p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBarPublic from "../../components/NavBarPublic.vue";
import { RouterLink, useRouter } from "vue-router";
import axios from "axios";
import { ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore();
const router = useRouter();

const userData = ref({
  username: '',
  password: ''
});

//AXIOS FUNCTION ASYNC
const submitLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', userData.value);
    console.log(response);
    console.log(response.data);
    // Verificar el código de estado de la respuesta del servidor
    if (response.status === 200) {
      console.log("Inicio de sesión exitoso");
      store.commit("setUsuario", response.data);
      router.push({ name: 'HomepageLogged' });
    } else {
      alert("Hubo un problema durante el inicio de sesión");
    }
  } catch(error){
    if (error.response) {
      console.error('Error de respuesta del servidor:', error.response.data);
      console.log('Respuesta completa del servidor:', error.response);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('No se recibió respuesta del servidor');
    } else {
      // Otros errores
      console.error('Error durante el inicio de sesión:', error.message);
    }
  }
};



</script>

<style>
#contenedor * {
  font-family: "Poppins", sans-serif;
}
</style>