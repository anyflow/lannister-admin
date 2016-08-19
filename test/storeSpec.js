import { expect } from 'chai';
import { createStore } from 'redux';
import { setName } from '../src/bases/actionCreators';
import reducers from '../src/bases/reducers';

describe('Store', () => {
  it('gets state', () => {
    const name = 'Hyunjeong';
    const initialState = {
      actionDefault: {
        name: name
      }
    };
    const store = createStore(reducers, initialState);
    expect(store.getState()).to.be.deep.equal(initialState);

    const newName = 'Park';
    let unsubscribe = store.subscribe(() =>
      expect(store.getState().actionDefault).to.be.deep.equal({
        name: newName
      })
    );

    store.dispatch(setName(newName));
  });
});