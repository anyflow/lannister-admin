import * as Immutable from 'immutable';
import * as Redux from 'redux';
import * as actions from './actions';

function Hello(state = {}, action) {
  switch (action.type) {
    case actions.SET_NAME:
      return Immutable.Map(state).merge({ name: action.name }).toJS();

    default:
      return state;
  }
}

function WebsocketClient(state = {}, action) {
  switch (action.type) {
    case actions.SET_CONNECTION_STATUS:
      let newState = {
        connectionStatus: action.status
      };
      return Immutable.Map(state).merge(newState).toJS();

    default:
      return state;
  }
}

const reducers = Redux.combineReducers({
  Hello,
  WebsocketClient
});

export default reducers;