<template>
  <div id="contenedor">
    <NavBarPublic></NavBarPublic>
    <div id="contenedor">
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh"
      >
        <div class="row" style="width: 400px">
          <div class="mx-auto">
            <h4 class="mb-3" style="font-weight: bold">Bienvenido</h4>
            <h6 class="mb-3 text-black-50">Registrate gratis</h6>

            <form @submit.prevent="submitSignup" id="register" name="register">

              <div class="mb-3">
                <label for="username" class="form-label" style="font-weight: bold">Nombre</label>
                <input v-model="userData.username" type="text" id="username" name="email" class="form-control border border-secondary rounded-0" required/>
                <div class="invalid-feedback">
                  Por favor ingresa tu nombre.
                </div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label" style="font-weight: bold">Correo electronico</label>
                <input v-model="userData.email" type="email" id="email" name="email" class="form-control border border-secondary rounded-0" required/>
                <div class="invalid-feedback">
                  Por favor ingresa tu correo electronico.
                </div>
              </div>

              <div class="mb-3">
                <label
                  for="password"
                  class="form-label"
                  style="font-weight: bold"
                  >Contraseña</label
                >
                <input v-model="userData.password"
                  type="password"
                  id="password"
                  name="password"
                  class="form-control border border-secondary rounded-0"
                  required
                />
                <div class="invalid-feedback">
                  Porfavor ingresa tu contraseña.
                </div>
              </div>
              <div class="mt-5 d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary rounded-pill"
                    style="width: 250px; font-weight: bold">
                    Registrarme
                  </button>
              </div>
              <div class="mt-3 d-flex justify-content-center">
                <p class="text-black-50">O</p>
                <RouterLink :to="{ name: 'LoginView' }">
                  <p class="ms-1 text-primary" style="font-weight: bold">
                    inicia sesión
                  </p>
                </RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavBarPublic from "../../components/NavBarPublic.vue";
import axios from 'axios';
import { ref } from 'vue';

const userData = ref({
  username: '',
  email: '',
  password: ''
});

const submitSignup = async () => {
  try {
    const userDataToSend = { 
      username: userData.value.username,
      email: userData.value.email,
      password: userData.value.password
    };

    // Realiza la solicitud POST al endpoint de registro
    const response = await axios.post('http://localhost:8080/auth/register', userDataToSend);

    if (response.data) {
      console.log('Registro exitoso', response.data);
      // Resto del código de redirección o manejo de éxito
    } else {
      console.error('La respuesta del servidor no contiene datos:', response);
      // Puedes mostrar un mensaje de error al usuario
    }

    // Redirecciona al usuario, muestra un mensaje de éxito, etc.

  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de error
      console.error('Error de respuesta del servidor:', error.response.data);
      console.log('Respuesta completa del servidor:', error.response);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('No se recibió respuesta del servidor');
    } else {
      // Otros errores
      console.error('Error durante el registro:', error.message);
    }
  }
};
</script>



<style>
#contenedor * {
  font-family: "Poppins", sans-serif;
}
</style>
