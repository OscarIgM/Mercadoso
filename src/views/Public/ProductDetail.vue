<template>
  <div>
    <NavBarPublic></NavBarPublic>
    <div class="container">
      <div class="row" style="height: 100vh;">
        <div class="col d-inline-block my-5 ms-5 p-5">
          <img v-if="imagenProducto" :src="imagenProducto" class="img-fluid mx-auto d-block" :alt="product.name" />
        </div>
        <div class="col d-inline-block my-5 me-5 p-5">
          <h3 style="font-weight: bold;">{{ product.name }}</h3>
          <div class="d-flex flex-row">
            <p class="pe-2">{{ product.rating }}</p>
            <p class="ps-2">({{ product.cant_rate }})</p>
          </div>
          <h3 style="font-weight: bold;">$ {{ product.price }}</h3>
          <p>{{ product.description }}</p>
          <div class="row">
            <p class="col">Cantidad Disponible</p>
            <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">{{ product.quantity }}</p>
          </div>
          <div class="row" v-if="product.user">
            <p class="col">Vendido por</p>
            <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">{{ product.user.username }}</p>
          </div>
          <div class="d-flex flex-row mx-1">
            <button type="button" class="flex-grow-1 me-5 mt-4 btn btn-primary rounded-0" style="font-weight: bold;">
              Añadir al Carrito
            </button>
            <div class="d-flex flex-column" style="width: min-content;">
              <p>Cantidad</p>
              <div class="form-outline">
                <input type="number" id="typeNumber" value="0" :min="0" :max="product.quantity" class="form-control" />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-warning rounded-0">
              Enviar mensaje <i class="bi bi-chat-dots-fill ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBarPublic from '../../components/NavBarPublic.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const product = ref({});
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
onMounted(async () => {
  const productId = route.params.id;

  try {
    const response = await axios.get(`http://localhost:8080/products/${productId}`);
    product.value = response.data;
    obtenerUrlImagen(product.value.imageId);
  } catch (error) {
    console.error('Error al cargar detalles del producto:', error);
  }
});



</script>

