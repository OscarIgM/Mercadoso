<template>
  <div class="carousel-container d-flex mt-5 justify-content-center">
    <div id="carouselExampleIndicators" class="carousel slide" style="height: 20rem; width:30rem;">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div v-if="imagenesCargadas">
        <div class="carousel-inner">
          
          <div v-for="(producto, index) in productos" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
            <router-link
          :to="isAuthenticated ? `/productlog/${producto.id}` : `/product/${producto.id}`"
          class="card-title d-flex justify-content-center"
          style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
        >
            <img :src="producto.imagenUrl" style="width: 30rem;">
        
      </router-link>

          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const productos = ref([]);
const imagenesCargadas = ref(false);
const isAuthenticated = store.getters.isAuthenticated;

const obtenerUrlImagen = async (imageId) => {
  try {
    const response = await axios.get(`http://localhost:8080/google-drive/obtainImage?id=${imageId}`, {
      responseType: 'arraybuffer',
    });

    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    return `data:${response.headers['content-type'].toLowerCase()};base64,${base64}`;
  } catch (error) {
    console.error('Error al obtener la imagen', error);
    // Puedes manejar el error o mostrar una imagen por defecto
    return 'URL_IMAGEN_POR_DEFECTO';
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    productos.value = response.data;

    // Obtener todas las URL de las imágenes de manera asíncrona
    const promesasImagenes = productos.value.map(async (producto) => {
      producto.imagenUrl = await obtenerUrlImagen(producto.imageId);
    });

    // Esperar a que todas las promesas se resuelvan
    await Promise.all(promesasImagenes);

    // Actualizar la bandera una vez que todas las imágenes han cargado
    imagenesCargadas.value = true;
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
});
</script>
