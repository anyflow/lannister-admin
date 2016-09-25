import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

class Navigation extends Component {
  classNames(path) {
    return classNames(window.location.pathname == path ? 'active' : '');
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-target" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Lannister-Dashboard</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-target">
            <ul className="nav navbar-nav">
              <li className={this.classNames('/dashboard') }>
                <Link to="/dashboard"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
              </li>
              <li className={this.classNames('/websocket_client') }>
                <Link to="/websocket_client"><i className="fa fa-desktop fa-fw"/> WebSocket Client</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className={this.classNames('/about') }>
                <Link to="/about"><i className="fa fa-info fa-fw"/> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;