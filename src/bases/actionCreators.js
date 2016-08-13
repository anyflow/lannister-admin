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

export function setCleanSession(value) {
  return {
    type: actions.SET_CLEAN_SESSION,
    value: value
  }
};

export function setWillRetain(value) {
  return {
    type: actions.SET_WILL_RETAIN,
    value: value
  };
}