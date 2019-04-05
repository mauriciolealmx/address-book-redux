import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import Signin from './components/Auth/SigninForm';
import Signup from './components/Auth/SignupForm';
import Welcome from './components/Welcome';
import Signout from './components/Auth/Signout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  () => 'Reducers go here',
  {
    auth: { authenticated: sessionStorage.getItem('token') },
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/signout" component={Signout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
