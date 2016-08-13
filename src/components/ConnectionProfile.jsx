import Immutable from 'immutable';
import mqtt from 'mqtt';
import React, {Component} from 'react';
import {PageHeader, Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Panel from './Panel';
import Checkbox from './Checkbox';
import FieldGroup from './FieldGroup';
import UserCredential from './UserCredential';
import ConnectButton from './ConnectButton';
import EditableLabel from './EditableLabel';
import Dropdown from './Dropdown';
import { basicProfile, advancedProfile } from '../data/ConnectionProfile';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/ConnectionProfile.css');

class ConnectionProfile extends Component {
  constructor(props) {
    super(props);

    this.client = null;

    this.state = {
      basicProfile: basicProfile,
      advancedProfile: advancedProfile
    };

    this.onCleanSessionChange = this.onCleanSessionChange.bind(this);
    this.onWillRetainChange = this.onWillRetainChange.bind(this);
    this.valueFormatter = this.valueFormatter.bind(this);
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

  render() {
    return (
      <Panel title="Connection Profile"
        subtitle="values can be changed with double clicking"
        collapsed={this.props.collapsed}>
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
      </Panel>
    );
  }
}

export default ConnectionProfile;