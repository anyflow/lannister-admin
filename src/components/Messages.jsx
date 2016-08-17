import React, {Component} from 'react';
import Message from './Message';

class Messages extends Component {
  render() {
    return (
      <div>
        <h4>Messages</h4>
        <Message topicFilter="home/fountain" message="some greate message" date="06:03:27" />
        <Message topicFilter="home/fountain" message="some greate message" date="06:03:27" />
        <Message topicFilter="home/fountain" message="a" date="06:03:27" />
      </div>
    );
  }
}

export default Messages;