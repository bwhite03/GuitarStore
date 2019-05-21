import JSON from "../products.json";

const filterDefaultState = {
  products: JSON
};

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filterReducer;
