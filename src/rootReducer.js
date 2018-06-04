import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import verifyReducer from "./reducers/verifyReducer";

export default combineReducers({
  auth: authReducer,
  verify: verifyReducer
});
