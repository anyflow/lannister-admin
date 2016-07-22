import { fromJS } from 'immutable';
import { expect } from 'chai';
import * as actions from '../src/actions';
import { setName } from '../src/actionCreators';
import reducers from '../src/reducers';

describe('reducers', () => {
  it('handles SET_NAME', () => {
    const name = 'Hyunjeong';
    const action = setName(name);

    const state = reducers(undefined, action);

    expect(state.actionDefault).to.deep.equal({
      name: name
    });
  });
});