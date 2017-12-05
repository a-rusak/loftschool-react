import { createActions } from 'redux-actions';

export const { search: { request, success, failure } } = createActions({
  SEARCH: {
    REQUEST: [query => query, () => {}],
    SUCCESS: [shows => shows, () => {}],
    FAILURE: undefined
  }
});
