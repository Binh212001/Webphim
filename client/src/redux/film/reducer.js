import * as Type from './constant';

const initialState = {
  film: [],
  selected: {
    chap: [],
  },
  status: '',
};

export default (state = initialState, { type, film }) => {
  switch (type) {
    case Type.FETCH_LIST_FILM_START:
      return { ...state, status: 'pending' };

    case Type.FETCH_LIST_FILM_SUCCESS:
      state.film = film;
      return { ...state, status: 'success' };
    case Type.FETCH_LIST_FILM_FAIL:
      return { ...state, status: 'fail' };

    case Type.FETCH_LIST_SELECTED_FILM_START:
      return { ...state, status: 'pending' };

    case Type.FETCH_LIST_SELECTED_FILM_SUCCESS:
      state.selected = film;
      return { ...state, status: 'success' };
    case Type.FETCH_LIST_SELECTED_FILM_FAIL:
      return { ...state, status: 'fail' };

    default:
      return state;
  }
};
