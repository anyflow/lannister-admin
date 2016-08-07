import React, {Component} from 'react';
import {Button, Collapse} from 'react-bootstrap';
import FieldGroup from './FieldGroup';

const randomClientId = "ramdomClientID";

class UserCredential extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open }) }>User Credential</Button>
        <Collapse in={this.state.open}>
          <div>
            <FieldGroup
              type="text"
              label="MQTT Broker Address"
              placeholder={'mqtt://' + window.location.hostname + ':2883'}
              // onChange={(event) => this.props.setName(event.target.value)}
              />
            <FieldGroup
              type="text"
              label="Client ID"
              placeholder={randomClientId}
              // onChange={(event) => this.props.setName(event.target.value)}
              />
            <FieldGroup
              type="text"
              label="User Name"
              placeholder="User Name"
              // onChange={(event) => this.props.setName(event.target.value)}
              />
            <FieldGroup
              type="password"
              label="Password"
              placeholder="password"
              // onChange={(event) => this.props.setName(event.target.value)}
              />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default UserCredential;