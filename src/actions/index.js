import authService from '../apis/auth.api';

export const signin = (formProps, callback) => async dispatch => {
  const res = await authService.post('/signin', formProps);
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data
  });
  sessionStorage.setItem('token', res.data.token);
  callback();
};

export const signout = (callback) => async dispatch => {
  dispatch({
    type: 'UPDATE_USER',
    payload: ''
  });
  sessionStorage.removeItem('token');
  callback();
};

export const signup = (formProps, callback) => async dispatch => {
  const res = await authService.post('/signup', formProps);
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data
  });
  sessionStorage.setItem('token', res.data.token);
  callback();
};
