import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import reducers from './reducers';
import {
  createStore,
  applyMiddleware
} from 'redux';

const name = 'Hyunjeong';

const store = createStore(reducers);

ReactDOM.render(
  <Hello name={name} />,
  document.getElementById('app')
);