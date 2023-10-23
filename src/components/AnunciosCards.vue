<template>
      <div class="col-md-4 d-flex mb-4">
        <div class="card shadow" style="height: 30rem; width: 20rem;">
          <img :src="imagen" class="card-img-top row mt-3 mx-auto w-50" style="width: 100%; height: 160px; object-fit: cover;" alt="...">
          <div class="card-body" style="position: relative;">
            <h5 class="card-title d-flex justify-content-center" style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
              {{ nombre }}
            </h5>
            <div class="rating d-flex justify-content-center">
              <p class="rating-text d-flex align-items-center mb-0" style="opacity: 0.5;">({{ cant_rates }})</p>
              <input :id="'star5-' + nombre" :name="'rating-' + nombre" value="5" type="radio" />
              <label :for="'star5-' + nombre">&#9733;</label>
              <input :id="'star4-' + nombre" :name="'rating-' + nombre" value="4" type="radio" />
              <label :for="'star4-' +nombre">&#9733;</label>
              <input :id="'star3-' + nombre" :name="'rating-' + nombre" value="3" type="radio" />
              <label :for="'star3-' + nombre">&#9733;</label>
              <input :id="'star2-' + nombre" :name="'rating-' + nombre" value="2" type="radio" />
              <label :for="'star2-' + nombre">&#9733;</label>
              <input :id="'star1-' + nombre" :name="'rating-' + nombre" value="1" type="radio" />
              <label :for="'star1-' + nombre">&#9733;</label>
              <p class="rating-text d-flex align-items-center mb-0">{{ rating }}</p>
            </div>
            <p class="card-text" style="max-height: 200px">{{descripcion }}</p>
            <div class="position-absolute bottom-0 end-0 btn-square" style="margin-bottom: 10px; margin-right: 10px;">
              <button type="button" class="btn btn-primary" style="border-radius: 0; width: 8rem;">${{ precio }}</button>
            </div>
          </div>
        </div>
      </div>
  </template>

<script setup>
 
 import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  nombre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },cant_rates: {
    type: Number,
    required: true,
  },descripcion: {
    type: String,
    required: true,
  },imagen: {
    type: String,
    required: true,
  } ,
  precio: {
    type: Number,
    required: true,
  }
 
});
  
const nombre = ref(props.nombre);
const imagen = ref(props.imagen);
const precio = ref(props.precio);
const rating=ref(props.rating)
const cant_rates=ref(props.cant_rates)
const descripcion=ref(props.descripcion)

</script>

<style>
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
  
  .rating input:checked ~ label {
    color: orange;
  }
  .card{
    border-radius: 0;
  }
  .rating-text {
    font-size: 14px; 
    margin-right: 5px; 
    display: flex;
    margin-bottom: 20px;
  }

 .btn-square{
  border-radius: 0;
 }
 

  
 

</style>