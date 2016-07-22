import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        type name : <input onChange={(event) => this.props.setName(event.target.value)} />
        <h1>Hello { this.props.name }!</h1>
        <h3>fetch { self.fetch ? "enable" : "disable" }</h3>
      </div>
    );
  }
}

export default Hello;