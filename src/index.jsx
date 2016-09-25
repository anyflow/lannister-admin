import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import reducers from './redux/reducers';
import initialState from './redux/initialState';
import { logger } from './redux/middlewares';
import Dashboard from './components/dashboard/main';
import Messages from './components/messages/main';
import Clients from './components/clients/main';
import Broker from './components/broker/main';
import Credential from './components/credential/main';
import WebsocketTester from './components/websocketTester/main';
import Apis from './components/apis/main';
import About from './components/About';
// import Navigation from './components/Navigation';
import Navbar from './components/Navbar';

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
      <div id="wrapper">
        <Navbar />
        <div id="page-wrapper">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
      // <div id="wrapper">
      //   <Navigation />
      //   {this.props.children}
      // </div>
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
      <Route path="/admin/" component={App}>
        <IndexRedirect to="websocket_tester" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="messages" component={Messages} />
        <Route path="clients" component={Clients} />
        <Route path="broker" component={Broker} />
        <Route path="credential" component={Credential} />
        <Route path="websocket_tester" component={WebsocketTester} />
        <Route path="apis" component={Apis} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);