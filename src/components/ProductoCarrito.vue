<template>
  <div class="row">
    <ul class="custom-list">
      <li>
        <div class="col-12" v-if="producto.product">
          <div class="row">
            <div class="col-2">
              <img :src="imagenProducto" style="width: 100%;">
            </div>
            <div class="col-10">
              <h4>{{ producto.product.name }}</h4>
              <div class="row">
                <div class="col-2">
                  <p>Cantidad</p>
                </div>
                <div class="col-2" v-if="producto.quantity">
                  <input type="number" :min="0" :max="producto.product.quantity" v-model="producto.quantity" @input="actualizarCantidad" />
                </div>
              </div>
              <h4>{{ `$ ${producto.product.price}` }}</h4>
              <p @click="removerProducto"
                style="text-align-last: right; text-decoration: underline; cursor: pointer; display: inline-block;">
                Remover
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import {ref, onMounted }from 'vue';


const { producto } = defineProps(['producto']);
const store = useStore();
const emits = defineEmits();

const removerProducto = async () => {
  try {
    const userId = parseInt(store.getters.id);
    const productId = parseInt(producto.product.id);
    console.log('las id son ',userId, productId);
    await axios.delete(`http://localhost:8080/shopping-cart/${userId}/${productId}`);
    console.log('Producto eliminado con éxito');

    // Emitir el evento para notificar al componente principal
    emits('producto-eliminado', producto.id);
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
};

const actualizarCantidad = async () => {
  try {
    // Actualizar la cantidad del producto directamente en el estado
    emits('actualizar-cantidad', {
      productId: producto.id,
      newQuantity: producto.quantity,
    });
    const userId = parseInt(store.getters.id);
    const productId = parseInt(producto.product.id);
    const productQuantity = parseInt(producto.product.quantity);
    await axios.post(`http://localhost:8080/shopping-cart/${userId}/${productId}/${productQuantity}`);
    console.log('Cantidad del producto actualizada con éxito');
  } catch (error) {
    console.error('Error al actualizar la cantidad del producto:', error);
  }
};
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
  obtenerUrlImagen(producto.product.imageId);
});

</script>

<style>
.custom-list {
  list-style: none;
  /* Quitar los puntos de la lista */
  padding: 0;
  /* Eliminar el espacio de relleno predeterminado de la lista */
}

.custom-list li {
  border-bottom: 1px solid #ccc;
  /* Agregar una línea inferior a cada elemento */
  margin-bottom: 10px;
  /* Espacio entre elementos de la lista */
  padding: 10px;
  /* Espacio interno en cada elemento */
}</style>
