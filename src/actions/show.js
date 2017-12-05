import { createActions } from 'redux-actions';

export const { show: { request, success, failure } } = createActions({
  SHOW: {
    REQUEST: undefined,
    SUCCESS: undefined,
    FAILURE: undefined
  }
});
