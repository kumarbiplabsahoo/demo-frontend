import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AlertReducer from "./Activity/alertReducer";

const rootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    alert: AlertReducer,
  });
// const rootReducer = combineReducers({
//   router: routerReducer(),
//   alert: AlertReducer,
// });

export default rootReducer;
