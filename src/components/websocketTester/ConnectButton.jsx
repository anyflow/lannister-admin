import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

require('../../styles/ConnectButton.css');

var data = {
  disconnected: {
    status: 'disconnected',
    text: 'Connect',
    bsStyle: 'success',
    disabled: false
  },
  connecting: {
    status: 'connecting',
    text: 'Connecting...',
    bsStyle: 'warning',
    disabled: true
  },
  connected: {
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
      <span
        onClick={() => this.props.onClick(this.state.status) }
        className={"btn-connect btn-" + this.state.bsStyle}
        disabled={this.state.disabled}>
        {this.state.text}
      </span>
    );
  }
}

export default ConnectButton;