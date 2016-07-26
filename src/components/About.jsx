import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import Navigation from './Navigation';

class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader>About Panel</PageHeader>
      </div>
    );
  }
}

export default About;