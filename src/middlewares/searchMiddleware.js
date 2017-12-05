import { request, success, failure } from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === request.toString()) {
    search(action.payload)
      .then(result => {
        setTimeout(()=>{
          store.dispatch(success(result));
        }, 1000);
      })
      .catch(error => {
        store.dispatch(failure(error));
      });
  }
  return next(action);
};
