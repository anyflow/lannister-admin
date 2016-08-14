import mqtt from 'mqtt';
import React, {Component} from 'react';
import ConnectionProfile from './ConnectionProfile';
import ConnectButton from './ConnectButton';
import Panel from './Panel';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

function mapStateToProps(state) {
  return {
    connectionStatus: state.WebsocketClient.connectionStatus
  };
}

class WebsocketClientPage extends Component {
  constructor(props) {
    super(props);

    this.client = null;
    this.onConnectionClick = this.onConnectionClick.bind(this);
  }

  onConnectionClick(status) {
    switch (status) {
      case 'disconnected':
        this.client = mqtt.connect('ws://anyflow.iptime.org:2883/mqtt');

        this.props.setConnectionStatus('connecting');

        this.client.on('connect', () => {
          this.props.setConnectionStatus('connected');
        });
        return;

      case 'connected':
        this.client.end(false, () => {
          this.props.setConnectionStatus('disconnected');
        });
        return;

      default: return;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <ConnectionProfile collapsed={this.props.connectionStatus == 'connected'}
                           onConnectionClick={this.onConnectionClick}
                           status={this.props.connectionStatus}/>
      </div>
    );
  }
}

const WebsocketClient = connect(
  mapStateToProps,
  actionCreators
)(WebsocketClientPage);

export default WebsocketClient;