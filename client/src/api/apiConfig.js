import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'Application/json',
  },
});

apiConfig.interceptors.response.use((res) => {
  return res.data;
});

apiConfig.interceptors.request.use((config) => {
  return config;
});

export default apiConfig;
