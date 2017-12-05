import { createActions } from 'redux-actions';

export const { show: { request, success, failure } } = createActions({
  SHOW: {
    REQUEST: [id => id, () => {}],
    SUCCESS: [show => show, () => {}],
    FAILURE: undefined
  }
});
