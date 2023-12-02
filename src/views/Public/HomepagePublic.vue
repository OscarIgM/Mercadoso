<template>
  <div>
    <NavBarPublic></NavBarPublic>
    <div style="position: relative; overflow: hidden;">
      <CarouselHomePage></CarouselHomePage>
    </div>
    <div class="row col-7 mx-auto gy-0 py-5">
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
import NavBarPublic from '../../components/NavBarPublic.vue';
import AnunciosCards from '../../components/AnunciosCards.vue';
import Pagination from '../../components/mini_components/Pagination.vue';
import CarouselHomePage from '../../components/CarouselHomePage.vue';
import { ref } from 'vue';
import axios from 'axios';
const productos = ref([]);
(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    productos.value = response.data;
    console.log(productos.value);
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
})();
</script>
