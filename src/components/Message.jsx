import React, {Component, PropTypes} from 'react';

require('../styles/Message.css');

class Message extends Component {
  constructor(props) {
    super(props);

    this.format = this.format.bind(this);
  }

  format(date) {
    return date.toString().substr(0, 25)
      + date.toString().substr(34, 6);
  }
  render() {
    return (
      <div className="bs-message bs-message-default">
        <h4>{this.props.topicName}</h4>
        {this.props.message.toString() }
        <span className="pull-right">{this.format(this.props.date) }</span>
      </div>
    );
  }
}

export default Message;