import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import reducers from './bases/reducers';
import { logger } from './bases/middlewares';
import Dashboard from './components/Dashboard';
import WebsocketClient from './components/WebsocketClient';
import About from './components/About';
import Navigation from './components/Navigation';
// import Navbar from './components/Navbar';
import initialState from './data/initialState';

import $ from 'jquery';

window.$ = $;
window.jQuery = $;
window.jquery = $;

require('bootstrap');
require('font-awesome/css/font-awesome.css');
require('./styles/index.css');

class App extends Component {
  render() {
    return (
      // <div id="wrapper">
      //   <Navbar />
      //   <div id="page-wrapper">
      //     <div className="container-fluid">
      //       {this.props.children}
      //     </div>
      //   </div>
      // </div>
      <div id="wrapper">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

const store = redux.createStore(reducers, initialState, redux.compose(
  redux.applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/websocket_client" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="websocket_client" component={WebsocketClient} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);