import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import reducer from './reducer';
import {
  createStore,
  applyMiddleware
} from 'redux';

const name = 'Hyunjeong';

const store = createStore(reducer);

ReactDOM.render(
  <Hello name={name} />,
  document.getElementById('app')
);