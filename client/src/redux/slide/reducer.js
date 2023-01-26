import * as Type from './constant';

const initialState = {
  slide: [],
  status: '',
};

export default (state = initialState, { type, slide }) => {
  switch (type) {
    case Type.FETCH_LIST_SLIDE_START:
      return { ...state, status: 'pending' };

    case Type.FETCH_LIST_SLIDE_SUCCESS:
      state.slide = slide;
      return { ...state, status: 'success' };
    case Type.FETCH_LIST_SLIDE_FAIL:
      return { ...state, status: 'fail' };

    default:
      return state;
  }
};
