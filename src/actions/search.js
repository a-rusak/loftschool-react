import { createActions } from 'redux-actions';

export const { search: { request, success, failure } } = createActions({
  SEARCH: {
    REQUEST: undefined,
    SUCCESS: undefined,
    FAILURE: undefined
  }
});
