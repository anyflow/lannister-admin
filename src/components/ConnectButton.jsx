import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class ConnectButton extends Component {
  constructor(props) {
    super(props);

    this.state = { connected: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      connected: !this.state.connected
    }, function () {
      console.log(this.state);
      this.changeStyle();
    }.bind(this));
  }

  changeStyle() {
    this.state.connected ?
      console.log(this.props) : console.log('false!!');
  }
  render() {
    return (
          <Button bsStyle="primary"
                  onClick={this.onClick}
                  className="btn pull-right">
            Connect
          </Button>
    );
  }
}

export default ConnectButton;