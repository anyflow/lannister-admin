import mqtt from 'mqtt';
import React, {Component} from 'react';
import ConnectionProfile from './ConnectionProfile';
import Subscribe from './Subscribe';
import Subscriptions from './Subscriptions';
import Publish from './Publish';
import Messages from './Messages';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

require('../styles/WebsocketClient.css');

function mapStateToProps(state) {
  return state.WebsocketClient;
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
        this.client = mqtt.connect(this.props.connectionProfile.mqttBrokerAddress);

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
        <div className="row">
          <div className="col-xs-12">
            <ConnectionProfile
              collapsed={this.props.connectionStatus == 'connected'}
              onConnectionClick={this.onConnectionClick}
              status={this.props.connectionStatus}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Subscribe />
            <Subscriptions />
          </div>

          <div className="col-md-3">
            <Publish />
          </div>

          <div className="col-md-5">
            <Messages />
          </div>
        </div>
      </div>
    );
  }
}

const WebsocketClient = connect(
  mapStateToProps,
  actionCreators
)(WebsocketClientPage);

export default WebsocketClient;