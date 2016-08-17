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
    let items = [];

    console.log(this.props.messages);

    for (let i = 0; i < this.props.messages.length; ++i) {
      let val = this.props.messages[i];

      items.push(
        <Message key={i} topicFilter={val.topicFilter} message={val.message} date={val.date} />
      );
    }

    return (
      <div>
        <h4>Messages</h4>
        {items}
      </div>
    );
  }
}

const Messages = connect(
  mapStateToProps,
  actionCreators
)(MessagesComponent);

export default Messages;