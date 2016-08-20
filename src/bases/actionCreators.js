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
  };
}

export function addSubscription(topicFilter, qos) {
  let item = {};
  item[topicFilter] = {
      qos,
      count: 0,
      color: 'red'
  };

  return {
    type: actions.ADD_SUBSCRIPTION,
    subscription: item
  };
}

export function removeSubscription(topicFilter) {
  return {
    type: actions.REMOVE_SUBSCRIPTION,
    topicFilter
  };
}

export function updateMessageCount(topicFilter, count) {
  return {
    type: actions.UPDATE_MESSAGE_COUNT,
    topicFilter,
    count
  };
}

export function addMessage(topicName, message) {
  let item = {};
  item[topicName] = {
      message,
      date: new Date()
  };

  return {
    type: actions.ADD_MESSAGE,
    message: item
  };
}