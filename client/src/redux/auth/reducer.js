import * as Type from './constant';

const initialState = {
  user: null || JSON.parse(localStorage.getItem('user')),
  message: '',
  islogin: false,
};

const Auth = (state = initialState, { user, type }) => {
  switch (type) {
    case Type.LOGIN_PENDING:
      return { ...state, message: 'pendding' };

    case Type.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(user));
      return { ...state, message: 'Success', user, islogin: true };

    case Type.LOGIN_FAIL:
      state.message = 'Username or password are not valid';
      return { ...state };

    case Type.REGISTER_SUCCESS:
      state.user = user;
      state.message = 'Register Success';
      return { ...state };

    case Type.REGISTER_FAIL:
      state.message = 'username is exititng';
      return { ...state };
    case Type.LOGOUT:
      state.user = null;
      localStorage.removeItem('user');
      state.message = 'Logout Success';
      return { ...state };

    default:
      return state;
  }
};

export default Auth;
