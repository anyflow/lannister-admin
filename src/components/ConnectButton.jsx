import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Button} from 'react-bootstrap';

var data = {
  disconnected: {
    status: 'disconnected',
    text: 'Connect',
    bsStyle: 'success',
    disabled: false
  },
  connecting:{
    status: 'connecting',
    text: 'Connecting...',
    bsStyle: 'warning',
    disabled: true
  },
  connected:{
    status: 'connected',
    text: 'Disconnect',
    bsStyle: 'danger',
    disabled: false
  },
};

class ConnectButton extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = data[this.props.status];
  }

  componentWillReceiveProps(nextProps) {
    this.setState(data[nextProps.status]);
  }

  render() {
    return (
      <Button bsStyle={this.state.bsStyle}
        onClick={() => this.props.onClick(this.state.status)}
        className="btn pull-right"
        disabled={this.state.disabled}>
        {this.state.text}
      </Button>
    );
  }
}

export default ConnectButton;