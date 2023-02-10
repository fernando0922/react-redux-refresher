import { ADD_BUN, BUY_BUN } from "../actions/BunAction";
import { initialBunState } from "../states.js/bunState";

export const bunReducer = (state = initialBunState, action) => {
  switch (action.type) {
    case BUY_BUN:
      return { ...state, numOfBun: state.numOfBun - action.num };
    case ADD_BUN:
      return { ...state, numOfBun: state.numOfBun + action.num };
    default:
      return state;
  }
};
