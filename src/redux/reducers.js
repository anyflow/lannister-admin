import * as Redux from 'redux';
import WebsocketClient from './reducers/WebsocketTester';

const reducers = Redux.combineReducers({
  WebsocketClient
});

export default reducers;