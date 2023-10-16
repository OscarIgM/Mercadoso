<template>

<div id="contenedor">

<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: black;">
    <div class="container">
        <a class="navbar-brand text" href="./index.html" style="font-weight:bold;">Mercadoso</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="./product.html">Productos</a>
                </li>
                <form class="d-flex ms-5">
                    <span class="input-group-text border border-0"
                        style="background-color: black; color: white;"><i class="bi bi-search"></i></span>
                    <input class="form-control me-2"
                        style="width: 400px; background-color: black; color: white;" type="text"
                        placeholder="Buscar">
                </form>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item ms-auto">
                    <a class="nav-link text-white"><router></router>Iniciar Sesion/ Registrarse</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
        <div class="row" style="width: 400px;">
            <div class="mx-auto">
                <h4 class="mb-3" style="font-weight:bold;">Bienvenido</h4>
                <h6 class="mb-3 text-black-50">Iniciar sesion con correo</h6>
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="email" class="form-label" style="font-weight:bold;">Correo
                            electronico</label>
                        <input type="email" id="email"
                            class="form-control border border-secondary rounded-0" required />
                        <div class="invalid-feedback">Porfavor ingresa tu correo electronico.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label" style="font-weight:bold;">Contraseña</label>
                        <input type="password" id="password"
                            class="form-control border border-secondary rounded-0" required />
                        <div class="invalid-feedback">Porfavor ingresa tu contraseña.</div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary rounded-pill"
                            style="width: 250px; font-weight: bold;">Iniciar Sesion</button>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                        <p class="text-black-50">O crea una</p>
                        <a href="#">
                            <p class="ms-1 text-primary" style="font-weight: bold;">cuenta</p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</div>
</template>


<style>
#contenedor * {
    font-family: 'Poppins', sans-serif;
}

</style>