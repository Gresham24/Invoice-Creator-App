import React, { useState } from "react";
import Form, { FormDataContext } from "./components/Form";
import FormPrint from "./components/FormPrint";
import {Route, Routes} from "react-router-dom"

function InvoiceApp() {
    const [formValues, setFormValues] = useState({
        details: {},
        items: [],
        totals: {},
    });

    return (
        <FormDataContext.Provider value={{ formValues, setFormValues }}>
            <Routes>
                <Route path="preview" element={<FormPrint />} />

                <Route path="/" element={<Form />} />
            </Routes>
        </FormDataContext.Provider>
    );
}

export default InvoiceApp;
