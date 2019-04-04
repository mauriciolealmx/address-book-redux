import authService from '../apis/auth.api';

export const signin = (formProps, callback) => async dispatch => {
  console.log('signin action happening');
  // sessionStorage.setItem('token', res.data.token);
};

export const signout = (formProps, callback) => async dispatch => {
  console.log('signout actions happening');
  // sessionStorage.removeItem('token');
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
