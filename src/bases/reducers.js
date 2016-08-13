import * as Immutable from 'immutable';
import * as Redux from 'redux';
import * as actions from './actions';
import initialState from './../data/initialState';

function Hello(state = initialState, action) {
  switch (action.type) {
    case actions.SET_NAME:
      return Immutable.Map(state).merge({ name: action.name }).toJS();

    default:
      return state;
  }
}

function connectionStatus(state = initialState.WebsocketClient.connectionStatus, action) {
  switch(action.type) {
    case actions.SET_CONNECTION_STATUS:
      return action.status;

    default:
      return state; 
  }
}

function basicProfile(state = initialState.WebsocketClient.connectionProfile.basicProfile, action) {
  switch (action.type) {
    case actions.SET_CLEAN_SESSION:
      return Immutable.List(state).setIn([2],
        {
          key: "cleanSession",
          text: "Clean Session",
          value: action.value
        }
      ).toJS();

    case actions.SET_WILL_RETAIN:
      return Immutable.List(state).setIn([4],
        {
          key: "willRetain",
          text: "Will Retain",
          value: action.value
        }
      ).toJS();

    default:
      return state;
  }
}

function advancedProfile(state = initialState.WebsocketClient.connectionProfile.advancedProfile, action) {
  return state;
}

const connectionProfile = Redux.combineReducers({
  basicProfile,
  advancedProfile
});

const WebsocketClient = Redux.combineReducers({
  connectionStatus,
  connectionProfile
});

const reducers = Redux.combineReducers({
  Hello,
  WebsocketClient
});

export default reducers;