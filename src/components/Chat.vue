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
async function getUsers() {
  user1=await axios.get('')
  
}


connectWebSocket();

const sendMessage = async () => {
  const recipientId = 'userId1'; // Reemplaza con la lógica para obtener el destinatario
  const message = {
    content: newMessage,
    sender: 'Nombre de Usuario Actual',
    recipientId,
  };

</script>