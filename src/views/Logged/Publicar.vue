
<template>
    <NavBarLogeado></NavBarLogeado>
     <div class="col d-flex justify-content-center m-5">
      <ul>
        <h1>Publica tu producto</h1>
        
          <form @submit.prevent="submitPublish">
            <div class="mb-3">
              <label for="nombreProducto" class="form-label">Nombre del producto</label>
              <input v-model="productData.name" type="text" class="form-control" id="name" required/>
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <input v-model="productData.description" type="text" class="form-control" id="description" required/>
            </div>

            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input v-model="productData.price" type="number" class="form-control" id="price" required/>
            </div>
           <!-- <div class="mb-3">
              <label for="cantidad" class="form-label">Cantidad del producto</label>
              <input type="number" class="form-control" id="imagen" />
            </div>

            <div class="mb-3">
              <label for="imagen" class="form-label">Imagen</label>
              <input type="file" class="form-control" id="imagen" />
            </div>-->
            <div class="mb-3">
              <label for="categoria" class="form-label">Categoría (opcional)</label>
              <select v-model="productData.category" class="form-select form-select-sm">
              <option value=''>Seleccionar categoría</option>
              <option v-for="category in categories" :key="category.id" :value="category">{{ category.name }}</option>
            </select>
            </div>

            <div class="d-grid gap-2">
              <button
                    type="submit"
                    class="btn btn-primary rounded-pill"
                    style="font-weight: bold">
                    Publicar
                  </button>           
                 </div>
          </form>
      </ul>
    </div>
</template>

<script setup>
import NavBarLogeado from '../../components/NavBarLogeado.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const productData=ref({
name:'',
description:'',
price:'',
category:''
});

const categories = ref([]);

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:8080/category');
    if (response.data) {
      categories.value = response.data;
    } else {
      console.error('La respuesta del servidor no contiene datos:', response);
    }
  } catch (error) {
    console.error('Error al obtener categorías:', error);
  }
};

onMounted(() => {
  fetchCategories();
});

const submitPublish = async () => {
  try {
    const productDataToSend = { 
      name:productData.value.name,
      description:productData.value.description,
      price:productData.value.price,
      category:productData.value.category || null
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