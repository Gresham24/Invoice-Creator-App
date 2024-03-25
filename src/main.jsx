import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceApp from "./InvoiceApp";
import FormPrint from "./components/FormPrint";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
                <Routes>
                    <Route path="/" element={<InvoiceApp />} />
                    <Route path="/preview" element={<FormPrint />} />
                </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
