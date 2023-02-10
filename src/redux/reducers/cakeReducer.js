import { ADD_CAKE, BUY_CAKE } from "../actions/cakeAction";
import { initialCakeState } from "../states.js/cakeState";

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.num,
      };
      case ADD_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake + action.num,
      };
    default:
      return state;
  }
};

export default cakeReducer
