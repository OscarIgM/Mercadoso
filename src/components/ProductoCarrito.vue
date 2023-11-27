<template>
  <div class="row">
    <ul class="custom-list">
      <li>
        <div class="col-12" v-if="producto.product">
          <div class="row">
            <div class="col-2">
              <img :src="producto.product.image" style="width: 100%;">
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

const { producto } = defineProps(['producto']);
const store = useStore();
const emits = defineEmits();

const removerProducto = async () => {
  try {
    await axios.delete(`http://localhost:8080/users/${store.state.usuario.id}/shoppingCart/${producto.product.id}`);
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

    await axios.post(`http://localhost:8080/users/${parseInt(store.state.usuario.id)}/shoppingCart/${producto.product.id}/${producto.quantity}`);
    console.log('Cantidad del producto actualizada con éxito');
  } catch (error) {
    console.error('Error al actualizar la cantidad del producto:', error);
  }
};


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
