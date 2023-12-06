<template>
  <div>
    <NavBarLogeado :searchTerm="searchTerm"></NavBarLogeado>
      <CarouselHomePage></CarouselHomePage>
    <div class="row col-7 mx-auto gy-0 py-5" style="display: flex;">
      <AnunciosCards
        v-for="producto in paginatedProducts"
        :key="producto.id"
        :producto="producto"
      />
    </div>

    <Pagination :currentPage="currentPage" :totalPages="totalPages" @changePage="changePage"></Pagination>
  </div>
</template>
<script setup>
import AnunciosCards from '../../components/AnunciosCards.vue';
import Pagination from '../../components/mini_components/Pagination.vue';
import { ref, computed } from 'vue';
import axios from 'axios';
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import { onMounted } from 'vue';
import CarouselHomePage from '../../components/CarouselHomePage.vue';

const productos = ref([]);
const currentPage = ref(1);
const pageSize = ref(6);
const totalPages = ref(1);
const searchTerm = ref(""); 

onMounted(async () => {
  await loadProducts();
});

const loadProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    productos.value = response.data;
    totalPages.value = Math.ceil(response.data.length / pageSize.value);
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return productos.value.slice(startIndex, endIndex);
});

const changePage = async (page) => {
  currentPage.value = page;
};

</script>