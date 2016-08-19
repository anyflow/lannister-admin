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

function WebsocketClient(state = initialState.WebsocketClient, action) {
  switch (action.type) {
    case actions.SET_CONNECTION_PROFILE:
      let newState = {};
      newState[action.profile.parameter] = action.profile.value;
      return Object.assign({}, state, {
        connectionProfile: Immutable.Map(state.connectionProfile).merge(newState).toJS()
      });

    case actions.SET_CONNECTION_STATUS:
      return Object.assign({}, state, {
        connectionStatus: action.status
      });

    case actions.ADD_SUBSCRIPTION:
      return Object.assign({}, state, {
        subscriptions: Immutable.List(state.subscriptions).push(action.subscription).toJS()
      });

    case actions.ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: Immutable.List(state.messages).push(action.message).toJS()
      });

    default:
      return state;
  }
}

const reducers = Redux.combineReducers({
  Hello,
  WebsocketClient
});

export default reducers;