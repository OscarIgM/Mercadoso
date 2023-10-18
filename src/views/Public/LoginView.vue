<template>
<div id="contenedor">
    <NavBarPublic></NavBarPublic>
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

<script setup>
import NavBarPublic from '../../components/NavBarPublic.vue';

</script>
<style>
#contenedor * {
    font-family: 'Poppins', sans-serif;
}

</style>