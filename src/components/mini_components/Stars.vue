<template>
     <div class="rating d-flex justify-content-center">
              <p class="rating-text d-flex align-items-center mb-0" style="opacity: 0.5;">({{ cant_rates }})</p>
              <input :id="'star5-' + calificacion" :name="'rating-' + calificacion" value="5" type="radio" />
              <label :for="'star5-' + calificacion">&#9733;</label>
              <input :id="'star4-' + calificacion" :name="'rating-' + calificacion" value="4" type="radio" />
              <label :for="'star4-' + calificacion">&#9733;</label>
              <input :id="'star3-' + calificacion" :name="'rating-' + calificacion" value="3" type="radio" />
              <label :for="'star3-' + calificacion">&#9733;</label>
              <input :id="'star2-' + calificacion" :name="'rating-' + calificacion" value="2" type="radio" />
              <label :for="'star2-' + calificacion">&#9733;</label>
              <input :id="'star1-' + calificacion" :name="'rating-' + calificacion" value="1" type="radio" />
              <label :for="'star1-' + calificacion">&#9733;</label>
              <p class="rating-text d-flex align-items-center mb-0">{{ calificacion }}</p>
            </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
const props = defineProps({
  calificacion: {
    type: String,
    required: true,

},
cant_rates: {
    type: String,
    required: true,

}
});
const calificacion = ref(props.calificacion);
const cant_rates = ref(props.cant_rates);

</script>
