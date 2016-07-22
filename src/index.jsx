import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import Helloing from './components/Helloing';

const name = 'Hyunjeong';
const initialState = {
  actionDefault: {
    name: name
  }
};

const store = redux.createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Helloing />
  </Provider>,
  document.getElementById('app')
);