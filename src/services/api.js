import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://api.chucknorris.io/jokes'
});

export default api;