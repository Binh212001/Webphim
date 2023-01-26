import apiConfig from './apiConfig';

const apiFilm = {
  addFilm: (data) => {
    return apiConfig.post('/film/upfilm', data);
  },

  getAll: () => {
    return apiConfig.get('/film/all');
  },
  getBySlug: (slug) => {
    return apiConfig.get(`/film/${slug}`);
  },
  update: (data) => {
    return apiConfig.put(`/film/update/${data._id}`);
  },
};
export default apiFilm;
