import React, {Component, PropTypes} from 'react';

require('../styles/Subscription.css');

class Subscription extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="bs-callout bs-callout-default">
        <h4>test subscription</h4>
      </div>
    );
  }
}

export default Subscription;