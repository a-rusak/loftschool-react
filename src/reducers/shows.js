
import {createAction} from 'redux-actions';
import { handleAction } from 'redux-actions';

const showsSuccess = createAction('SHOWS_SUCCESS');

const shows = handleAction(
  showsSuccess,
  (state, action) => action.payload,
  []
);

export default shows;
