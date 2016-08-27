import React, {Component} from 'react';
import MessageSent from './MessageSent';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.client = null;
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="container-fluid">
        <MessageSent />
      </div>
    );
  }
}

export default Messages;