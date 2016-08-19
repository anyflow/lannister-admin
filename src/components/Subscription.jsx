import React, {Component, PropTypes} from 'react';

require('../styles/Subscription.css');

class Subscription extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="bs-subscription bs-subscription-default">
        <span className="badge">{this.props.count}</span>
        {this.props.topicFilter}
        <button
          className="btn btn-danger pull-right btn-xs"
          type="button"
          disabled={this.props.disabled}>unsubscribe</button>
        <span
          className="label label-info pull-right"
          disabled={this.props.disabled}>QoS {this.props.qos}</span>
      </div >
    );
  }
}

export default Subscription;