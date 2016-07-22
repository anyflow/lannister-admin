import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <div>
        <input onChange={(event) => this.props.setName(event.target.value)} />
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}

export default Hello;