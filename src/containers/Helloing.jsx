import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hello from '../components/Hello';
import * as actionCreators from '../bases/actionCreators';

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