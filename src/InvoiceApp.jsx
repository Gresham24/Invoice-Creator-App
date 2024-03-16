import React, { useState } from "react";
import Form, { FormDataContext } from "./components/Form";
import FormPrint from "./components/FormPrint";

function InvoiceApp() {
    const [formValues, setFormValues] = useState({
        details: {},
        items: [],
    });
 
    return (
        <FormDataContext.Provider value={{ formValues, setFormValues }}>
            <Form />
            <FormPrint />
        </FormDataContext.Provider>
    );
}

export default InvoiceApp;
