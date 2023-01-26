import * as Type from './constant';
import apiFilm from '../../api/apiFilm';

export const fetchListFilm = () => {
  return async (dispatch) => {
    dispatch({
      type: Type.FETCH_LIST_FILM_START,
    });
    try {
      const data = await apiFilm.getAll();
      dispatch({
        type: Type.FETCH_LIST_FILM_SUCCESS,
        film: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: Type.FETCH_LIST_FILM_FAIL,
      });
    }
  };
};

export const fetchSeletedFilm = (slug) => {
  console.log('🚀 ~ file: action.js ~ line 25 ~ fetchSeletedFilm ~ slug', slug);
  return async (dispatch) => {
    dispatch({
      type: Type.FETCH_LIST_SELECTED_FILM_START,
    });
    try {
      const data = await apiFilm.getBySlug(slug);
      dispatch({
        type: Type.FETCH_LIST_SELECTED_FILM_SUCCESS,
        film: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: Type.FETCH_LIST_SELECTED_FILM_FAIL,
      });
    }
  };
};
