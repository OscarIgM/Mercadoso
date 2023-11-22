import { createStore } from "vuex";
import axios from "axios";

const USER_KEY = "usuario";

export default createStore({
  state: {
    usuario: null,
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
      localStorage.setItem(USER_KEY, JSON.stringify(usuario));
    },
    cargarUsuarioDesdeLocalStorage(state) {
      const usuario = localStorage.getItem(USER_KEY);
      if (usuario) {
        state.usuario = JSON.parse(usuario);
      }
    },
  },
  actions: {
    
  },
  getters: {},
});