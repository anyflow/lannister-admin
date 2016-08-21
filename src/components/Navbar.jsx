import React, {Component} from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

require('../third-parties/sb-admin-2.css');

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
          <a className="navbar-brand" href="index.html">Lannister Dashboard</a>
        </div>

        <Topbar />

        <Sidebar />
      </nav>
    );
  }
}

export default Navbar;