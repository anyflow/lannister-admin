import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup.jsx';
import Navigation from './Navigation.jsx';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1 className={classNames('output')}>Hello { this.props.name }!</h1>        
        <FieldGroup
          type="text"
          label="Type your name"
          placeholder="name"
          help="The name typed will be shown below"
          onChange={(event) => this.props.setName(event.target.value)}
        />
      </div>
    );
  }
}

export default Hello;