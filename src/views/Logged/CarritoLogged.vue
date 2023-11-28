<template>
  <NavBarLogeado></NavBarLogeado>
  <div id="cuerpo">
    <h1>Tu carrito de compras</h1>
    <br>
    <div class="row">
      <div class="col-6">
        <hr>
        <ProductoCarrito v-for="producto in productos" :key="producto.id" :producto="producto"
          @producto-eliminado="eliminarProducto" @actualizar-cantidad="actualizarCantidadProducto" />
      </div>
      <div class="col-4">
        <h3>Detalles de la compra</h3>
        <div class="row">
          <div class="col-6">
            <p>Consola PlaySattion 5 x4</p>
          </div>
          <div class="col-6">
            <p style="text-align-last: right;">$3.199.960</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <p>Total</p>
          </div>
          <div class="col-6">
            <p style="text-align-last: right;">$3.199.960</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary" style="width: 100%;">Continuar compra</button>
      </div>
    </div>

  </div>
</template>


<script setup>
import ProductoCarrito from '../../components/ProductoCarrito.vue';
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

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
    const response = await axios.get(`http://localhost:8080/users/${store.state.usuario.id}/shoppingCart`);
    productos.value = response.data;
  } catch (error) {
    console.error('Error al obtener productos publicados:', error);
  }
});


</script>
    
<style>
#contenedor {
  font-family: 'Poppins', sans-serif;
}

#cuerpo {
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  margin-right: 10%;
}

#seccion {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1%;
  margin-top: 2%;
}


#calificacion {
  width: 100px;
}

#estado {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0.1%;
}

#des-estado {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

#pie {
  background-color: black;
  width: 100%;
  height: 100px;
}

.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

#mi-perfil {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 25%;
  margin-right: 25%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 5%;
}

.rating {
  display: flex;
  flex-direction: row-reverse;
}

.rating input {
  display: none;
}

.rating label {
  font-size: 1rem;
  padding: 0.25rem;
  cursor: pointer;
}

.rating input:checked~label {
  color: orange;
}

.rating-text {
  font-size: 14px;
  /* Ajusta el tamaño del texto según tus preferencias /
        margin-right: 5px; / Agrega un margen derecho para separar el texto de las estrellas */
  display: flex;
  margin-bottom: 20px;
}
</style>