<template>
  <div class="modal fade" id="configuracionPerfil" tabindex="-1" aria-labelledby="configuracionPerfilLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <div class="row">
                            <div class="col-6">
                                Mi perfil
                            </div>
                            <div class="col-6">
                                <div class="rating justify-content-center">
                                    <p
                                        class="rating-text d-flex align-items-center mb-0"
                                        style="opacity: 0.5;">(1)</p>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <p
                                        class="rating-text d-flex align-items-center mb-0">5.0</p>
                                </div>
                            </div>
                        </div>
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form style="margin: 5%;">
                            <div class="mb-1">
                                <label class="form-label">Nombre</label>
                                <input type="name" class="form-control"
                                    id="InputName"
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Correo electrónico</label>
                                <input type="email" class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Contraseña</label>
                                <input type="password" class="form-control"
                                    id="exampleInputPassword1">
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Ingrese contraseña actual para confirmar cambios</label>
                                <input type="password" class="form-control"
                                    id="exampleInputPassword1">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="button" class="btn btn-primary">Guardar cambios</button>
                    </div>
                  </div>
                </div>
            </div>
</template>