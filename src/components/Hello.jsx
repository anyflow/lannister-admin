import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

require('../styles/Hello.css');

function mapStateToProps(state) {
  return {
    name: state.Hello.name
  }
}

class HelloPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
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

export default connect(
  mapStateToProps,
  actionCreators
)(HelloPage);