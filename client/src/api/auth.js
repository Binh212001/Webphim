import apiConfig from './apiConfig';

const authApi = {
  login: (data) => {
    return apiConfig.post('/auth/login', data);
  },
  register: (data) => {
    return apiConfig.post('/auth/register', data);
  },
};

export default authApi;
