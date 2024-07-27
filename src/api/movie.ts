import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ee-ws-api.onrender.com/api/v3'
});

export default instance;
