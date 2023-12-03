<template>
    <div class="col-9 mt-5 ms-5">
                <div class="container" style="height: 100%;">
                    <div class="d-flex flex-column justify-content-between p-2" style="height: 100%;">
                        <div class="d-flex flex-column m-5">
                            <div class="d-flex flex-row mb-5">
                                <p class="text-primary" style="font-weight: bold;">Nombre Usuario 1</p>
                                <p class="mx-5">Texto de prueba?</p>
                            </div>
                            <div class="d-flex flex-row mb-5">
                                <p class="text-primary" style="font-weight: bold;">Nombre Usuario</p>
                                <p class="mx-5">Texto de prueba?</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center my-5">
                            <textarea class="form-control border border-secondary" rows="1" id="comment" name="text">Aaa</textarea>
                            <button class="btn btn-primary ms-2 rounded-5"><i class="bi bi-send"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    </template>
    
    <script setup>
    import { RouterLink, useRouter as useVueRouter } from "vue-router";
import axios from "axios";
import { ref } from 'vue';
import { useStore } from 'vuex';
const router = useVueRouter(); // Obtén acceso al enrutador
const store = useStore(); // Obtén acceso a la store Vuex

    const connectWebSocket = () => {
      ws = new WebSocket('ws://localhost:8080/ws');
    
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log('Mensaje recibido:', message);
      };
    
      ws.onclose = () => {
        console.log('Conexión cerrada');
      };
    };
    
    let ws;
    let newMessage = '';
    let users = [
      { id: 'userId1', username: 'Nombre Usuario 1' },
      { id: 'userId2', username: 'Nombre Usuario 2' },
      // Agrega más usuarios según sea necesario
    ];
    let user1=store.getters.usuario; // Define la variable user1
    async function getUsers() {
      user1 = await axios.get('http://localhost:8080/users/{user1}');
    }
    
    connectWebSocket();

    async function getChatMessages(senderId, recipientId) {
  try {
    const response = await axios.get(`http://localhost:8080/chatroom/messages/${senderId}/${recipientId}`);
    const chatMessages = response.data;
    // Maneja los mensajes obtenidos, puedes almacenarlos en una variable de estado, por ejemplo.
  } catch (error) {
    console.error('Error al cargar mensajes de chat', error);
  }
}


    
    const sendMessage = async () => {
  const recipientId = stor; // Reemplaza con la lógica para obtener el destinatario
  const message = {
    content: newMessage,
    sender: 'Nombre de Usuario Actual',
    recipientId,
  };

  try {
    // Llama a tu endpoint de backend para enviar el mensaje
    await axios.post('http://localhost:8080/chatroom/messages', message);
  } catch (error) {
    console.error('Error al enviar el mensaje', error);
  }
};

    </script>
    
