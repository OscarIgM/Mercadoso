<template>
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
</template>