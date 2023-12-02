import { createStore } from 'vuex';
import { jwtDecode } from "jwt-decode";
export default createStore({
  state: {
    isAuthenticated:false,
    usuario: null,
    token: null,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      console.log(isAuthenticated);
    },
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setToken(state, payload) {
      state.token = payload.token;
      // Decodificar el token y almacenar la información del usuario
      const decodedToken = jwtDecode(payload.token);
      state.usuario = decodedToken.sub;
      console.log('Usuario almacenado en el estado:', state.usuario);
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
      try {
        commit('setAuthentication', false);
        // Elimina el token de localStorage
        localStorage.removeItem('token');
        console.log("Cierre sesión exitoso");
      } catch (error) {
        console.error('Error al cerrar sesión: ', error);
        throw error;
      }
    },
    checkAuth({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        commit('setUsuario', decodedToken.sub); // Use decodedToken.sub
        commit('setAuthentication', true);
        commit('setToken', { token });
      }
    },
      
    // Otras acciones relacionadas con el usuario pueden agregarse aquí
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  usuario: (state) => state.usuario,
  token:(state)=>state.token,
  
}
});