# Invoice Creator App

The Invoice Creator App is a React-based web application designed to create, view, and print invoices. It uses modern tools and libraries such as Vite for bundling, React for building the UI, and the React-PDF renderer for PDF generation.

## Hosted Link:

https://invoiceappcreator.netlify.app/

## Table of Contents

-   [Getting Started](#getting-started)
-   [Key Libraries and Tools](#key-libraries-and-tools)
-   [Project Structure](#project-structure)
-   [Application flow](#application-flow)
-   [Available Scripts](#available-scripts)
-   [Components Overview](#components-overview)
-   [Configuration Details](#configuration-details)
-   [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

-   Node.js (>=14.x)
-   npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Gresham24/Invoice-Creator-App.git
    cd invoice-creator-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Key Libraries and Tools

-   **React**: Core library for building the UI.
-   **Vite**: Fast bundler and development server.
-   **@react-pdf/renderer**: Library for generating PDFs with React components.
-   **styled-components**: For styling React components.
-   **React Router**: For routing and navigation within the app.

## Project Structure

The project consists of several key components and configuration files:

-   `main.jsx`: Entry point for the React application.
-   `InvoiceApp.jsx`: Main application component.
-   `Form.jsx`: Component for capturing invoice data.
-   `FormData.jsx`: Utility functions for managing form data.
-   `FormPreview.jsx`: Component for displaying and printing the invoice.
-   `PDFDocument.jsx`: Component for generating the PDF document of the invoice.
-   `package.json`: Contains project metadata, dependencies, and scripts.
-   `vite.config.js`: Configuration file for Vite.

## Application Flow

1. **User Interface Initialization**

    - The entry point `main.jsx` renders the `InvoiceApp` component into the DOM. This sets up the initial structure of the application.

2. **Invoice Form**

    - The `InvoiceApp` component includes the `Form` and `FormPreview` components.
    - The `Form` component presents the user with input fields to enter invoice details such as item names, quantities, prices, etc.
    - The form data is managed using React's `useState` hook. As the user fills out the form, the state is updated accordingly.

3. **Data Management**

    - The form data is encapsulated in a state object within `Form.jsx`. This data is collected and managed using the `FormData` utility.
    - When a user makes changes to the form fields, the `handleChange` function updates the state, ensuring the form data is always in sync with user input.

4. **Invoice Preview and Download**

    - The `FormPreview` component is responsible for displaying the invoice in a format suitable for printing.
    - The `PDFDocument` component defines the structure and content of the PDF. It uses the data from the form to dynamically generate the invoice.

5. **PDF Generation**
    - The `PDFDocument` component utilizes `@react-pdf/renderer` to create a PDF document.
    - Styles and layouts are defined using `StyleSheet` from the `@react-pdf/renderer` library.
    - The `Page` and `View` components from `@react-pdf/renderer` are used to structure the content, while the `Text` component is used to display text within the PDF.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs the linter to check for code quality and consistency.

### `npm run preview`

Serves the production build locally to preview it.

## Components Overview

### `main.jsx`

This component is the entry point of the React application. It renders the InvoiceApp component inside the root element, initializing the application.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import InvoiceApp from "./InvoiceApp";

ReactDOM.render(
    <React.StrictMode>
        <InvoiceApp />
    </React.StrictMode>,
    document.getElementById("root")
);
```

### `InvoiceApp.jsx`

This is the main application component that serves as the container for other components. It includes the Form and FormPreview components, organizing the overall layout of the application.

```jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import FormPreview from "./FormPreview";
import FormDataContext from "./FormDataContext";

const InvoiceApp = () => {
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
};

export default InvoiceApp;
```

### Explanation:

1. **State Management**: The `useState` hook is used to manage the form data state (`formValues`). It includes `details`, `items`, and `totals`, which are the main parts of the invoice data.

2. **FormDataContext.Provider**: This context provider wraps the application components to pass down the `formValues` and `setFormValues` through context, making it accessible in both `Form` and `FormPreview` components.

3. **Routing**: The `Routes` component from `react-router-dom` defines the routing logic for the application.
    - The path `/preview` renders the `FormPreview` component, which is used to preview the invoice.
    - The default path `/` renders the `Form` component, which is used to input invoice details.

### `Form.jsx`

This component is responsible for capturing user input for the invoice details.

-   **State Management**: Utilizes `useState` to hold form data for `items`, `totals`, and `details`.
-   **Event Handling**: `handleChange`, `handleAddNewItem`, `handleUpdateItem`, and `handleDeleteItem` functions manage changes to the form fields and items.
-   **Form Validation**: Includes validation logic to ensure required fields are filled before submission.
-   **Context Usage**: Uses `useContext` to access `formValues` and `setFormValues` from `FormDataContext`.
-   **Form Fields**: Includes fields like item name, quantity, price, etc.

The form data is managed using React's `useState` hook, allowing for a dynamic and responsive user experience. As the user fills out the form, the state is updated in real-time.

```jsx
import React, { useState } from "react";
import FormData from "./FormData";

const Form = () => {
    const [data, setData] = useState(FormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <form>
            {/* Form fields go here */}
            <input name="item" value={data.item} onChange={handleChange} />
            {/* Additional fields */}
        </form>
    );
};

export default Form;
```

### `FormPreview.jsx`

This component handles the display of the invoice. It uses the `PDFDocument` component to generate the content of the PDF and renders it for printing.

-   **Context Usage**: Uses `useContext` to access `formValues` from `FormDataContext`.
-   **PDF Generation**: Uses `PDFDownloadLink` from `@react-pdf/renderer` to provide a downloadable PDF of the invoice.

```jsx
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";

const FormPreview = () => {
    return (
        <div>
            {/* Renders the preview layout and invoice details with totals */}

            <StyledbuttonWrapper>
                <button className="backButton" onClick={handleBackButton}>
                    Back
                </button>
                <PDFDownloadLink
                    document={
                        <PDFDocument
                            formValues={formValues}
                            totals={formValues.totals}
                        />
                    }
                    fileName={`INV${formValues.details.invoiceNumber}`}
                    style={{
                        textDecoration: "none",
                        border: "1px solid transparent",
                        background: "#f8f9fa",
                        padding: "8px 48px",
                        borderRadius: "8px",
                    }}
                >
                    {({ loading }) =>
                        loading ? "Loading document..." : "Download"
                    }
                </PDFDownloadLink>
            </StyledbuttonWrapper>
        </div>
    );
};

export default FormPreview;
```

### `PDFDocument.jsx`

This component generates the PDF content for the invoice.

-   **Styling**: Uses `StyleSheet` to define styles for the PDF content.
-   **Content Layout**: Utilizes `Page`, `View`, and `Text` components to layout the invoice details.
-   **Dynamic Content**: Generates content based on the data passed from the form.

The `PDFDocument` component is crucial for the final output of the application. It leverages the `@react-pdf/renderer` library to create a professional-looking invoice document.

```jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        fontFamily: "Helvetica",
    },
    // Other styles...
});

const PDFDocument = ({ formValues, totals }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header and invoice details */}
                <View>
                    <Image
                        src={companyDetails.companyLogo}
                        style={styles.image}
                    />
                    <Text>INVOICE</Text>
                    <Text>{`NO. ${formValues.details.invoiceNumber}`}</Text>
                </View>
                {/* Render line items and totals */}
            </Page>
        </Document>
    );
};

export default PDFDocument;
```

### How Components are Linked Together

1. **Initialization**: The `main.jsx` file initializes the app by rendering `InvoiceApp`, setting up the main structure.
2. **Main Container**: `InvoiceApp` serves as the container that includes both the `Form` and `FormPreview` components, along with the routing logic.
3. **Form Data Handling**: The `Form` component manages the user input and updates the state with the help of the `FormData` utility. While the `FormDataContext.Provider` makes the form data available to all child components.
4. **Routing and Data Sharing**: The `Routes` component defines the different routes, ensuring that `FormPreview` can access the form data to generate the invoice preview.
5. **PDF Preview and Generation**: `PDFDocument` takes the form data and generates the PDF for the invoice, similar to the rendered view of the `FormPreview` component.

## Configuration Details

### `vite.config.js`

Configures Vite to use the React plugin and sets the base URL for the application.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
});
```

### `package.json`

Defines project metadata, dependencies, and useful scripts for development and production.

```json
{
    "name": "invoice-creator-app",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    "dependencies": {
        "@react-pdf/renderer": "^3.4.4",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-pdf": "^8.0.2",
        "react-router-dom": "^6.22.3",
        "styled-components": "^6.1.8"
    },
    "devDependencies": {
        "@types/react": "^18.2.56",
        "@types/react-dom": "^18.2.19",
        "@vitejs/plugin-react": "^4.2.1",
        "eslint": "^8.56.0",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5",
        "vite": "^5.1.4"
    }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
