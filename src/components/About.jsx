import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader>About Panel</PageHeader>
      </div>
    );
  }
}

export default About;