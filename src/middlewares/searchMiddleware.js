import { request, success, failure } from '../actions/search';
import { search } from '../api';

export default store => next => action => {
  if (action.type === request.toString()) {
    console.log(action.payload.query);
    search(action.payload.query)
      .then(result => {
        store.dispatch(success(result));
      })
      .catch(error => {
        store.dispatch(failure(error));
      });
  }
  return next(action);
};

// export default middleware;
