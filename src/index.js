import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import Login from './components/Auth/LoginForm';
import Signout from './components/Auth/Signout';
import Signup from './components/Auth/SignupForm';
import Welcome from './components/Welcome';
import reducers from './reducers';
import { LOGIN, ROOT, SIGNOUT, SIGNUP, WELCOME } from './components/Auth/paths.config';

import axios from 'axios';
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  { auth: {} },
  composeEnhancers(applyMiddleware(reduxThunk))
);

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
