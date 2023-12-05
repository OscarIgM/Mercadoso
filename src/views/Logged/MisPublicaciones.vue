<template>
    <NavBarLogeado></NavBarLogeado>

    <div id="body">
        <h1>Tus publicaciones</h1>
        <br>
        <div class="row">
            <div class="col-6">
                <ProductoMyPublish v-for="producto in productos" :key="producto.id" :producto="producto"
                    @producto-eliminado="eliminarProducto" @actualizar-cantidad="actualizarCantidadProducto">
                </ProductoMyPublish>
                <hr>

            </div>
        </div>
        <div class="col-4">
            <h3>Detalles de las solicitudes</h3>
            <RouterLink :to="{ name: 'MisPublicaciones' }">
                <button class="btn btn-primary" style="width: 100%;">Publicar nuevo producto</button>
            </RouterLink>
        </div>
    </div>
</template>
  
  
<script setup>
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import ProductoMyPublish from '../../components/ProductoMyPublish.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { RouterLink } from "vue-router";


const store = useStore();

const productos = ref([]);

const eliminarProducto = (productoId) => {
    // Filtrar la lista de productos para excluir el producto eliminado
    productos.value = productos.value.filter((producto) => producto.id !== productoId);
};

const actualizarCantidadProducto = ({ productId, newQuantity }) => {
    // Buscar el producto en la lista y actualizar la cantidad
    const producto = productos.value.find((p) => p.id === productId);
    if (producto) {
        producto.quantity = newQuantity;
    }
};

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/users/${store.getters.id}/products`);
        productos.value = response.data;
    } catch (error) {
        console.error('Error al obtener productos publicados:', error);
    }
});


</script>