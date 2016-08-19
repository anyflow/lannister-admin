import * as actions from './actions.js';

export function setName(name) {
  return {
    type: actions.SET_NAME,
    name
  };
}

export function setConnectionStatus(status) {
  return {
    type: actions.SET_CONNECTION_STATUS,
    status
  };
}

export function setConnectionProfile(parameter, value) {
  return {
    type: actions.SET_CONNECTION_PROFILE,
    profile: {
      parameter,
      value
    }
  }
};

export function addSubscription(topicFilter, qos) {
  return {
    type: actions.ADD_SUBSCRIPTION,
    subscription: {
      topicFilter,
      qos,
      count: 0,
      color: 'red'
    }
  }
};

export function addMessage(topicName, message) {
  return {
    type: actions.ADD_MESSAGE,
    message: {
      topicName,
      message,
      date: new Date()
    }
  };
}