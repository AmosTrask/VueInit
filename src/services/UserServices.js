import http from './http';

const UserService = {
  async login(payload) {
    const response = await http.post('login', payload);
    if (response.status === 200) localStorage.setItem('token', response.data.token);
    return response;
  },

  async getUsers() {
    const response = await http.get('user');
    return response;
  },

};

export default UserService;
