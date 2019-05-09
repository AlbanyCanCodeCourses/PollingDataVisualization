import {
  combineReducers
} from "redux";
import LoginReducer from "./components/Login/LoginReducer";
import sharedReducer from "./sharedReducer";

const rootReducer = combineReducers({
  Shared: sharedReducer,
  Login: LoginReducer
});

export default rootReducer;