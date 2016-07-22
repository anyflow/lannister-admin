import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reducers from './reducers';
import * as redux from 'redux';
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