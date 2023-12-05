<template>
    <div class="modal fade" id="configuracionPerfil" tabindex="-1" aria-labelledby="configuracionPerfilLabel"
        aria-hidden="true">
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
                                    <p class="rating-text d-flex align-items-center mb-0" style="opacity: 0.5;">(1)</p>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <label>&#9733;</label>
                                    <p class="rating-text d-flex align-items-center mb-0">5.0</p>
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
                            <input v-model="formData.name" type="name" class="form-control" id="InputName"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="mb-1">
                            <label class="form-label">Correo electrónico</label>
                            <input v-model="formData.email" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                        </div>
                        <div class="mb-1">
                            <label class="form-label">Contraseña</label>
                            <input v-model="formData.password" type="password" class="form-control"
                                id="exampleInputPassword1">
                        </div>
                        <div class="mb-1">
                            <label class="form-label">Ingrese contraseña actual para confirmar cambios</label>
                            <input v-model="formData.confirmPassword" type="password" class="form-control"
                                id="exampleInputPassword1">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="saveChanges">Guardar cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();
const userId = store.getters.id;

const formData = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
});

const saveChanges = async () => {
    // Validaciones del formulario
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Verifica si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Objeto con los datos del formulario
    const userData = {
        id: userId,
        name: formData.name,
        email: formData.email,
        password: formData.password
    };

    try {
        const response = await axios.post(`http://localhost:8080/users`, userData);
        console.log(response.data);
    } catch (error) {
        console.error('Error al enviar la solicitud POST:', error);
    }
};
</script>

