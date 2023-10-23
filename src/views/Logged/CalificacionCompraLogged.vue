<template>
    <NavBarLogeado></NavBarLogeado>
  <div id="cuerpo">
                <h1>Mis compras</h1>
                <br>
               <CalificacionComponent></CalificacionComponent>
                <div class="d-grid gap-2 col-6 mx-auto" style="padding-top: 3%;">
                    <button class="btn btn-primary" type="button">Guardar
                        Calificacion</button>
                </div>
            </div>


</template>
<script setup>
import NavBarLogeado from '../components/NavBarLogeado.vue';
import CalificacionComponent from '../components/CalificacionComponent.vue';

</script>