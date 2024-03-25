import React, { createContext, useState, useContext } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
    // to test that useFormData is working
    const testFunction = () => console.log("Test function called.");
    const [formValues, setFormValues] = useState({ details: {}, items: [] });

    return (
        <FormDataContext.Provider value={{ formValues, setFormValues }}>
            {children}
        </FormDataContext.Provider>
    );
};

export const useFormData = () => useContext(FormDataContext);
