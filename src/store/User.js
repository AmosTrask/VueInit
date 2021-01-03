import UserService from '../services/UserServices';

const UserModule = {
  namespaced: true,

  state: {
    user: null,
    loggedIn: false,
    token: '',
  },

  // Mutations are functions that effect the STATE.
  mutations: {
    LOGIN_SUCCESS(state, token) {
      state.loggedIn = true;
      state.token = token;
    },
  },

  actions: {
    async login({ commit }, loginPayload) {
      const response = await UserService.login(loginPayload);
      if (response.status === 200) {
        commit('LOGIN_SUCCESS', response.data.token);
      } else {
        console.log('login failed');
      }
    },
  },

  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
  },
};

export default UserModule;
