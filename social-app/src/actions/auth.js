import { APIUrls } from '../helpers/urls';
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from './actionTypes';
import { getFormBody } from '../helpers/utils';

//Action Creator
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errormessage) {
  return {
    type: LOGIN_FAILED,
    error: errormessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

// asynchronous action for login
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin()); // to track the inProgress property
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          // dispatch an action to save the user
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

// asynchronous action for signup
export function signup(username, email, password) {
  return (dispatch) => {
    dispatch(startSignup()); // to track the inProgress property
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          // dispatch an action to save the user
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
