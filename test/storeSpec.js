import { expect } from 'chai';
import { createStore } from 'redux';
import { setName } from '../src/actionCreators';
import reducers from '../src/reducers';

describe('Store', () => {
  it('gets state', () => {
    const name = 'Hyunjeong';
    const store = createStore(reducers);
    let unsubscribe = store.subscribe(() =>
      expect(store.getState().actionDefault).to.be.deep.equal({
        name: name
      })
    );
  
    store.dispatch(setName(name));
  });
});