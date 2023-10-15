<template>
    <div class="row col-7 mx-auto gy-0 py-5" id="cardsContainer1">
      <div v-for="(producto, index) in productos" :key="index" class="col-md-4 d-flex mb-4">
        <div class="card shadow" style="height: 30rem; width: 20rem;">
          <img :src="producto.imagen" class="card-img-top row mt-3 mx-auto w-50" style="width: 100%; height: 160px; object-fit: cover;" alt="...">
          <div class="card-body" style="position: relative;">
            <h5 class="card-title d-flex justify-content-center" style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
              {{ producto.nombre }}
            </h5>
            <div class="rating d-flex justify-content-center">
              <p class="rating-text d-flex align-items-center mb-0" style="opacity: 0.5;">({{ producto.cant_rates }})</p>
              <input :id="'star5-' + producto.nombre" :name="'rating-' + producto.nombre" value="5" type="radio" />
              <label :for="'star5-' + producto.nombre">&#9733;</label>
              <input :id="'star4-' + producto.nombre" :name="'rating-' + producto.nombre" value="4" type="radio" />
              <label :for="'star4-' + producto.nombre">&#9733;</label>
              <input :id="'star3-' + producto.nombre" :name="'rating-' + producto.nombre" value="3" type="radio" />
              <label :for="'star3-' + producto.nombre">&#9733;</label>
              <input :id="'star2-' + producto.nombre" :name="'rating-' + producto.nombre" value="2" type="radio" />
              <label :for="'star2-' + producto.nombre">&#9733;</label>
              <input :id="'star1-' + producto.nombre" :name="'rating-' + producto.nombre" value="1" type="radio" />
              <label :for="'star1-' + producto.nombre">&#9733;</label>
              <p class="rating-text d-flex align-items-center mb-0">{{ producto.rating }}</p>
            </div>
            <p class="card-text" style="max-height: 200px">{{ producto.descripcion }}</p>
            <div class="position-absolute bottom-0 end-0 btn-square" style="margin-bottom: 10px; margin-right: 10px;">
              <button type="button" class="btn btn-primary" style="border-radius: 0; width: 8rem;">${{ producto.precio }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
  const productos = [
    {
      "nombre": "Consola Playstation 5",
      "rating": 4.5,
      "cant_rates":50,
      "descripcion": "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
      "imagen": "https://prophonechile.cl/wp-content/uploads/2021/04/ps5digital.png",
      "precio": 460000.00
    },
    {
      "nombre": "Libro Harry Potter y la piedra filosofal",
      "rating": 3.8,
      "cant_rates":101,
      "descripcion": "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
      "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
      "precio": 75.50
    },
    {
      "nombre": "Bicinave",
      "rating": 4.2,
      "cant_rates":902,
      "descripcion": "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
      "imagen": "https://r.btcdn.co/r/eyJzaG9wX2lkIjozNzAwLCJnIjoiMTAwMHgifQ/c9c824a626e2b91/807014-1044050-1.jpg",
      "precio": 12022.00
    },
    {
      "nombre": "Producto 4",
      "rating": 1.2,
      "cant_rates":670,
      "descripcion": "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
      "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
      "precio": 12000.00
    },
    {
      "nombre": "Producto 5",
      "rating": 5.2,
      "cant_rates":2002,
      "descripcion": "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
      "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
      "precio": 12330.00
    },
    {
      "nombre": "Producto 6",
      "rating": 6.2,
      "cant_rates":142,
      "descripcion": "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
      "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
      "precio": 1560.00
    }
  ];
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
  }

 .btn-square{
  border-radius: 0;
 }
 

  
 

</style>