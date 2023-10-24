<template>
  <div>
    <NavBarPublic></NavBarPublic>
    <div class="row col-7 mx-auto gy-0 py-5">
      <AnunciosCards
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script setup>
import NavBarPublic from '../../components/NavBarPublic.vue';
import AnunciosCards from '../../components/AnunciosCards.vue';

// Importa Axios para realizar la solicitud HTTP
import { ref } from 'vue';
import axios from '../../axios-mock.js'; // Ajusta la ruta según la ubicación de tu archivo

// Define una variable reactiva para almacenar los productos
const productos = ref([]);

// Realiza una solicitud GET para cargar los productos
(async () => {
  try {
    const response = await axios.get('/api/productos');
    // Asigna los productos recibidos de la respuesta a la variable reactiva
    productos.value = response.data;
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
})();
</script>
