<template>
        <div class="card">
                            <img :src="imagenItem" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ item && item.name }}</h5>
                                <div class="rating justify-content-center">
                                    <input type="radio" id="star5-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="5" />
                                    <label for="star5-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star4-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="4" />
                                    <label for="star4-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star3-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="3" />
                                    <label for="star3-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star2-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="2" />
                                    <label for="star2-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star1-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="1" />
                                    <label for="star1-ConsolaPlaystation5">&#9733;</label>
                                </div>
                                <p class="card-text">
                                 {{ item.description }}
                                </p>
                            </div>
                        </div>
</template>

<script setup>

import { defineProps } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import {ref, onMounted }from 'vue';
import { useStore } from 'vuex';
const{item}=defineProps(['item']);



const imagenItem = ref('');

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
    imagenItem.value = url;
  } catch (error) {
    console.error('Error al obtener la imagen', error);
    // Puedes manejar el error o mostrar una imagen por defecto
    imagenItem.value = 'URL_IMAGEN_POR_DEFECTO';
  }
};
onMounted(() => {
  obtenerUrlImagen(item.imageId);
});

</script>