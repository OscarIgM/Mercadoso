<template>
    <NavBarPublic>
    </NavBarPublic>

    <div class="row col-7 mx-auto gy-0 py-5">
<AnunciosCards v-for="producto in productos"
:nombre="producto.nombre"
:rating="producto.rating"
:cant_rates="producto.cant_rates"
:imagen="producto.imagen"
:descripcion="producto.descripcion"
:precio="producto.precio"/>
</div>
    </template>
    
  <script setup>
import NavBarPublic from '../../components/NavBarPublic.vue';
import AnunciosCards from '../../components/AnunciosCards.vue';
</script>
<script>
export default {
  data() {
    return {
      productos: [
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
      ]
    };
  }
}
</script>