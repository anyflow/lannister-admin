import { fromJS } from 'immutable';
import { expect } from 'chai';
import * as actions from '../src/actions';
import { setName } from '../src/actionCreators';

describe('actionCreators', () => {
  it('handles setName', () => {
    const name = 'Hyunjeong';
    const action = setName(name);

    const expectedValue = {
      type: actions.SET_NAME,
      name: name
    };

    expect(action).to.deep.equal(expectedValue);
  });
});