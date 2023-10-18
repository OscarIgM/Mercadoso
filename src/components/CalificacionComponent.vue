<template>
     <div id="seccion" class="row">
                    <div class="col-3">
                        <div class="card">
                            <img
                                src="https://media.solotodo.com/media/products/1182943_picture_1602146793.webp"
                                class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Consola
                                    Playstation 5</h5>
                                <div class="rating justify-content-center"
                                    style="font-size: 12px;">
                                    <p
                                        class="rating-text d-flex align-items-center mb-0"
                                        style="opacity: 0.5;">(209)</p>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <p
                                        class="rating-text d-flex align-items-center mb-0">5.0</p>
                                </div>
                                <p class="card-text">
                                    Conexión
                                    Wifi/Ethernet<br>
                                    2 entradas USB <br>
                                    1 entrada HDMI <br>
                                    Procesador 8 múcleos x 86 AMD</p>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center;" class="col-9">
                        <div style="margin-top: 2%;">
                            <h5>¡Ahora puedes calificar tu compra!</h5>
                        </div>
                        <div style="margin-top: 15%;">
                            <h5>Califica del 1 al 5 tu experiencia con este
                                producto</h5>
                            <div class="rating justify-content-center">
                                <input type="radio"
                                    id="star5-ConsolaPlaystation5"
                                    name="rating-ConsolaPlaystation5" value="5" />
                                <label for="star5-ConsolaPlaystation5">&#9733;</label>
                                <input type="radio"
                                    id="star4-ConsolaPlaystation5"
                                    name="rating-ConsolaPlaystation5" value="4" />
                                <label for="star4-ConsolaPlaystation5">&#9733;</label>
                                <input type="radio"
                                    id="star3-ConsolaPlaystation5"
                                    name="rating-ConsolaPlaystation5" value="3" />
                                <label for="star3-ConsolaPlaystation5">&#9733;</label>
                                <input type="radio"
                                    id="star2-ConsolaPlaystation5"
                                    name="rating-ConsolaPlaystation5" value="2" />
                                <label for="star2-ConsolaPlaystation5">&#9733;</label>
                                <input type="radio"
                                    id="star1-ConsolaPlaystation5"
                                    name="rating-ConsolaPlaystation5" value="1" />
                                <label for="star1-ConsolaPlaystation5">&#9733;</label>
                            </div>
                        </div>
                    </div>
                </div>
</template>

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