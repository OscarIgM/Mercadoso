<template>
    <NavBarLogeado></NavBarLogeado>
            <div id="body">
                <h1>Mis compras</h1>
                <br>
                <div id="seccion" class="row">
                    <div class="col-3">
                        <div class="card">
                            <img src="https://clsonyb2c.vtexassets.com/arquivos/ids/462295/711719556220_001.jpg?v=638246950270500000" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Consola Playstation 5</h5>
                                <div class="rating justify-content-center">
                                    <input type="radio" id="star5-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="5" />
                                    <label for="star5-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star4-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="4" />
                                    <label for="star4-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star3-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="3" />
                                    <label for="star3-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star2-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="2" />
                                    <label for="star2-ConsolaPlaystation5">&#9733;</label>
                                    <input type="radio" id="star1-ConsolaPlaystation5" name="rating-ConsolaPlaystation5" value="1" />
                                    <label for="star1-ConsolaPlaystation5">&#9733;</label>
                                </div>
                                <p class="card-text">
                                    Conexión Wifi/Ethernet<br>
                                    2 entradas USB <br>
                                    1 entrada HDMI <br>
                                    Procesador 8 núcleos x 86 AMD
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div id="progreso" class="col-9">
                        <div class="progress" role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100"
                            style="margin-top: 10%; margin-left: 10%; margin-right: 10%;">
                            <div class="progress-bar" style="width: 75%"></div>
                        </div>
                        <div class="row" style="margin-top: 2%;">
                            <div class="d-inline-flex gap-1"
                                style="margin-left: 8%; margin-right: 8%;">
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Solicitado</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Procesando</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Compra exitosa</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Enviado</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Esperando entrega</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Recibido</button>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 2%;">
                            <div class="col-8"></div>
                            <div class="col-4">
                                <div class="d-grid gap-1">
                                    <button class="btn btn-primary"
                                        type="button">Confirmar recepción</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="seccion" class="row">
                    <div class="col-3">
                        <div class="card">
                            <img
                                src="https://clsonyb2c.vtexassets.com/arquivos/ids/462295/711719556220_001.jpg?v=638246950270500000"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Mueble 2 puertas <br>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                      </svg></h5>
                                <p class="card-text">Color chocolate <br>
                                    Ancho: 65 cm <br>
                                    Alto: 169 cm <br>
                                    Profundidad: 40 cm</p>
                            </div>
                        </div>
                    </div>
                    <div id="progreso" class="col-9">
                        <div class="progress" role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="100"
                            aria-valuemin="0" aria-valuemax="100"
                            style="margin-top: 10%; margin-left: 10%; margin-right: 10%;">
                            <div class="progress-bar" style="width: 100%"></div>
                        </div>
                        <div class="row" style="margin-top: 2%;">
                            <div class="d-inline-flex gap-1"
                                style="margin-left: 8%; margin-right: 8%;">
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Solicitado</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Procesando</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Compra exitosa</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Enviado</button>
                                <button id="des-estado" type="button"
                                    class="btn" disabled>Esperando entrega</button>
                                <button id="des-estado" type="button"
                                    class="btn btn-success">Recibido 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 2%;">
                            <div class="col-8"></div>
                            <div class="col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
</template>
<script setup>
import NavBarLogeado from '../../components/NavBarLogeado.vue';

</script>
<style>
#contenedor {
    font-family: 'Poppins', sans-serif;
}
#body {
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