import { combineReducers } from "redux";
import count from "./count";

const appReducer = combineReducers({
  counter: count
});

export default appReducer;
