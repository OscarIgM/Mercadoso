<template>
  <div class="col-md-4 d-flex mb-4">
    <div class="card shadow" style="height: 30rem; width: 20rem;">
      <img :src="imagenProducto" class="card-img-top row mt-3 mx-auto w-50" style="width: 100%; height: 160px; object-fit: cover;" alt="...">
      <div class="card-body" style="position: relative;">
        <router-link
          :to="isAuthenticated ? `/productlog/${producto.id}` : `/product/${producto.id}`"
          class="card-title d-flex justify-content-center"
          style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
        >
          {{ producto.name }}
        </router-link>
        <div class="d-flex justify-content-center">
          <Stars :cant_rates="producto.cant_rate" :rating="producto.rating" />
        </div>
        <p class="card-text" style="max-height: 200px">{{ producto.description }}</p>

        <div class="position-absolute bottom-0 end-0 btn-square" style="margin-bottom: 10px; margin-right: 10px;">
          <button type="button" class="btn btn-primary" style="border-radius: 0; width: 8rem;">${{ producto.price }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Stars from "./mini_components/Stars.vue";
import { defineProps } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import {ref, onMounted }from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isAuthenticated = store.getters.isAuthenticated;



const { producto } = defineProps(['producto']);
const imagenProducto = ref('');

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
    const url = `data:${response.headers['content-type'].toLowerCase()};base64,${base64}`;
    imagenProducto.value = url;
  } catch (error) {
    console.error('Error al obtener la imagen', error);
    // Puedes manejar el error o mostrar una imagen por defecto
    imagenProducto.value = 'URL_IMAGEN_POR_DEFECTO';
  }
};
onMounted(() => {
  obtenerUrlImagen(producto.imageId);
});

</script>

<style>
 .btn-square{
  border-radius: 0;
 }
</style>