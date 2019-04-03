import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Signin from './components/Auth/SigninForm';
import Signup from './components/Auth/SignupForm';

const store = createStore(
  () => 'Reducers go here',
  {
    auth: { authenticated: sessionStorage.getItem('token') },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
