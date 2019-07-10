export const SELECT_TYPE = "SELECT_TYPE";
export const SELECT_PRICE = "SELECT_PRICE";
export const SELECT_BRAND = "SELECT_BRAND";
export const SELECT_SORT = "SELECT_SORT";

export const selectType = e => ({
  type: SELECT_TYPE,
  payload: e.target.value
});

export const selectPrice = e => ({
  type: SELECT_PRICE,
  payload: e.target.value
});

export const selectBrand = e => ({
  type: SELECT_BRAND,
  payload: e.target.value
});

export const selectSort = e => ({
  type: SELECT_SORT,
  payload: e.target.value
});
