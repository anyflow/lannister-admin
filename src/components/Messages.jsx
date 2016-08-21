import React, {Component} from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

function mapStateToProps(state) {
  return { messages: state.WebsocketClient.messages };
}

class MessagesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = [], index = 0;

    for (let key in this.props.messages) {
      if (this.props.messages.hasOwnProperty(key)) {
        let message = this.props.messages[key];

        items.push(
          <Message key={index} topicName={key} message={message.message} date={message.date} />
        );
        ++index;
      }
    }

    return (
      <div className="row messages-container">
        <div className="col-xs-12">
          <h4>Messages</h4>
          {items}
        </div>
      </div>
    );
  }
}

const Messages = connect(
  mapStateToProps,
  actionCreators
)(MessagesComponent);

export default Messages;