<template>
<div>
  <NavBarAdmin></NavBarAdmin>
  <div style="position: relative; overflow: hidden;">
    <CarouselHomePage></CarouselHomePage>
  </div>
  <div class="row col-7 mx-auto gy-0 py-5" style="display: flex;">
    <AnuncioCardAdmin
    v-for="producto in productos"
    :key="producto.id"
    :producto="producto"
    />
  </div>  
</div>
  <Pagination></Pagination>      
</template>

<script setup>
import AnuncioCardAdmin from '../../components/admin_components/AnuncioCardAdmin.vue';
import NavBarAdmin from '../../components/admin_components/NavBarAdmin.vue';
import { ref } from 'vue';
import axios from 'axios'; 
import Pagination from '../../components/mini_components/Pagination.vue';
import CarouselHomePage from "@/components/CarouselHomePage.vue";

const productos = ref([]);
(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    productos.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
})();

</script>