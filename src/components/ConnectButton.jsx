import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

var data = [
  {
    status: 'disconnected',
    text: 'Connect',
    bsStyle: 'success',
    disabled: false
  },
  {
    status: 'connecting',
    text: 'Connecting...',
    bsStyle: 'warning',
    disabled: false
  },
  {
    status: 'connected',
    text: 'Disconnect',
    bsStyle: 'danger',
    disabled: false
  },
];

class ConnectButton extends Component {
  constructor(props) {
    super(props);

    this.state = data[0];
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    let newState;
    switch (this.state.status) {
      case 'disconnected': newState = data[1]; break;
      case 'connecting': newState = data[2]; break;
      case 'connected': newState = data[0]; break;
    }

    this.setState(newState, () => console.log(this.state));
  }

  render() {
    return (
      <Button bsStyle={this.state.bsStyle}
        onClick={this.onClick}
        className="btn pull-right"
        disabled={this.state.disabled}>
        {this.state.text}
      </Button>
    );
  }
}

export default ConnectButton;