import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import Navigation from './Navigation';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader>Dashboard Panel</PageHeader>
      </div>
    );
  }
}

export default Dashboard;