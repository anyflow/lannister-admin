import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        Type your name : 
        <input onChange={(event) => this.props.setName(event.target.value)} />
        <h1 className={classNames('output')}>Hello { this.props.name }!</h1>
        <Button>Button React-Bootstrap Sample</Button>
      </div>
    );
  }
}

export default Hello;