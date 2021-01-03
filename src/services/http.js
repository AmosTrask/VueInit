import axios from 'axios';

const options = {};
options.baseURL = 'http://localhost:5000';

const instance = axios.create(options);

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  console.log(localStorage.getItem('token'));
  return config;
});

export default instance;
