import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import InvoiceApp from "./InvoiceApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ListInvoices from "./Pages/ListInvoices";
import CreateInvoice from "./Pages/CreateInvoice";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
                
              <Route path="/" element={<ListInvoices />}></Route>

              <Route path="/invoices">
                <Route index element={<ListInvoices />}></Route>
                <Route path="/invoices/create" element={<CreateInvoice />}></Route>
              </Route>

              
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}
