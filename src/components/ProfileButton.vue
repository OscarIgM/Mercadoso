<template> <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item active dropdown">
        <a class="nav-link active dropdown-toggle" href="#"
            role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Perfil
           <IconProfile></IconProfile>
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#configuracionPerfil">Configuración</a></li>
            <li><a class="dropdown-item" href="#" data-toggle="modal">Cerrar sesión</a></li>
        </ul>
    </li>
</ul></template>

<script setup>
import IconProfile from './icons/IconProfile.vue';


</script>