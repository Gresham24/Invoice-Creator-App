import { combineReducers } from "redux";
import invoiceReducer from "./invoice";
import customerReducer from "./customer";

export default combineReducers({
  invoices: invoiceReducer,
  customers: customerReducer,
});
