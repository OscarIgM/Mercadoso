
<template>
    <NavBarLogeado></NavBarLogeado>
     <div class="col d-flex justify-content-center m-5">
      <ul>
        <h1>Publica tu producto</h1>
        
          <form @submit.prevent="submitPublish">
            <div class="mb-3">
              <input v-model="productData.name" type="text" class="form-control" id="nombreProducto" />

              <label for="nombreProducto" class="form-label">Nombre del producto</label>
            </div>
            <div class="mb-3">
              <input v-model="productData.description" type="text" class="form-control" id="categoria" />

              <label for="descripcion" class="form-label">Descripción</label>
            </div>

            <div class="mb-3">
              <input v-model="productData.price" type="number" class="form-control" id="imagen" />
              <label for="precio" class="form-label">Precio</label>
            </div>
           <!-- <div class="mb-3">
              <label for="cantidad" class="form-label">Cantidad del producto</label>
              <input type="number" class="form-control" id="imagen" />
            </div>

            <div class="mb-3">
              <label for="imagen" class="form-label">Imagen</label>
              <input type="file" class="form-control" id="imagen" />
            </div>

            <div class="mb-3">
              <label for="categoria" class="form-label">Categoría</label>
              <input type="text" class="form-control" id="categoria" />
            </div>-->

            <div class="d-grid gap-2">
              <button
                    type="submit"
                    class="btn btn-primary rounded-pill"
                    style="width: 250px; font-weight: bold">
                    Publicar
                  </button>            </div>
          </form>
        
      </ul>
    </div>
</template>

<script setup>
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import axios from 'axios';
import { ref } from 'vue';

const productData=ref({
name:'',
description:'',
price:''
})

const submitPublish = async () => {
  try {
    const productDataToSend = { 
      name:productData.value.name,
description:productData.value.name,
price:productData.value.price
    };
    const response = await axios.post('http://localhost:8080/products', productDataToSend);
    if (response.data) {
      console.log('Registro exitoso', response.data);
      // Resto del código de redirección o manejo de éxito
    } else {
      console.error('La respuesta del servidor no contiene datos:', response);
      // Puedes mostrar un mensaje de error al usuario
    }

    // Redirecciona al usuario, muestra un mensaje de éxito, etc.

  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de error
      console.error('Error de respuesta del servidor:', error.response.data);
      console.log('Respuesta completa del servidor:', error.response);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('No se recibió respuesta del servidor');
    } else {
      // Otros errores
      console.error('Error durante el registro:', error.message);
    }
  }
};
</script>