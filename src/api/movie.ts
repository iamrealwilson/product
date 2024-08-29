import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://e-tmdb-api.onrender.com/api/v3'
});

export default instance;
