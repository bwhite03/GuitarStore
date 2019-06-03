import { ADD_ITEM } from "../actions/cartActions";

const cartDefaultState = [];

const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default cartReducer;
