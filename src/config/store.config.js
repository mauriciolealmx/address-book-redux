import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, applyMiddleware } from 'redux';
import jwt_decode from 'jwt-decode';

import reducers from '../reducers';

let auth = {
  isAuthorized: false,
  token: null
};

// JWT/Load User:
const JWT = sessionStorage.getItem('token');
if (JWT) {
  const { exp, sub } = jwt_decode(JWT);
  // Not Expired Token.
  if (exp > Date.now()) {
    auth = {
      isAuthorized: true,
      token: JWT,
      user: { id: sub }
    };
  }
}

const store = createStore(
  reducers,
  { auth },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
