import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import InvoiceApp from "./InvoiceApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InvoiceApp />
    </BrowserRouter>
  </React.StrictMode>
);
