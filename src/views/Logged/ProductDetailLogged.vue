<template>
    <div>
      <NavBarLogeado></NavBarLogeado>
      <div class="container">
        <div class="row" style="height: 100vh;">
          <div class="col d-inline-block my-5 ms-5 p-5">
            <img :src="product.imagen" class="img-fluid mx-auto d-block" :alt="product.nombre" />
          </div>
          <div class="col d-inline-block my-5 me-5 p-5">
            <h3 style="font-weight: bold;">{{ product.nombre }}</h3>
            <div class="d-flex flex-row">
              <p class="pe-2">{{ product.rating }}</p>
              <p class="ps-2">({{ product.cant_rates }})</p>
            </div>
            <h3 style="font-weight: bold;">$ {{ product.precio }}</h3>
            <p>{{ product.descripcion }}</p>
            <div class="row">
              <p class="col">Cantidad Disponible</p>
              <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">{{ product.cantidad }}</p>
            </div>
            <div class="row">
              <p class="col">Vendido por</p>
              <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">{{ product.vendedor }}</p>
            </div>
            <div class="d-flex flex-row mx-1">
              <button type="button" class="flex-grow-1 me-5 mt-4 btn btn-primary rounded-0" style="font-weight: bold;">
                Añadir al Carrito
              </button>
              <div class="d-flex flex-column" style="width: min-content;">
                <p>Cantidad</p>
                <div class="form-outline">
                  <input type="number" id="typeNumber" value="0" :min="0" :max="product.cantidad" class="form-control" />
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
  <script>
  
  
  export default {
    components: {
      NavBarLogeado,
    },
    data() {
      return {
        product: {}, // Objeto para almacenar los detalles del producto
      };
    },
    created() {
      this.loadProductDetails();
    },
    methods: {
      async loadProductDetails() {
        const productId = this.$route.params.id; // Obtén el ID del producto desde la ruta
  
        try {
          const response = await axios.get(`/api/productos/${productId}`);
          this.product = response.data;
        } catch (error) {
          console.error('Error al cargar detalles del producto:', error);
        }
      },
    },
  };
  </script>
  
  <script setup>
  import NavBarLogeado from '../../components/NavBarLogeado.vue';
  import axios from '../../axios-mock.js'; // Ajusta la ruta según la ubicación de tu archivo
  </script>
  
  