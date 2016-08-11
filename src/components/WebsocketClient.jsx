import Immutable from 'immutable';
import mqtt from 'mqtt';
import React, {Component} from 'react';
import {PageHeader, Panel, Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Checkbox from './Checkbox';
import FieldGroup from './FieldGroup';
import UserCredential from './UserCredential';
import ConnectButton from './ConnectButton';
import EditableLabel from './EditableLabel';
import Dropdown from './Dropdown';
import { basicProfile, advancedProfile } from '../data/WebsocketClient';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/WebsocketClient.css');

class WebsocketClient extends Component {
  constructor(props) {
    super(props);

    this.client = null;

    this.state = {
      basicProfile: basicProfile,
      advancedProfile: advancedProfile,
      status: 'disconnected'
    };

    this.onCleanSessionChange = this.onCleanSessionChange.bind(this);
    this.onWillRetainChange = this.onWillRetainChange.bind(this);
    this.valueFormatter = this.valueFormatter.bind(this);
    this.onConnectionClick = this.onConnectionClick.bind(this);
  }

  onCleanSessionChange(state) {
    let newBasic = Immutable.List(this.state.basicProfile).setIn([2],
      {
        key: "cleanSession",
        text: "Clean Session",
        value: state.checked
      }
    );

    let newState = {
      basicProfile: newBasic.toArray(),
    };

    this.setState(newState, () => console.log(this.state));
  }

  onWillRetainChange(state) {
    let newBasic = Immutable.List(this.state.basicProfile).setIn([4],
      {
        key: "willRetain",
        text: "Will Retain",
        value: state.checked
      }
    );

    let newState = {
      basicProfile: newBasic.toArray(),
    };

    this.setState(newState, () => console.log(this.state));
  }

  valueFormatter(cell, row) {
    switch (row.key) {
      case 'cleanSession':
        return (
          <Checkbox checked={cell}
            onChange={this.onCleanSessionChange} />
        );

      case 'willRetain':
        return (
          <Checkbox checked={cell}
            onChange={this.onWillRetainChange} />
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

  onConnectionClick(status) {
    switch (status) {
      case 'disconnected':
        this.client = mqtt.connect(this.state.basicProfile[0].value);

        this.setState({ status: 'connecting' });

        this.client.on('connect', () => {
          this.setState({ status: 'connected' }, () => console.log(this.state.status));
        });
        return;

      case 'connected':
        this.client.end(false, () => {
          this.setState({ status: 'disconnected' }, () => console.log(this.state.status));
        });
        return;

      default: return;
    }
  }

  render() {
    return (
      <div>
        <Panel header="Connection Profile">
          <div className="row">
            <div className="col-xs-6">
              <h4>Basic profile</h4>
              <BootstrapTable data={this.state.basicProfile}
                condensed={true}
                hover={true}
                striped={true}>
                <TableHeaderColumn dataField="text" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
                <TableHeaderColumn dataField="value" dataFormat={this.valueFormatter}>Value</TableHeaderColumn>
              </BootstrapTable>
            </div>
            <div className="col-xs-6">
              <h4>Advanced profile</h4>
              <BootstrapTable data={this.state.advancedProfile}
                condensed={true}
                hover={true}
                striped={true}>
                <TableHeaderColumn dataField="text" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
                <TableHeaderColumn dataField="value" dataFormat={this.valueFormatter}>Value</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
          <ConnectButton onClick={this.onConnectionClick} status={this.state.status}/>

        </Panel>
      </div>
    );
  }
}

export default WebsocketClient;