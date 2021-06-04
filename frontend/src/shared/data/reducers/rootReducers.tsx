import { combineReducers } from "redux";
import user from "./userReducer";

const rootReducer = combineReducers({
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
