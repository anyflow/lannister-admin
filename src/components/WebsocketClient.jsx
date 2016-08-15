import mqtt from 'mqtt';
import React, {Component} from 'react';
import ConnectionProfile from './ConnectionProfile';
import RadioGroup from './RadioGroup';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

require('../styles/WebsocketClient.css');

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

    this.qosDataTemplate = {
      qos0: "QoS 0",
      qos1: "1",
      qos2: "2"
    };
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
        <div className="row ">
          <div className="col-xs-12">
            <ConnectionProfile
              collapsed={this.props.connectionStatus == 'connected'}
              onConnectionClick={this.onConnectionClick}
              status={this.props.connectionStatus}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1 className="panel-title">Subscribe / Publish</h1>
              </div>

              <div className="panel-body container-fluid">
                <div className="row">
                  <div className="col-xs-12">
                    <h4>Subscribe</h4>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Input topic filter" />
                      <div className="input-group-btn">
                        <RadioGroup
                          className="btn-info"
                          selected="qos1"
                          dataTemplate={this.qosDataTemplate}/>
                        <button className="btn btn-primary" type="button">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <h4>Publish</h4>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Input topic name" />
                      <div className="input-group-btn">
                        <button className="btn btn-warning" data-toggle="button" aria-pressed="false">Retain</button>
                        <RadioGroup
                          className="btn-info"
                          selected="qos2"
                          dataTemplate={this.qosDataTemplate}/>
                        <button className="btn btn-primary" type="button">Publish</button>
                      </div>
                    </div>
                    <textarea
                      className="form-control" rows="7"
                      placeholder="Input message" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1 className="panel-title">Subscriptions</h1>
              </div>
              <div className="panel-body">
              </div>
            </div>
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