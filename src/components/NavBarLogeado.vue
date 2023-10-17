
<template>
  
    <nav
          class="navbar navbar-expand-sm navbar-dark"
          style="background-color: black"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <a
                  class="nav-link active"
                  :class="{ active: nombreActivo === 'HomepagePublic' }"
                  @click="navegar('HomepagePublic')"
                  >Mercadoso</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Categoría 1</a></li>
                    <li><a class="dropdown-item" href="#">Categoría 2</a></li>
                    <li><a class="dropdown-item" href="#">Categoría 3</a></li>
                    <li><a class="dropdown-item" href="#">Categoría 4</a></li>
                    <li><a class="dropdown-item" href="#">Categoría 5</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                  class="nav-link"
                  :class="{ active: nombreActivo === 'Mypublish' }"
                  @click="navegar('MyPublish')"
                  >
               <IconPublish></IconPublish>     Publicar</a
                  >
                </li>
                <li class="nav-item">
                  <a
                  class="nav-link"
                  :class="{ active: nombreActivo === 'Mypublish' }"
                  @click="navegar('MyPublish')"
                  >
                  <IconMyPublication></IconMyPublication>Mis publicaciones</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
              <IconMessages>
              </IconMessages>
               Mensajes</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                 <IconCarrito></IconCarrito>   Ver carrito</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <IconMiCompra></IconMiCompra>
                    Mis compras</a
                  >
                </li>
                <li class="nav-item">
                  <a
                  class="nav-link"
                  :class="{ active: nombreActivo === 'LoginView' }"
                  @click="navegar('LoginView')"
                  >Perfil
                 <IconProfile></IconProfile>
                
                 <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#configuracionPerfil">Configuración</a></li>
                                        <li><a class="dropdown-item" href="#" data-toggle="modal">Cerrar sesión</a></li>
                                    </ul></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
    <script>
    export default {
      props: ["nombreActivo"],
      methods: {
        navegar(nombre) {
          if (nombre === "LoginView") {
            this.$router.push("/LoginView");
          } else if (nombre === "MyPublish") {
            this.$router.push("/ProfileView");
          }
          else if (nombre === "HomepagePublic"){
            this.$router.push("/");
          }
        },
      },
    };
    </script>
    <script setup>
    import IconMessages from './icons/IconMessages.vue';
      import IconCarrito from './icons/IconCarrito.vue';
      import IconProfile from './icons/IconProfile.vue';
      import IconMiCompra from './icons/IconMiCompra.vue';
      import IconPublish from './icons/IconPublish.vue';
    </script>
    
    <style>
    .user-name{
        color: blue;
        font-weight: bold;
        font-size: 16px; 
    }
    
    .custom-border-bottom{
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 2px solid #dee2e6;
    }
    
    
    </style>