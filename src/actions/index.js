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

export const signout = callback => async dispatch => {
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

export const getCurrentUser = (callback) => async dispatch => {
  const JWT = sessionStorage.getItem('token');
  const options = { headers: { authorization: JWT } };
  try {
    console.log('Loading user...');
    const res = await authService.get('/current', options);
    console.log('Continuing without errors.');
    dispatch({
      type: 'UPDATE_USER',
      payload: { ...res.data, token: JWT }
    });
    callback()
  } catch (err) {
    console.log(err);
  }
};
