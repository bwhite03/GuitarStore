export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SELECT_QUANTITY = "SELECT_QUANTITY";

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});

export const selectQuantity = e => ({
  type: SELECT_QUANTITY,
  payload: e.target.value
});
