import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Create Store, initialState, and reduxThunk.
import store from './config/store.config';
import App from './components/App';
import Login from './components/Auth/LoginForm';
import Signout from './components/Auth/Signout';
import Signup from './components/Auth/SignupForm';
import Welcome from './components/Welcome';
import {
  LOGIN,
  ROOT,
  SIGNOUT,
  SIGNUP,
  WELCOME
} from './components/Auth/paths.config';

// Ment for development.
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path={ROOT} component={Login} />
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={SIGNOUT} component={Signout} />
        <Route exact path={SIGNUP} component={Signup} />
        <Route exact path={WELCOME} component={Welcome} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
