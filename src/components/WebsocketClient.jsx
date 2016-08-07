import React, {Component} from 'react';
import {PageHeader, Panel, Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Checkbox from './Checkbox';
import FieldGroup from './FieldGroup';
import UserCredential from './UserCredential';
import ConnectButton from './ConnectButton';
import EditableLabel from './EditableLabel';
import Dropdown from './Dropdown';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/WebsocketClient.css');

let data1 = [
  {
    "key": "mqttBrokerAddress",
    "parameter": "MQTT Broker Address",
    "value": "mqtt://localhost:2883"
  },
  {
    "key": "clientId",
    "parameter": "Client ID",
    "value": "randomClientID"
  },
  {
    "key": "cleanSession",
    "parameter": "Clean Session",
    "value": true
  },
  {
    "key": "willQos",
    "parameter": "Will QoS",
    "value": 0
  },
  {
    "key": "willRetain",
    "parameter": "Will Retain",
    "value": true
  },
  {
    "key": "willTopic",
    "parameter": "Will Topic",
    "value": "will_topic_value"
  },
  {
    "key": "willMessage",
    "parameter": "Will Message",
    "value": "will_message_value"
  },
];

let data2 = [
  {
    "key": "userName",
    "parameter": "User Name",
    "value": "anyflow"
  },
  {
    "key": "password",
    "parameter": "Password",
    "value": "somePassword"
  },
  {
    "key": "mqttVersion",
    "parameter": "MQTT version",
    "value": "3.1.1"
  },
  {
    "key": "connectionTimeout",
    "parameter": "Connection Timeout",
    "value": 300
  },
  {
    "key": "keepAliveInterval",
    "parameter": "Keep Alive Interval",
    "value": 60
  },
];

function onCleanSessionChange(state) {
  console.log(state);
}

function onWillRetainChange(state) {
  console.log(state);
}

function valueFormatter(cell, row) {
  switch (row.key) {
    case 'cleanSession':
      return (
        <Checkbox checked={cell}
          onChange={onCleanSessionChange} />
      );

    case 'willRetain':
      return (
        <Checkbox checked={cell}
          onChange={onWillRetainChange} />
      );

    case 'mqttVersion':
      return <Dropdown id={row.key} data={["3.1.1", "3.1"]} scalaData selectedIndex={0} />;

    case 'willQos':
      return <Dropdown id={row.key} data={[0, 1, 2]} scalaData selectedIndex={2} />;

    default:
      return (
        <EditableLabel text={cell} />
      );
  }
}

function editable(cell, row) {
  return false;
};

class WebsocketClient extends Component {
  onConnect(event) {
    console.log(event.target + "clicked");
  }

  render() {
    return (
      <div>
        <Panel header="Connection Profile">
          <div className="row">
            <div className="col-xs-6">
              <h4>Basic profile</h4>
              <BootstrapTable data={data1}
                condensed={true}
                hover={true}
                striped={true}>
                <TableHeaderColumn dataField="parameter" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
                <TableHeaderColumn dataField="value" dataFormat={valueFormatter} editable={editable}>Value</TableHeaderColumn>
              </BootstrapTable>
            </div>
            <div className="col-xs-6">
              <h4>Advanced profile</h4>
              <BootstrapTable data={data2}
                condensed={true}
                hover={true}
                striped={true}>
                <TableHeaderColumn dataField="parameter" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
                <TableHeaderColumn dataField="value" dataFormat={valueFormatter} editable={editable}>Value</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
          <ConnectButton />

        </Panel>
      </div>
    );
  }
}

export default WebsocketClient;