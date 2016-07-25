import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reducers from './bases/reducers';
import { logger } from './bases/middlewares';
import Helloing from './containers/Helloing';

require('./index.css');

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

class App extends Component {
  render() {
    return this.props.children;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Helloing} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);