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

    // The relationship between this file and main.jsx is okay for now 
    // But it won't scale well (add more screens/components). 
    // It best practice to have all the routes for an app in one file. 
    // You'll need to think about to do that but wrap some with context
    // and others not. Typically I have one or two providers that wraps every route
    // for state that's shared e.g. authentication, cart etc. Then try store 
    // as much as possible at the component level. This helps prevent a user having to navigate through 
    // one component to set up the state for another. 
    // I hope this makes sense
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
