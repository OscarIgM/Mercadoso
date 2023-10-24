
<template>
    <NavBarLogeado></NavBarLogeado>
     <div class="col d-flex justify-content-center m-5">
      <ul>
        <h1>Publica tu producto</h1>
        
          <form>
            <div class="mb-3">
              <label for="nombreProducto" class="form-label">Nombre del producto</label>
              <input type="text" class="form-control" id="nombreProducto" />
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <input type="text" class="form-control" id="categoria" />
            </div>

            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input type="number" class="form-control" id="imagen" />
            </div>
            <div class="mb-3">
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
            </div>

            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">Publicar</button>
            </div>
          </form>
        
      </ul>
    </div>
</template>

<script setup>
import NavBarLogeado from '../../components/NavBarLogeado.vue';
</script>