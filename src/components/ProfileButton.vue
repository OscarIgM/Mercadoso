<template>
  
  <ul class="navbar-nav mb-2 mb-lg-0">
    <li class="nav-item active dropdown">
      <a class="nav-link active dropdown-toggle" href="#"
         role="button" data-bs-toggle="dropdown"
         aria-expanded="false">
         <IconProfile></IconProfile>
        {{ perfilLabel }}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#configuracionPerfil">Configuración</a></li>
        <RouterLink  :to="name='/'">
        <li><a class="dropdown-item" href="#" data-toggle="modal" @click="logout">Cerrar sesión</a></li>
      </RouterLink>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import IconProfile from './icons/IconProfile.vue';
import { RouterLink } from 'vue-router';

const store = useStore();
const perfilLabel = computed(() => {
const userInfo=store.getters.email
  return userInfo ? userInfo : 'Perfil';
});
const logout = () => {
  store.dispatch('logout');
};
</script>

<script>
export default {
  components: { RouterLink, IconProfile },
  methods: {
    logout() {
      logout(); //Llamada a la función definida en setup
    },
  },
};
</script>
