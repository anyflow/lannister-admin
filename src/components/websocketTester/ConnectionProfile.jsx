import Immutable from 'immutable';
import mqtt from 'mqtt';
import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ConnectPanel from './ConnectPanel';
import Checkbox from './Checkbox';
import ConnectButton from './ConnectButton';
import EditableLabel from './EditableLabel';
import RadioGroup from './RadioGroup';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { basicProfileTemplate, advancedProfileTemplate } from '../../data/ConnectionProfile';

require('react-bootstrap-table/css/react-bootstrap-table-all.min.css');
require('../../styles/ConnectionProfile.css');

function mapStateToProps(state) {
  return state.WebsocketTester.connectionProfile;
}

class ConnectionProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.qosDataTemplate = {
      '0': "0",
      '1': "1",
      '2': "2"
    };

    this.mqttVersionDataTemplate = {
      '3.1.1': '3.1.1',
      '3.1': '3.1'
    };

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

      item.value = this.props[profileTemplate[i].key];
      ret = ret.set(i, item);
    }

    return ret.toJS();
  }

  _editableLabel(parameter, value, onBlur, disabled, placeholder) {
    return (
      <EditableLabel
        id={parameter}
        text={value}
        onBlur={(val) => onBlur(parameter, val) }
        disabled={disabled}
        placeholder={placeholder}/>
    );
  }

  _valueFormatter(cell, row) {
    switch (row.key) {
      case 'cleanSession':
        return (
          <Checkbox
            checked={cell}
            onChange={(state) => this.props.setConnectionProfile('cleanSession', state.checked) }
            disabled={this.props.connectionStatus == 'connected'}/>
        );

      case 'willRetain':
        return (
          <Checkbox
            checked={cell}
            onChange={(state) => this.props.setConnectionProfile('willRetain', state.checked) }
            disabled={this.props.connectionStatus == 'connected'}/>
        );

      case 'mqttVersion':
        return <RadioGroup
          className="btn-default btn-sm"
          dataTemplate={this.mqttVersionDataTemplate}
          selected={this.props.mqttVersion}
          onSelect={(key) => this.props.setConnectionProfile('mqttVersion', key) }
          disabled={this.props.connectionStatus == 'connected'}
          name="mqttVersion"/>;

      case 'willQos':
        return <RadioGroup
          className="btn-default btn-sm"
          dataTemplate={this.qosDataTemplate}
          selected={this.props.willQos.toString() }
          onSelect={(key) => this.props.setConnectionProfile('willQos', parseInt(key)) }
          disabled={this.props.connectionStatus == 'connected'}
          name="willQos"/>;

      case 'mqttBrokerAddress':
        return this._editableLabel('mqttBrokerAddress',
          this.props.mqttBrokerAddress,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'ws(s)://hostname:port/(path)');

      case 'clientId':
        return this._editableLabel('clientId',
          this.props.clientId,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'client_id');

      case 'userName':
        return this._editableLabel('userName',
          this.props.userName,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'user_name');

      case 'password':
        return this._editableLabel('password',
          this.props.password,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'password');

      case 'willTopic':
        return this._editableLabel('willTopic',
          this.props.willTopic,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'will_topic_name');

      case 'willMessage':
        return this._editableLabel('willMessage',
          this.props.willMessage,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'will_topic_message');

      case 'connectionTimeout':
        return this._editableLabel('connectionTimeout',
          this.props.connectionTimeout,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'connection timeout in second. e.g. 300');

      case 'keepAliveInterval':
        return this._editableLabel('keepAliveInterval',
          this.props.keepAliveInterval,
          this.props.setConnectionProfile,
          this.props.connectionStatus == 'connected',
          'keep alive interval in second. e.g. 60');

      default:
        console.log('invalid row key!');
    }
  }

  render() {
    return (
      <ConnectPanel title="Connection"
        subtitle="values can be changed with double clicking"
        collapsed={this.props.connectionStatus == 'connected'}
        onConnectionClick={(status) => this.props.onConnectionClick(status) }
        status={this.props.connectionStatus}>
        <div className="row">
          <div className="col-xs-6">
            <BootstrapTable
              data={this.basicProfile}
              condensed={true}
              hover={true}>
              <TableHeaderColumn dataField="text" isKey={true} width="150">Parameter</TableHeaderColumn>
              <TableHeaderColumn dataField="value" dataFormat={this._valueFormatter}>Value</TableHeaderColumn>
            </BootstrapTable>
          </div>
          <div className="col-xs-6">
            <BootstrapTable
              data={this.advancedProfile}
              condensed={true}
              hover={true}>
              <TableHeaderColumn dataField="text" isKey={true} width="150">Parameter</TableHeaderColumn>
              <TableHeaderColumn dataField="value" dataFormat={this._valueFormatter}>Value</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </ConnectPanel>
    );
  }
}

const ConnectionProfile = connect(
  mapStateToProps,
  actionCreators
)(ConnectionProfileComponent);

export default ConnectionProfile;