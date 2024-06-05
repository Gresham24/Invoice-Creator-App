import { createStore } from "redux";
import reducers from "./reducers";

const tools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers, tools);
