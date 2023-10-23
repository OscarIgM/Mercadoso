<script setup>
import NavBarPublic from '../components/NavBarPublic.vue';
</script>
<template>
<NavBarPublic></NavBarPublic>
<div class="container">
    <div class="row" style="height: 100vh;">
        <div class="col d-inline-block my-5 ms-5 p-5">
            <img src="https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp"
                class="img-fluid mx-auto d-block" alt="Imagen producto">
        </div>
        <div class="col d-inline-block my-5 me-5 p-5">
            <h3 style="font-weight: bold;">Consola Playstation 5</h3>
            <div class="d-flex flex-row">
                <p class="pe-2">5.0</p>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <p class="ps-2">(209)</p>
            </div>
            <h3 style="font-weight: bold;">$ 799.990</h3>
            <p>Lo que tienes que saber de este producto
                Incluye control.
                Resolución de 3840px x 2160px.
                Memoria RAM de 16GB.
                Cuenta con: 1 cable de alimentación ca, 1 cable hdmi, 1 cable de carga usb, 1 dock, 1 guía de
                inicio rápido.
                La duración de la batería de los controles depende del uso que se le dé al producto.</p>
            <div class="row">
                <p class="col">Cantidad Disponible</p>
                <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">20 unidades</p>
            </div>
            <div class="row">
                <p class="col">Vendido por</p>
                <p class="col me-5 pe-5 text-primary" style="font-weight: bold;">Nombre Usuario</p>
            </div>
            <div class="d-flex flex-row mx-1">
                <button type="button" class="flex-grow-1 me-5 mt-4 btn btn-primary rounded-0"
                    style="font-weight: bold;">Añadir al Carrito</button>
                <div class="d-flex flex-column" style="width: min-content;">
                    <p>Cantidad</p>
                    <div class="form-outline">
                        <input type="number" id="typeNumber" value="0" min="0" max="20" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-warning rounded-0">Enviar mensaje
                    <i class="bi bi-chat-dots-fill ms-1"></i>
                </button>
            </div>
        </div>
    </div>
</div>

</template>