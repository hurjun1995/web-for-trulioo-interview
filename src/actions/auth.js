import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../types";
import api from "../api";

export const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});

export const userLoginFailure = error => ({
  type: USER_LOGIN_FAILURE,
  error
});

export const login = credentials => dispatch =>
  api.user
    .login(credentials)
    .then(res => {
      if (res.exists) {
        dispatch(userLoginSuccess(res.user));
      }
    })
    .catch(res => {
      if (!res.exists) {
        dispatch(userLoginFailure(res.error));
      }
    });
