import * as Immutable from 'immutable';
import * as Redux from 'redux';
import * as actions from './actions';
import { setName } from './actionCreators';

function actionDefault(state = {}, action) {
  switch (action.type) {
    case actions.SET_NAME:
      return Immutable.Map(state).merge({ name: action.name }).toJS();

    default:
      return state;
  }
}

const reducers = Redux.combineReducers({
  actionDefault
});

export default reducers;