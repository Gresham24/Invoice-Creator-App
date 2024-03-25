import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceApp from "./InvoiceApp";
import FormPrint from "./components/FormPrint";
import { FormDataProvider } from "./components/FormDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <FormDataProvider>
                <Routes>
                    <Route path="/" element={<InvoiceApp />} />
                    <Route path="/preview" element={<FormPrint />} />
                </Routes>
            </FormDataProvider>
        </BrowserRouter>
    </React.StrictMode>
);
