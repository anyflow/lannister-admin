import mqtt from 'mqtt';
import mqtt_regex from 'mqtt-regex';
import React, {Component} from 'react';
import ConnectionProfile from './ConnectionProfile';
import Subscribe from './Subscribe';
import Subscriptions from './Subscriptions';
import Publish from './Publish';
import Messages from './Messages';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

require('../../styles/WebsocketTester.css');

function mapStateToProps(state) {
  return state.WebsocketClient;
}

class WebsocketTesterPage extends Component {
  constructor(props) {
    super(props);

    this.client = null;
    this.onConnection = this.onConnection.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);
    this.onPublish = this.onPublish.bind(this);
    this.onUnsubscribe = this.onUnsubscribe.bind(this);

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
        console.log(this.client);
        this.props.setConnectionStatus('connecting');

        this.client.on('connect', () => {
          this.props.setConnectionStatus('connected');
        });
        this.client.on('message', (topic, message) => {
          this.props.addMessage(topic, message);

          for (let key in this.props.subscriptions) {
            if (mqtt_regex(key).exec(topic)) {
              this.props.updateMessageCount(key, ++this.props.subscriptions[key].count);
            }
          }
        });
        this.client.on('error', (err) => {
          console.log(err);
          this.client.end(false, () => this.props.setConnectionStatus('disconnected'));
        });
        this.client.on('close', () => this.props.setConnectionStatus('disconnected'));
        return;

      case 'connected':
        this.client.end(false, () => this.props.setConnectionStatus('disconnected'));
        return;

      default: return;
    }
  }

  onSubscribe(param) {
    this.client.subscribe(param.topicFilter, { qos: param.qos }, (err, granted) => {
      if (err != null) {
        console.log('error occured:', err.toString());
        return;
      }

      this.props.addSubscription(granted[0].topic, granted[0].qos);
    });
  }

  onPublish(param) {
    this.client.publish(param.topicName, param.message, { qos: param.qos, retain: param.retain }, () => {
      console.log('publish finished');
    });
  }

  onUnsubscribe(topicFilter) {
    this.client.unsubscribe(topicFilter, () => {
      this.props.removeSubscription(topicFilter);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ConnectionProfile
              onConnectionClick={this.onConnection}
              connectionStatus={this.props.connectionStatus}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Publish
              onPublish={(param) => this.onPublish(param) }
              disabled={this.props.connectionStatus != 'connected'} />
            <Subscribe
              onSubscribe={(param) => this.onSubscribe(param) }
              disabled={this.props.connectionStatus != 'connected'}/>
            <Subscriptions
              disabled={this.props.connectionStatus != 'connected'}
              onUnsubscribe={(topicFilter) => this.onUnsubscribe(topicFilter) } />
          </div>
          <div className="col-md-6">
            <Messages disabled={this.props.connectionStatus != 'connected'}/>
          </div>
        </div>
      </div>
    );
  }
}

const WebsocketTester = connect(
  mapStateToProps,
  actionCreators
)(WebsocketTesterPage);

export default WebsocketTester;