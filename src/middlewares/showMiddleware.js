import { request, success, failure } from '../actions/show';
import { show } from '../api';

export default store => next => action => {
  if (action.type === request.toString()) {
    show(action.payload)
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
