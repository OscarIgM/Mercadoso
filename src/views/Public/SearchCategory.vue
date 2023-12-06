<template>
    <div>
      <template v-if="!store.getters.isAuthenticated">
      <NavBarPublic/>
    </template>
    <template v-else-if="store.getters.isAuthenticated && store.getters.role === 'USER'">
      <NavBarLogeado />
    </template>
    <template v-else-if="store.getters.isAuthenticated && store.getters.role === 'ADMIN'">
      <NavBarAdmin />
    </template>
      <div style="position: relative; overflow: hidden;">
        <CarouselHomePage></CarouselHomePage>
      </div>
      <div class="row col-7 mx-auto gy-0 py-5">
        <template v-if="store.getters.isAuthenticated && store.getters.role === 'ADMIN'">
          <AnuncioCardAdmin
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
          />
        </template>
        <template v-else>
          <AnunciosCards
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
          />
        </template>
        
      </div>
    </div>
  
  <Pagination></Pagination>
  </template>
<script setup>
  import axios from 'axios';  
  import { ref, onMounted ,watch } from 'vue';
  import { useRoute } from 'vue-router';
  import NavBarPublic from '../../components/NavBarPublic.vue';
  import AnunciosCards from '../../components/AnunciosCards.vue';
  import Pagination from '../../components/mini_components/Pagination.vue';
  import CarouselHomePage from '../../components/CarouselHomePage.vue';
  import { useStore } from 'vuex';
  import NavBarAdmin from '../../components/admin_components/NavBarAdmin.vue';
  import NavBarLogeado from '../../components/NavBarLogeado.vue';
  import AnuncioCardAdmin from '../../components/admin_components/AnuncioCardAdmin.vue';

  const store = useStore();
  const route = useRoute();
  const category = ref(route.params.category);
  const productos = ref([]);

  const fetchProductos = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/products/filterByCategory/${category.value}`)
    productos.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Cargar productos cuando se monta el componente
onMounted(fetchProductos);

// Watcher para observar cambios en la categoría
watch(() => route.params.category, async (newCategory, oldCategory) => {
  if (newCategory !== oldCategory) {
    category.value = newCategory;
    await fetchProductos();
  }
});
</script>




  