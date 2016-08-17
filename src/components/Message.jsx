import React, {Component, PropTypes} from 'react';

require('../styles/Message.css');

class Message extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="bs-message bs-message-default">
        <h4>{this.props.topicFilter}</h4>
        {this.props.message}
        <span className="pull-right">{this.props.date}</span>
      </div>
    );
  }
}

export default Message;