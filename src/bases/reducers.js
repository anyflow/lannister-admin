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
  switch(action.type) {
    case actions.SET_BASIC_PROFILE:
      let newState = {};
      newState[action.profile.parameter] = action.profile.value;
      return Immutable.Map(state).merge(newState).toJS();

    default:
      return state;
  }
}

function advancedProfile(state = initialState.WebsocketClient.connectionProfile.advancedProfile, action) {
  switch(action.type) {
    case actions.SET_ADVANCED_PROFILE:
      let newState = {};
      newState[action.profile.parameter] = action.profile.value;
      return Immutable.Map(state).merge(newState).toJS();

    default:
      return state;
  }
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