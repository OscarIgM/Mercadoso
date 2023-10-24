<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item active dropdown">
      <a class="nav-link active dropdown-toggle" href="#"
         role="button" data-bs-toggle="dropdown"
         aria-expanded="false">
        {{ perfilLabel }}
        <IconProfile></IconProfile>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#configuracionPerfil">Configuración</a></li>
        <li><a class="dropdown-item" href="#" data-toggle="modal">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { ref, computed } from 'vue';
import IconProfile from './icons/IconProfile.vue';

export default {
  props: {
    isAdmin: Boolean, // Este prop indica si el usuario es administrador
  },
  setup(props) {
    const perfilLabel = computed(() => {
      return props.isAdmin ? 'Administrador' : 'Perfil';
    });

    return { perfilLabel };
  },
};
</script>
