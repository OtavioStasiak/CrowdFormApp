import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://web-production-5f60.up.railway.app/',
});
