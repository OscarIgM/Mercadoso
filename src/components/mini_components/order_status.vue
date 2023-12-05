<template>
    <div>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="margin-top: 10%; margin-left: 10%; margin-right: 10%;">
        <div class="progress-bar" style="width: 75%"></div>
      </div>
  
      <div class="row" style="margin-top: 2%;">
        <div class="d-inline-flex gap-1" style="margin-left: 8%; margin-right: 8%;">
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'solicitado' }" type="button" class="btn">Solicitado</button>
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'procesando' }" type="button" class="btn">Procesando</button>
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'compra_exitosa' }" type="button" class="btn">Compra exitosa</button>
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'enviado' }" type="button" class="btn" >Enviado</button>
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'esperando_entrega' }" type="button" class="btn">Esperando entrega</button>
          <button :class="{ 'btn': true, 'btn-blue': order_status === 'recibido' }" type="button" class="btn" >Recibido</button>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { defineProps } from 'vue';
  
  const { order_status } = defineProps(['order_status']);
  console.log("el estado actual es",order_status);
  </script>
  
  <style>
  .btn-blue {
    background-color: blue;
    color: white;
  }



</style>