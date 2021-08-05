import { APIUrls } from '../helpers/urls';
import { LOGIN_START } from './actionTypes';

//Action Creator
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

// asynchronous action
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
