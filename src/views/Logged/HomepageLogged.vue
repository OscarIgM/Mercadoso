<template>
  <div>
    <NavBarLogeado :searchTerm="searchTerm"></NavBarLogeado>
    <div style="position: relative; overflow: hidden;">
        <CarouselHomePage></CarouselHomePage>
    </div>
    <div class="row col-7 mx-auto gy-0 py-5" style="display: flex;">
      <AnunciosCards
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
<Pagination></Pagination>
</template>
<script setup>
import AnunciosCards from '../../components/AnunciosCards.vue';
import Pagination from '../../components/mini_components/Pagination.vue';
import { ref } from 'vue';
import axios from 'axios'; 
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import { onMounted } from 'vue';
import CarouselHomePage from '../../components/CarouselHomePage.vue';

const productos = ref([]);

(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    productos.value = response.data;
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
})();

const searchTerm = ref('');

// Método para buscar productos
const searchProducts = async () => {
  try {
    const response = await axios.get(`/api/productos?search=${searchTerm.value}`);
    productos.value = response.data;
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

onMounted(async () => {
  await searchProducts(); // Corrige la llamada a la función
});

</script>
