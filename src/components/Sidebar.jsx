import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li>
              <a href="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
            </li>
            <li>
              <a href="/websocket_client"><i className="fa fa-desktop fa-fw"></i> WebSocket Client</a>
            </li>
            <li>
              <a href="/hello">Hello</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>                                    
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;