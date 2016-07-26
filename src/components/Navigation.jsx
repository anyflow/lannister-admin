import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
  <Navbar staticTop inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#/dashboard">Lannister-Dashboard</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/dashboard">Dashboard</NavItem>
        <NavItem eventKey={2} href="#/websocket_client">WebSocket Client</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#/about">About</NavItem>
        <NavItem eventKey={2} href="#/hello">Hello</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Navigation;