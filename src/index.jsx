import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import reducers from './bases/reducers';
import { logger } from './bases/middlewares';
import Hello from './components/Hello';
import Dashboard from './components/Dashboard';
import WebsocketClient from './components/WebsocketClient';
import About from './components/About';
import Navigation from './components/Navigation';
import initialState from './data/initialState';

const store = redux.createStore(reducers, initialState, redux.compose(
  redux.applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/hello" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="websocket_client" component={WebsocketClient} />
        <Route path="hello" component={Hello} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);