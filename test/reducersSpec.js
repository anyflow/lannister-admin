import { fromJS } from 'immutable';
import { expect } from 'chai';
import * as actions from '../src/bases/actions';
import { setName } from '../src/bases/actionCreators';
import reducers from '../src/bases/reducers';

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