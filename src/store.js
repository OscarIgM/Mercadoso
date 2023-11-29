import { createStore } from 'vuex';
import jwt_decode from 'jsonwebtoken';

export default createStore({
  state: {
    usuario: null,
    token: null,
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, payload) {
      state.token = payload.token;
      // Decodificar el token y almacenar la información del usuario
      const decodedToken = jwt_decode(payload.token);
      state.usuario = decodedToken.sub; // 'sub' es comúnmente utilizado para el id del usuario en JWT
    },
    clearAuthData(state) {
      state.usuario = null;
      state.token = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});