import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup.jsx';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <FieldGroup
          type="text"
          label="Type your name"
          placeholder="name"
          help="The name typed will be shown below"
          onChange={(event) => this.props.setName(event.target.value)}
        />
        <h1 className={classNames('output')}>Hello { this.props.name }!</h1>
        <Button bsStyle="primary">Button React-Bootstrap Sample</Button>
      </div>
    );
  }
}

export default Hello;