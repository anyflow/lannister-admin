import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader>Dashboard Panel</PageHeader>
      </div>
    );
  }
}

export default Dashboard;