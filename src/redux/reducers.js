import * as Redux from 'redux';
import WebsocketTester from './reducers/WebsocketTester';
import Messages from './reducers/Messages';

const reducers = Redux.combineReducers({
  WebsocketTester,
  Messages
});

export default reducers;