import { handleAction, handleActions } from 'redux-actions';
import { request, success, failure } from '../actions/search';
import { combineReducers } from 'redux';

const shows = handleAction(success, (state, action) => action.payload, []);

const isFetched = handleActions(
  {
    [request]: () => false,
    [success]: () => true,
    [failure]: () => true
  },
  false
);

export default combineReducers({
  shows,
  isFetched
});


export const getShows = state => state.search.shows;
export const getIsFetched = state => state.search.isFetched;
