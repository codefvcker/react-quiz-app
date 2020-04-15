import { createStore } from "redux";
import rootReducer from "./reducers/index";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
