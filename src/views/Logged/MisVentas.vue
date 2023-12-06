<template>
    <div>
      <NavBarLogeado></NavBarLogeado>
      <h1>Mis ventas</h1>

      <MisComprasComponent
        v-for="orden in ordenCompras"
        :key="orden.id"
        :orden="orden"
      />
    </div>
  </template>
  
<script setup>
import MisComprasComponent from '../../components/MisComprasComponent.vue';
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import { useStore } from 'vuex';
import {ref, onMounted }from 'vue';
import axios from 'axios';

const store = useStore();

const userId=store.getters.id;
const ordenCompras=ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/purchase-orders/ownerOrders/${userId}`);
    console.log("las ordenes recibidas son", ordenCompras)
    ordenCompras.value = response.data;
  } catch (error) {
    console.error('Error al obtener productos publicados:', error);
  }
});



</script>
<style>
#contenedor {
    font-family: 'Poppins', sans-serif;
}
#body {
    margin-top: 5%;
    margin-bottom: 10%;
    margin-left: 10%;
    margin-right: 10%;
}

#seccion {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1%;
    margin-top: 2% ;
}


#calificacion {
    width: 100px;
}

#estado {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0.1%;
}

#des-estado{
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

#mi-perfil{
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

  .rating input:checked ~ label {
    color: orange;
  }

  .rating-text {
    font-size: 14px; /* Ajusta el tamaño del texto según tus preferencias /
    margin-right: 5px; / Agrega un margen derecho para separar el texto de las estrellas */
    display: flex;
    margin-bottom: 20px;
  }

</style>