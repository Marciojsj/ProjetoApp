// npm install axios
// npm install -D @types/axios



import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com',
  timeout: 5000,
});

// pode adicionar interceptors aqui

export default api;