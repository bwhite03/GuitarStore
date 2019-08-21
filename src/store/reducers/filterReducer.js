import {
  FETCH_DATA,
  SELECT_TYPE,
  SELECT_PRICE,
  SELECT_BRAND,
  SELECT_SORT
} from "../actions/filterActions";

const filterDefaultState = {
  products: [],
  filteredProducts: [],
  type: "all",
  price: "all",
  brand: "all",
  sort: "ascending"
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, products: action.payload };
    case SELECT_TYPE:
      return { ...state, type: action.payload };
    case SELECT_PRICE:
      return { ...state, price: action.payload };
    case SELECT_BRAND:
      return { ...state, brand: action.payload };
    case SELECT_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
