import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hello from './Hello';
import * as actionCreators from '../actionCreators';

function mapStateToProps(state) {
  return {
    name: state.actionDefault.name
  }
}

const Helloing = connect(
  mapStateToProps,
  actionCreators
)(Hello);

export default Helloing;