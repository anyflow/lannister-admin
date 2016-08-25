import React, {Component} from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import {Link} from 'react-router';

require('../third-parties/sb-admin-2.css');
require('../styles/Navbar.css');

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/websocket_client" className="navbar-brand">Lannister Dashboard</Link>
        </div>

        <Topbar />

        <Sidebar />
      </nav>
    );
  }
}

export default Navbar;