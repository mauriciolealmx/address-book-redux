import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

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
        <Route exact path="/" component={() => 'Home route'} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
