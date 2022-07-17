import { combineReducers } from "redux";

import classReducer from "./class";

const rootReducer = combineReducers({
  Class: classReducer,
});

export default rootReducer;
