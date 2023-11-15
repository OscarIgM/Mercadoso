<template>
  <div class="col-md-4 d-flex mb-4">
    <div class="card shadow" style="height: 30rem; width: 20rem;">
      <img :src="producto.image" class="card-img-top row mt-3 mx-auto w-50" style="width: 100%; height: 160px; object-fit: cover;" alt="...">
      <div class="card-body" style="position: relative;">
        <router-link :to="`/product/${producto.id}`">
        <h5 class="card-title d-flex justify-content-center" style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
          {{ producto.name }}
        </h5>
      </router-link>
        <div class="d-flex justify-content-center">
          <Stars :cant_rates="producto.cant_rate" :rating="producto.rating" />
        </div>
        <p class="card-text" style="max-height: 200px">{{ producto.description }}</p>

        <div class="position-absolute bottom-0 end-0 btn-square" style="margin-bottom: 10px; margin-right: 10px;">
          <button type="button" class="btn btn-primary" style="border-radius: 0; width: 8rem;">${{ producto.price }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Stars from "./mini_components/Stars.vue";
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { producto } = defineProps(['producto']);
</script>

<style>
 .btn-square{
  border-radius: 0;
 }
 

  
 

</style>