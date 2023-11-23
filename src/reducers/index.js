import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import AlertReducer from "./Activity/alertReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    alert: AlertReducer,
  });

export default rootReducer;
