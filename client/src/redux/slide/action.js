import * as Type from './constant';
import apiSlide from '../../api/apiSlide';

export const fetchListSlide = () => {
  return async (dispatch) => {
    dispatch({
      type: Type.FETCH_LIST_SLIDE_START,
    });
    try {
      const data = await apiSlide.getAll();
      dispatch({
        type: Type.FETCH_LIST_SLIDE_SUCCESS,
        slide: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: Type.FETCH_LIST_SLIDE_FAIL,
      });
    }
  };
};
