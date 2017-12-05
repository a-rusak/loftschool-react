import { handleAction, handleActions } from 'redux-actions';
import { request, success, failure } from '../actions/show';
import { combineReducers } from 'redux';

const id = handleAction(request, (state, action) => action.payload, null);
const data = handleAction(success, (state, action) => action.payload, null);
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
  id,
  data,
  error,
  isFetched,
  isFetching
});

export const getId = state => state.show.id;
export const getShow = state => state.show.data;
export const getIsFetched = state => state.show.isFetched;
export const getIsFetching = state => state.show.isFetching;
export const getError = state => state.show.error;
