import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import Navigation from './Navigation';

class WebsocketClient extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader>WebSocket-Client Panel</PageHeader>
      </div>
    );
  }
}

export default WebsocketClient;