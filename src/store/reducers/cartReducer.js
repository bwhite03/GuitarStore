import { ADD_ITEM, DELETE_ITEM } from "../actions/cartActions";

const cartDefaultState = {
  cart: [],
  total: 0
};

const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
