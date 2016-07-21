import * as actions from './actions.js';

export function setName(name) {
  return {
    type: actions.SET_NAME,
    name
  };
}