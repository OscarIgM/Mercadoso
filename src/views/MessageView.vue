<template>

<<<<<<< HEAD
<NavBarLogeado></NavBarLogeado>
<div class="container">
  <div class="d-flex" style="height: 100vh;">
  <div class="col-3 mt-5 border-end border-secondary">
    <div class="container">
      <h4 class="mb-5" style="font-weight: bold;">Historial Mensajes</h4>
      <div class="border-bottom border-secondary mt-3 ps-3">
        <p style="font-weight: bold;"><i class="bi bi-chat" style="color: rgb(0, 110, 255);"></i> Chat con:</p>
      </div>
    </div>
  </div>
  <Chat v-for="chat in chats" :key="chat.id" :chatInfo="chat"></Chat>
</div>
</div>

</template>

<script setup>
import NavBarLogeado from '../components/NavBarLogeado.vue';
import Chat from '../components/Chat.vue';
import axios from 'axios';
import { ref } from 'vue';
const chats=ref([]);
async function getUserChatRooms(userId){
  try {
    const response = await axios.get(`http://localhost:8080/chatrooms/${userId}`);
chats.value=response.data;
console.log(chats.value);
  } catch (error) {
    console.error('Error al cargar chats', error);

  }


}

</script>
=======
    <NavBarLogeado></NavBarLogeado>
    <div class="container">
      <div class="d-flex" style="height: 100vh;">
      <div class="col-3 mt-5 border-end border-secondary">
        <div class="container">
          <h4 class="mb-5" style="font-weight: bold;">Historial Mensajes</h4>
          <div class="border-bottom border-secondary mt-3 ps-3">
            <p style="font-weight: bold;"><i class="bi bi-chat" style="color: rgb(0, 110, 255);"></i> Chat con:</p>
          </div>
        </div>
      </div>
      <Chat v-for="chat in chats" :key="chat.id" :chatInfo="chat"></Chat>
    </div>
    </div>
    
    </template>
    
    <script setup>
    import NavBarLogeado from '../components/NavBarLogeado.vue';
    import Chat from '../components/Chat.vue';
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';
    const store=useStore();
    const chats = ref([]);
    const user=store.getters.username;
    async function getUserChatRooms(user) {
  try {
    const response = await axios.get(`http://localhost:8080/chatroom/`);
    chats.value = response.data;
    console.log(chats.value);
  } catch (error) {
    console.error('Error al cargar chats', error);
  }
}

    onMounted(() => {
      getUserChatRooms(user);
    });
    </script>
    
>>>>>>> c.2belen
