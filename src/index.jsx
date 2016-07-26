import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reducers from './bases/reducers';
import { logger } from './bases/middlewares';
import Helloing from './containers/Helloing';
import Dashboard from './components/Dashboard';
import WebsocketClient from './components/WebsocketClient';
import About from './components/About';

require('./index.css');

const initialState = {
  actionDefault: {
    name: 'World'
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
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/websocket_client" component={WebsocketClient} />
        <Route path="/hello" component={Helloing} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);