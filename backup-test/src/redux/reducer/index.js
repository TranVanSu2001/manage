import { combineReducers } from "redux";

import classReducer from "./class";
import studentReducer from "./student";

const rootReducer = combineReducers({
  Class: classReducer,
  Student: studentReducer,
});

export default rootReducer;
