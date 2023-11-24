<template>
    <div class="row">
        <div class="col-2">
            <img :src="producto.image" style="width:130px;">
        </div>
        <div class="col-10" style="padding-left: 5%;">
            <h4>{{ producto.name }}</h4>
            <div class="row">
                <div class="col-2">
                    <p>Cantidad</p>
                </div>
                <div class="col-3">
                    <input type="number" min="1" max="100" v-model="producto.quantity" @input="actualizarCantidad" />
                </div>
            </div>
            <h4>{{ `$ ${producto.price}` }}</h4>
            <p @click="removerProducto" style="text-align-last: right; text-decoration: underline; cursor: pointer; display: inline-block;">
                Remover
            </p>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';


const { producto } = defineProps(['producto']);
const emits = defineEmits();

const removerProducto = async () => {
    try {
        await axios.delete(`http://localhost:8080/products/delete/${producto.id}`);
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

        // Luego, realizar la llamada a la API si es necesario
        await axios.post('http://localhost:8080/products', producto);
        console.log('Cantidad del producto actualizada con éxito');
    } catch (error) {
        console.error('Error al actualizar la cantidad del producto:', error);
    }
};

</script>

