import { combineReducers } from 'redux';
import market from './market';
import budget from './budget';

export default combineReducers({
  market,
  budget
});
