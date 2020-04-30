// import counterReducer from "./counter";
// import loggedReducer from "./islogged";
import listsReducer from "./listsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  lists: listsReducer,
});

export default allReducers;
