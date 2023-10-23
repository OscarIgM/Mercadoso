<template>
  <div class="row">
    <ul class="custom-list">
      <li>
        <div class="col-12">
          <div class="row">
            <div class="col-2">
              <img :src="imagenUrl" style="width: 100%;">
            </div>
            <div class="col-10">
              <h4>{{ nombreProducto }}</h4>
              <div class="row">
                <div class="col-2">
                  <p>{{ cantidad }}</p>
                </div>
                <div class="col-2">
                  <input type="number" min="1" max="100" value="1" />
                </div>
              </div>
              <h4>{{ precio }}</h4>
              <p style="text-align-last: right; text-decoration: underline; padding-right: 5%;">Remover</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  imagenUrl: {
    type: String,
    required: true,
  },
  nombreProducto: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  }
});
  
const imagenUrl = ref(props.imagenUrl);
const nombreProducto = ref(props.nombreProducto);
const precio = ref(props.precio);
const cantidad = ref(props.cantidad);

</script>

<style>
.custom-list {
  list-style: none; /* Quitar los puntos de la lista */
  padding: 0; /* Eliminar el espacio de relleno predeterminado de la lista */
}

.custom-list li {
  border-bottom: 1px solid #ccc; /* Agregar una línea inferior a cada elemento */
  margin-bottom: 10px; /* Espacio entre elementos de la lista */
  padding: 10px; /* Espacio interno en cada elemento */
}
</style>
