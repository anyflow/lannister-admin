import React, {Component} from 'react';
import {PageHeader, Panel, Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Checkbox from './Checkbox';
import FieldGroup from './FieldGroup';
import UserCredential from './UserCredential';
import ConnectButton from './ConnectButton';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/WebsocketClient.css');

let data = [
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
    "key": "connectionTimeout",
    "parameter": "Connection Timeout",
    "value": 300
  },
  {
    "key": "keepAliveInterval",
    "parameter": "Keep Alive Interval",
    "value": 60
  },
  {
    "key": "cleanSession",
    "parameter": "Clean Session",
    "value": true
  }
];

function cleanSessionChanged(state) {
  console.log(state);
}

function valueFormatter(cell, row) {
  if (row.key == 'cleanSession') {
    return (
      <Checkbox checked={cell}
                onChange={cleanSessionChanged} />
    );
  }
  else {
    return cell;
  }
}

var cellEditProp = {
  mode: "dbclick",
  blurToSave: true,
  beforeSaveCell: (row, cellName, cellValue) => {
    console.log('before save cell ::' + row.key + '-'  + cellValue);
    return true;
  },
  afterSaveCell: (row, cellName, cellValue) => {
    console.log('after save cell ::' + row.key + '-'  + cellValue);
    return true;
  }
};


function editable(cell, row) {
  // if (row.key == 'cleanSession') {
  //   return { type: 'checkbox', options: { values: 'true:false' } };
  // }
  // else {
    return true;
  // }
};

class WebsocketClient extends Component {
  onConnect(event) {
    console.log(event.target + "clicked");
  }

  render() {
    return (
      <div>
        <Panel header="Connection Profile">
          <BootstrapTable data={data} 
                          condensed={true} 
                          hover={true} 
                          striped={true} 
                          cellEdit={cellEditProp}>
            <TableHeaderColumn dataField="parameter" isKey={true} dataSort={true}>Parameter</TableHeaderColumn>
            <TableHeaderColumn dataField="value" dataFormat={valueFormatter} editable={editable}>Value</TableHeaderColumn>
          </BootstrapTable>
          <ConnectButton />
        </Panel>
      </div>
    );
  }
}

export default WebsocketClient;