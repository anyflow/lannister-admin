import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {
  classNames(path) {
    return classNames(window.location.pathname == path ? 'active' : '');
  }

  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li className={this.classNames('/dashboard')}>
              <Link to="/dashboard"><i className="fa fa-dashboard fa-fw"/> Dashboard</Link>
            </li>
            <li className={this.classNames('/messages')}>
              <Link to="/messages"><i className="fa fa-comments fa-fw"/> Messages</Link>
            </li>
            <li className={this.classNames('/clients')}>
              <Link to="/clients"><i className="fa fa-desktop fa-fw"/> Clients</Link>
            </li>
            <li className={this.classNames('/broker')}>
              <Link to="/broker"><i className="fa fa-server fa-fw"/> Broker</Link>
            </li>
            <li className={this.classNames('/credential')}>
              <Link to="/credential"><i className="fa fa-users fa-fw"/> Credential</Link>
            </li>
            <li className={this.classNames('/websocket_tester')}>
              <Link to="/websocket_tester"><i className="glyphicon glyphicon-transfer"/> WebSocket Tester</Link>
            </li>
            <li className={this.classNames('/about')}>
              <Link to="/about"><i className="fa fa-info fa-fw"/> About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;