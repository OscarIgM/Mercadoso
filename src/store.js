import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated:false,
    usuario: null,
    token: null,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, payload) {
      state.token = payload.token;
      // Decodificar el token y almacenar la información del usuario
      const decodedToken = jwt_decode(payload.token);
      state.usuario = decodedToken.sub; // 'sub' es comúnmente utilizado para el id del usuario en JWT
    }
  },
  actions: {
    async login({ commit }, token) {
      try {
        const response = await axios.post('http://localhost:8080/auth/login', userData.value);
        // Verificar el código de estado de la respuesta del servidor
        if (response.status === 200) {
          commit('setAuthentication', true);
          commit('setToken', { token: response.data.token });
          router.push({ name: 'HomepageLogged' });
        } else {
          throw new Error('Hubo un problema durante el inicio de sesión');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Puedes lanzar el error para manejarlo en el componente
        throw error;
      }
    },
  
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setToken', { token: null });
      // Elimina el token de localStorage
      localStorage.removeItem('token');
    },
    checkAuth({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        commit('setAuthentication', true);
        commit('setToken', { token });
      }
    },
    // Otras acciones relacionadas con el usuario pueden agregarse aquí
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    // Otros getters relacionados con el usuario pueden agregarse aquí
  },
});