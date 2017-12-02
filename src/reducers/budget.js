import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

export default (
  state = {
    profit: 0,
    marketExpense: 0,
    farmExpense: 0,
    deliveryExpense: 0
  },
  action
) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpense: state.marketExpense + 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpense: state.farmExpense + 100
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpense: state.deliveryExpense + 20
      };
    default:
      return state;
  }
};

export const getBudget = state => state.budget;
