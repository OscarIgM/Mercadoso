<template>
  <div>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="margin-top: 10%; margin-left: 10%; margin-right: 10%;">
      <div class="progress-bar" style="width: 75%"></div>
    </div>

    <div class="row" style="margin-top: 2%;">
      <div class="d-inline-flex gap-1" style="margin-left: 8%; margin-right: 8%;">
        <button @click="changeStatus('solicitado')" :class="{ 'btn': true, 'btn-blue': isStatusActive('solicitado') }" type="button" class="btn">Solicitado</button>
        <button @click="changeStatus('procesando')" :class="{ 'btn': true, 'btn-blue': isStatusActive('procesando') }" type="button" class="btn">Procesando</button>
        <button @click="changeStatus('compra_exitosa')" :class="{ 'btn': true, 'btn-blue': isStatusActive('compra_exitosa') }" type="button" class="btn">Compra exitosa</button>
        <button @click="changeStatus('enviado')" :class="{ 'btn': true, 'btn-blue': isStatusActive('enviado') }" type="button" class="btn" >Enviado</button>
        <button @click="changeStatus('esperando')" :class="{ 'btn': true, 'btn-blue': isStatusActive('esperando_entrega') }" type="button" class="btn">Esperando entrega</button>
        <button @click="changeStatus('recibido')" :class="{ 'btn': true, 'btn-blue': isStatusActive('recibido') }" type="button" class="btn" >Recibido</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { orderStatus } = defineProps(['orderStatus']);
const emits = defineEmits();

const changeStatus = (newStatus) => {
  emits('statusChanged', newStatus);
};

const isStatusActive = (status) => orderStatus === status;
</script>

<style>
.btn-blue {
  background-color: blue;
  color: white; /* Cambié el color del texto para mayor visibilidad */
}
</style>
