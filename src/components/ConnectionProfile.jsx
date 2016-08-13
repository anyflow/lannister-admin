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
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/ConnectionProfile.css');

function mapStateToProps(state) {
  return state.WebsocketClient.connectionProfile;
}

class ConnectionProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.client = null;

    this.valueFormatter = this.valueFormatter.bind(this);
  }

  valueFormatter(cell, row) {
    switch (row.key) {
      case 'cleanSession':
        return (
          <Checkbox checked={cell}
                    onChange={(state) => this.props.setCleanSession(state.checked)} />
        );

      case 'willRetain':
        return (
          <Checkbox checked={cell}
                    onChange={(state) => this.props.setWillRetain(state.checked)} />
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
            <BootstrapTable data={this.props.basicProfile}
              condensed={true}
              hover={true}
              striped={true}>
              <TableHeaderColumn dataField="text" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
              <TableHeaderColumn dataField="value" dataFormat={this.valueFormatter}>Value</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div className="col-xs-6">
            <h4>Advanced profile</h4>
            <BootstrapTable data={this.props.advancedProfile}
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

const ConnectionProfile = connect(
  mapStateToProps,
  actionCreators
)(ConnectionProfileComponent);

export default ConnectionProfile;