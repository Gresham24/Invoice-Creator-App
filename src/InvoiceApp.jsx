import { useState } from "react";
import Form, { FormDataContext } from "./components/Form/Form";
import FormPreview from "./components/FormPreview/FormPreview";
import LandingPage from "./components/LandingPage/LandingPage";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";

function InvoiceApp() {
    const [formValues, setFormValues] = useState({
        details: {},
        items: [],
        totals: {},
    });

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            
            <Route path="/app/*" element={
                <div className="app-container">
                    <AppNavbar />
                    <div className="app-content">
                        <FormDataContext.Provider value={{ formValues, setFormValues }}>
                            <Routes>
                                <Route path="preview" element={<FormPreview />} />
                                <Route path="" element={<Form />} />
                            </Routes>
                        </FormDataContext.Provider>
                    </div>
                </div>
            } />
        </Routes>
    );
}

export default InvoiceApp;
