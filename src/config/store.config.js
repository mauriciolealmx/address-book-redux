import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

const initialState = { auth: {} };

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
