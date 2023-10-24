<template>

    <NavBarPublic></NavBarPublic>
    
    <div id="cuerpo">
                    <h1>Tu carrito de compras</h1>
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <hr>
                            <ProductoCarrito
  v-for="producto in productos"
  :imagenUrl="producto.imagenUrl"
  :nombreProducto="producto.nombreProducto"
  :precio="producto.valor"
  :cantidad="producto.cantidad"
/>
                   </div>
                        <div class="col-4">
                            <h3>Detalles de la compra</h3>
                            <div class="row">
                                <div class="col-6"><p>Consola PlaySattion 5 x4</p></div>
                                <div class="col-6"><p style="text-align-last: right;">$3.199.960</p></div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-6"><p>Total</p></div>
                                <div class="col-6"><p style="text-align-last: right;">$3.199.960</p></div>
                            </div>
                            <button type="button" class="btn btn-primary" style="width: 100%;">Continuar compra</button>
                        </div>
                    </div>
    
                </div>
    </template>

    <script>
export default {
  data() {
    return {
      productos: [
        {
          "imagenUrl": "https://clsonyb2c.vtexassets.com/arquivos/ids/462295/711719556220_001.jpg?v=638246950270500000",
          "nombreProducto": "Playstation 5",
          "cantidad": "1",
          "valor": "400.000"
        },
        {
          "imagenUrl": "https://falabella.scene7.com/is/image/Falabella/15790950_1?wid=800&hei=800&qlt=70",
          "nombreProducto": "Not ps5",
          "cantidad": "1",
          "valor": "400.000"
        }
      ]
    };
  }
}

</script>
<script setup>
import NavBarPublic from '../../components/NavBarPublic.vue';
import ProductoCarrito from '../../components/ProductoCarrito.vue';


</script>
    
    <style>
    #contenedor {
        font-family: 'Poppins', sans-serif;
    }
    #cuerpo {
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