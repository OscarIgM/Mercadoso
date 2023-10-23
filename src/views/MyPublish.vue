<template>
  <NavBarLogeado></NavBarLogeado>

            <div id="body">
                <h1>Tus publicaciones</h1>
                <br>
                <div class="row">
                    <div class="col-6">
                       <ProductoMyPublish></ProductoMyPublish>
                       <ProductoMyPublish></ProductoMyPublish>
                        <hr>

                    </div>
                    <div class="col-4">
                        <h3>Detalles de las solicitudes</h3>
                        <div>
                            <p style="color: #0d6efd; font-size: 18px; font-style: normal;
                            font-weight: 700; line-height: normal; letter-spacing: -0.3px;">Nombre de usuario 1
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" fill="currentColor"
                                    class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-9">
                                <p>Consola PlayStation 5 x 4</p>
                            </div>
                            <div class="col-3">
                                <p style="text-align-last: right;">$3.199.960</p>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <p style="color: #0d6efd; font-size: 18px; font-style: normal;
                            font-weight: 700; line-height: normal; letter-spacing: -0.3px;">Nombre de usuario 2
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" fill="currentColor"
                                    class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-9">
                                <p>Consola PlayStation 5 x 4</p>
                            </div>
                            <div class="col-3">
                                <p style="text-align-last: right;">$3.199.960</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"
                            style="width: 100%;">Publicar nuevo producto</button>
                    </div>
                </div>

            </div>
</template>


<script setup>
import NavBarLogeado from '../components/NavBarLogeado.vue';
import ProductoMyPublish from '../components/ProductoMyPublish.vue';
</script>