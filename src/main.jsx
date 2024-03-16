import React from "react";
import ReactDOM from "react-dom/client";
import Form from './components/Form.jsx'
import FormPrint from "./components/FormPrint.jsx";
import { FormDataContext } from "./components/Form.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <FormDataContext.Provider value={formValues}> */}
            <Form />
            {/* <FormPrint /> */}
        {/* </FormDataContext.Provider> */}
    </React.StrictMode>
);
