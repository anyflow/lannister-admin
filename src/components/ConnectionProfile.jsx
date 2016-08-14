import Immutable from 'immutable';
import mqtt from 'mqtt';
import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Panel from './Panel';
import Checkbox from './Checkbox';
import ConnectButton from './ConnectButton';
import EditableLabel from './EditableLabel';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';
import { basicProfileTemplate, advancedProfileTemplate } from '../data/ConnectionProfile';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../styles/ConnectionProfile.css');

function mapStateToProps(state) {
  return state.WebsocketClient.connectionProfile;
}

class ConnectionProfileComponent extends Component {
  constructor(props) {
    super(props);

    this._valueFormatter = this._valueFormatter.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentWillMount() {
    this.basicProfile = this._initialize('basicProfile', basicProfileTemplate);
    this.advancedProfile = this._initialize('advancedProfile', advancedProfileTemplate);
  }

  _initialize(profileName, profileTemplate) {
    let ret = Immutable.List(profileTemplate);

    for (let i = 0; i < profileTemplate.length; ++i) {
      let item = ret.get(i);

      item.value = this.props[profileName][profileTemplate[i].key];
      ret = ret.set(i, item);
    }

    return ret.toJS();
  }

  _valueFormatter(cell, row) {
    switch (row.key) {
      case 'cleanSession':
        return (
          <Checkbox checked={cell}
            onChange={(state) => this.props.setBasicProfile(row.key, state.checked) } />
        );

      case 'willRetain':
        return (
          <Checkbox checked={cell}
            onChange={(state) => this.props.setBasicProfile(row.key, state.checked) } />
        );

      case 'mqttVersion':
        return <Dropdown id={row.key} data={["3.1.1", "3.1"]} scalaData selectedIndex={0} />;

      case 'willQos':
        return <Dropdown id={row.key} data={[0, 1, 2]} scalaData selectedIndex={2} />;

      case 'userName':
      case 'password':
      case 'connectionTimeout':
      case 'keepAliveInterval':
        return (
          <EditableLabel id={row.key} text={cell} onBlur={(value) => this.props.setAdvancedProfile(row.key, value) } />
        );

      default:
        return (
          <EditableLabel id={row.key} text={cell} onBlur={(value) => this.props.setBasicProfile(row.key, value) } />
        );
    }
  }

  render() {
    return (
      <Panel title="Connection Profile"
        subtitle="values can be changed with double clicking"
        collapsed={this.props.collapsed}
        onConnectionClick={(status) => this.props.onConnectionClick(status) }
        status={this.props.status}>
        <div className="row">
          <div className="col-xs-6">
            <h4>Basic profile</h4>
            <BootstrapTable
              data={this.basicProfile}
              condensed={true}
              hover={true}
              striped={true}>
              <TableHeaderColumn dataField="text" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
              <TableHeaderColumn dataField="value" dataFormat={this._valueFormatter}>Value</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div className="col-xs-6">
            <h4>Advanced profile</h4>
            <BootstrapTable
              data={this.advancedProfile}
              condensed={true}
              hover={true}
              striped={true}>
              <TableHeaderColumn dataField="text" isKey={true} dataSort={true} width="150">Parameter</TableHeaderColumn>
              <TableHeaderColumn dataField="value" dataFormat={this._valueFormatter}>Value</TableHeaderColumn>
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