import React, {Component} from 'react';
import {Link} from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li>
              <Link to="/dashboard"><i className="fa fa-dashboard fa-fw" /> Dashboard</Link>
            </li>
            <li>
              <Link to="/websocket_client"><i className="fa fa-desktop fa-fw"/> WebSocket Client</Link>
            </li>
            <li>
              <Link to="/about"><i className="fa fa-info fa-fw"/> About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;