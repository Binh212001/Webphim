import authApi from '../../api/auth';
import * as Type from './constant';

export const handleLogin = (data) => {
  return async (dispatch) => {
    dispatch(loginPending());
    return authApi
      .login(data)
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFail());
      });
  };
};

export const loginPending = () => {
  return {
    type: Type.LOGIN_PENDING,
  };
};
export const loginSuccess = (data) => {
  return {
    type: Type.LOGIN_SUCCESS,
    user: data,
  };
};

export const loginFail = () => {
  return {
    type: Type.LOGIN_FAIL,
  };
};

export const handleRegister = (data) => {
  return async (dispatch) => {
    return authApi
      .register(data)
      .then((res) => {
        dispatch(registerSuccess(res));
      })
      .catch((error) => dispatch(registerFail()));
  };
};

export const registerSuccess = (data) => {
  return {
    type: Type.REGISTER_SUCCESS,
    user: data,
  };
};

export const registerFail = () => {
  return {
    type: Type.REGISTER_FAIL,
  };
};

export const handleLogoutAction = () => {
  return {
    type: Type.LOGOUT,
  };
};
