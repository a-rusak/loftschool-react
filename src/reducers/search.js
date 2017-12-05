import { handleAction, handleActions } from 'redux-actions';
import { request, success, failure } from '../actions/search';
import { combineReducers } from 'redux';

const query = handleAction(request, (state, action) => action.payload, ``);
const shows = handleAction(success, (state, action) => action.payload, []);
const error = handleAction(failure, (state, action) => action.error, null);

const isFetched = handleActions(
  {
    [request]: () => false,
    [success]: () => true,
    [failure]: () => false
  },
  false
);

const isFetching = handleActions(
  {
    [request]: () => true,
    [success]: () => false,
    [failure]: () => false
  },
  false
);

export default combineReducers({
  query,
  shows,
  error,
  isFetched,
  isFetching
});

export const getQuery = state => state.search.query;
export const getShows = state => state.search.shows;
export const getIsFetched = state => state.search.isFetched;
export const getIsFetching = state => state.search.isFetching;
export const getError = state => state.search.error;
