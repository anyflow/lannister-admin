import React, {Component} from 'react';
import Hello from '../components/Hello';
import { connect } from 'react-redux';
import * as actionCreators from '../bases/actionCreators';

function mapStateToProps(state) {
  return {
    name: state.Hello.name
  }
}

const Helloing = connect(
  mapStateToProps,
  actionCreators
)(Hello);

export default Helloing;