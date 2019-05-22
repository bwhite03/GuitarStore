import JSON from "../products.json";
import {
  SELECT_TYPE,
  SELECT_PRICE,
  SELECT_BRAND,
  FILTER
} from "../actions/filterActions";

const filterDefaultState = {
  products: JSON,
  filteredProducts: JSON,
  type: "all",
  price: "all",
  brand: "all"
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case SELECT_TYPE:
      return {
        ...state,
        type: action.payload
      };
    case SELECT_PRICE:
      return { ...state, price: action.payload };
    case SELECT_BRAND:
      return { ...state, brand: action.payload };
    case FILTER:
      let newData = state.products;
      if (state.type !== "all") {
        newData = newData.filter(item => item.type === state.type);
      }
      if (state.brand !== "all") {
        newData = newData.filter(item => item.brand === state.brand);
      }
      return {
        ...state,
        filteredProducts: newData
      };
    default:
      return state;
  }
};

export default filterReducer;
