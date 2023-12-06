import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://express-tmdb-api.onrender.com/api/v3'
});

export default instance;
