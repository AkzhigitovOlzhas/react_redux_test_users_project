import { combineReducers } from "redux";
import authReducer from "./auth/authReduser";
import usersReducers from "./users/usersReduser";

const rootReducer = () =>
  combineReducers({
    users: usersReducers,
    auth: authReducer,
  });

export default rootReducer;
