import { Map } from 'immutable';
import { combineReducers } from 'redux';
import * as actions from './actions';
import { setName } from './actionCreators';

function actionDefault(state = [], action) {
  switch (action.type) {
    case actions.SET_NAME:
      return { name: action.state };

    default:
      return state;
  }
}

const reducers = combineReducers({
  actionDefault
});

export default reducers;