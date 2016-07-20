import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Hello from '../../src/components/Hello';

describe('Hello', () => {
  it('render with provided name', () => {
    const name = "hyunjeong";
    const component = renderIntoDocument(
      <Hello name={name} />
    );
    const h1s = scryRenderedDOMComponentsWithTag(component, 'h1');

    expect(component.props.name).to.equal(name);
    expect(h1s[0].textContent).to.include(name);
  });
});