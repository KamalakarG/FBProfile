import { combineReducers } from "redux";
import loginReducers from "./login.reducer";
import usersListReducer from "./users.list.reducer";

const rootReducer = combineReducers({
  loginReducers,
  usersListReducer,
});

export default rootReducer;
