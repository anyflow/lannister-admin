import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import Helloing from './components/Helloing';
import { logger } from './middlewares';

const name = 'Hyunjeong';
const initialState = {
  actionDefault: {
    name: name
  }
};

const store = redux.createStore(reducers, initialState, redux.compose(
  redux.applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Helloing />
  </Provider>,
  document.getElementById('app')
);