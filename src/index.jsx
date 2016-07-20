import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

const name = 'Hyunjeong';

ReactDOM.render(
  <Hello name={name} />,
  document.getElementById('app')
);