<template>
    <div class="rating">
      <p class="rating-text d-flex align-items-center mb-0" style="opacity: 0.5;">({{ cant_rates }})</p>
      <template v-for="star in 5">
        <input :id="starId(star)" :name="ratingName" :value="star" type="radio" />
        <label :for="starId(star)">&#9733;</label>
      </template>
      <p class="rating-text d-flex align-items-center mb-0">{{ rating }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const { cant_rates, rating } = defineProps(['cant_rates', 'rating']);
  const ratingName = 'rating-' + rating;
  
  const starId = (star) => `star${star}-${rating}`;
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
  }</style>
  
