import { combineReducers } from 'redux';
import film from './film/reducer';
import slide from './slide/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  slide: slide,
  film: film,
  auth: auth,
});

export default rootReducer;
