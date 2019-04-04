import authService from '../apis/auth.api';

export const signin = (formProps, callback) => async dispatch => {
  console.log('signin action happening');
  // callback();
};

export const signout = (formProps, callback) => async dispatch => {
  console.log('signout actions happening');
};

export const signup = (formProps, callback) => async dispatch => {
  const res = await authService.post('/signup', formProps);
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data
  });
  callback();
};
