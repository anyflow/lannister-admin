import * as actions from './actions.js';

export function setName(name) {
  return {
    type: actions.SET_NAME,
    name: name
  };
}

export function setConnectionStatus(status) {
  return {
    type: actions.SET_CONNECTION_STATUS,
    status: status
  };
}

export function setBasicProfile(parameter, value) {
  return {
    type: actions.SET_BASIC_PROFILE,
    profile: {
      parameter: parameter,
      value: value
    }
  }
};

export function setAdvancedProfile(parameter, value) {
  return {
    type: actions.SET_ADVANCED_PROFILE,
    profile: {
      parameter: parameter,
      value: value
    }
  }
};