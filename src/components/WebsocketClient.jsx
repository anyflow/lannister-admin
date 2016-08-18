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
    this.onConnection = this.onConnection.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);

    this.protocols = {
      '3.1.1': { id: 'MQTT', version: 4 },
      '3.1': { id: 'MQIsdp', version: 3 }
    }
  }

  makeConnectOptions() {
    return {
      cmd: 'connect',
      protocolId: this.protocols[this.props.connectionProfile.mqttVersion].id,
      protocolVersion: this.protocols[this.props.connectionProfile.mqttVersion].version,
      clean: this.props.connectionProfile.cleanSession,
      clientId: this.props.connectionProfile.clientId,
      keepalive: this.props.connectionProfile.keepAliveInterval,
      username: this.props.connectionProfile.userName,
      password: new Buffer(this.props.connectionProfile.password),
      will: {
        topic: this.props.connectionProfile.willTopic,
        payload: new Buffer(this.props.connectionProfile.willMessage),
        qos: this.props.connectionProfile.willQos,
        retain: this.props.connectionProfile.willRetain
      }
    };
  }

  onConnection(status) {
    switch (status) {
      case 'disconnected':
        this.client = mqtt.connect(this.props.connectionProfile.mqttBrokerAddress, this.makeConnectOptions());

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

  onSubscribe(param) {

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ConnectionProfile
              collapsed={this.props.connectionStatus == 'connected'}
              onConnectionClick={this.onConnection}
              status={this.props.connectionStatus}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Subscribe onSubscribe={(param) => this.onSubscribe(param)} />
            <Subscriptions />
          </div>

          <div className="col-md-3">
            <Publish onPublish={(param) => console.log(param)} />
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