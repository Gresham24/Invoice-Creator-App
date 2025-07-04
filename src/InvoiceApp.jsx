import { useState } from "react";
import Form, { FormDataContext } from "./components/Form/Form";
import FormPreview from "./components/FormPreview/FormPreview";
import { Route, Routes } from "react-router-dom";

function InvoiceApp() {
    const [formValues, setFormValues] = useState({
        details: {},
        items: [],
        totals: {},
    });

    return (
        <FormDataContext.Provider value={{ formValues, setFormValues }}>
            <Routes>
                <Route path="preview" element={<FormPreview />} />

                <Route path="/" element={<Form />} />
            </Routes>
        </FormDataContext.Provider>
    );
}

export default InvoiceApp;
