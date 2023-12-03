
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
           <div class="mb-3">
              <label for="cantidad" class="form-label">Cantidad del producto</label>
              <input v-model="productData.quantity" type="number" class="form-control" id="imagen" />
            </div>
            <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input @change="handleFileUpload" type="file" class="form-control" id="imagen" />
            <button type="button" @click="uploadImage">Subir Imagen</button>
          </div>
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
import { useStore } from 'vuex';

const store = useStore();

const productData=ref({
name:'',
description:'',
price:'',
quantity:'',
user: '',
category:'',
imageId:'',
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

const imagePreview = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  productData.value.image = file;

  // Muestra la imagen previa
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const uploadImage = async () => {
  try {
    const formData = new FormData();
    formData.append('file', productData.value.image);

    const response = await axios.post('http://localhost:8080/google-drive/upload', formData);
    console.log('Imagen subida con éxito', response.data);
    productData.imageId = response.data;
    //console.log('id imagen'+productData.imageId);

    // Limpia la vista previa después de la carga exitosa
    imagePreview.value = null;
  } catch (error) {
    console.error('Error al subir la imagen', error);
  }
};

const submitPublish = async () => {
  try {

    const productDataToSend = { 
      name: productData.value.name,
      description: productData.value.description,
      price: productData.value.price,
      quantity: productData.value.quantity,
      user: { id: store.getters.id },
      category: productData.value.category || null,
      imageId: productData.imageId, // Usa el nombre correcto
    };
console.log('producto publicado', productDataToSend);
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
    console.log("error: ", error);
  }
};
</script>