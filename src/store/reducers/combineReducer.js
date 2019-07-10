import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  filterReducer,
  cartReducer
});
