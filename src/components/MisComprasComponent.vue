<template>
    <div id="body">
      <br>
      <div id="seccion" class="row">
        <div class="col-3">
          <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <ProductMisComprasComponent
                v-for="(item, index) in orden.items"
                :key="index"
                :item="item"
                :class="{ 'carousel-item': true, 'active': index === activeIndex }"
              />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev" @click="prevItem">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next" @click="nextItem">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
        <div id="progreso" class="col-9">
          <order_status v-model="orden.orderStatus" @statusChanged="setStatus" />
          <div class="row" style="margin-top: 2%;">
            <div class="col-8"></div>
            <div class="col-4">
              <div class="d-grid gap-1">
                <button class="btn btn-primary"  type="button" @click="confirmarRecepcion">Confirmar recepción</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import order_status from "./mini_components/order_status.vue";
  import { defineProps, ref } from 'vue';
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  import ProductMisComprasComponent from './ProductMisComprasComponent.vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const { orden } = defineProps(['orden']);
  const userId=store.getters.id;
  const activeIndex = ref(0);

  const setStatus = async (newStatus) => {
await axios.put(`http://localhost:8080/purchase-orders/set-status?status=${newStatus}&orderId=${orden.id}`);
    console.log('Nuevo estado:', newStatus);
};

  
  console.log("item que obtenemos", orden.items);
  console.log("estado orden", orden.orderStatus);
  
  const nextItem = () => {
    activeIndex.value = (activeIndex.value + 1) % orden.items.length;
  };
  
  const prevItem = () => {
    activeIndex.value = (activeIndex.value - 1 + orden.items.length) % orden.items.length;
  };


  // Obtener usuarios vendedores a partir de cada item
  const vendedores = orden.items.map(item => item.user);

  // Obtener nombres de cada vendedor
  const nombresVendedores = vendedores.map(vendedor => vendedor.name);

  console.log("Nombres de vendedores:", nombresVendedores);
console.log("la id del usuario comprador s", userId);
console.log("la id de la orden es", orden.id);
  const confirmarRecepcion=async()=>{
try {
  await axios.delete(`http://localhost:8080/purchase-orders/${userId}/${orden.id}`);
  console.log("Recepcion confirmada eliminar todo");
  
} catch (error) {
  console.log("no se pudo realizar la recepcion");
}

  }


  </script>
  