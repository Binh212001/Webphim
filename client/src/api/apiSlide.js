import apiConfig from './apiConfig';

const apiSlide = {
  addSlide: (data) => {
    return apiConfig.post('/slide', data);
  },

  getAll: () => {
    return apiConfig.get('/slide');
  },
};
export default apiSlide;
