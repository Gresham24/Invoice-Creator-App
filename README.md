# Invoice Creator App

The Invoice Creator App is a React-based web application designed to create, view, and print invoices. It uses modern tools and libraries such as Vite for bundling, React for building the UI, and React-PDF for PDF generation.

## Hosted Link

https://invoiceappcreator.netlify.app/

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Technologies Used](#technologies-used)
-   [Project Structure](#project-structure)
-   [How It Works](#how-it-works)
-   [Available Scripts](#available-scripts)

## Features

-   **Create Invoices:** Users can create new invoices by entering details through a user-friendly form interface.
-   **Edit Invoices:** Existing invoices can be edited and updated.
-   **Preview Invoices:** Users can preview invoices before finalizing them.
-   **PDF Generation:** Invoices can be downloaded as PDF files for easy distribution and printing.

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

## Technologies Used

-   **React:** For building the user interface.
-   **Vite:** As a fast and modern build tool.
-   **Formik:** For form management and validation.
-   **UUID:** For unique ID creation on each line item.
-   **Styled-components:** For component-scoped styles.
-   **@react-pdf/renderer:** For generating PDF files from React components.

## Project Structure

The project consists of several key components and configuration files:

-   `main.jsx`: Entry point for the React application.
-   `InvoiceApp.jsx`: Main application component.
-   `Form.jsx`: Component for capturing invoice data.
-   `formData.js`: Utility functions for managing form data.
-   `FormPreview.jsx`: Component for displaying and printing the invoice.
-   `PDFDocument.jsx`: Component for generating the PDF document of the invoice.
-   `package.json`: Contains project metadata, dependencies, and scripts.
-   `vite.config.js`: Configuration file for Vite.

## How It Works

### Application Structure

-   **InvoiceApp.jsx:** This is the root component where the main logic of the application resides. It orchestrates other components and manages the overall state.
-   **Form.jsx:** Utilizes Formik to handle form state management, validation, and submission. It is responsible for rendering the form fields and managing form submissions. Along with Formik, form validation is handled through schemas provided by Yup, making the form not only functional but also robust in checking data integrity.
-   **FormHeader.jsx**, **FormFooter.jsx:** These components handle the static parts of the invoice form, such as titles and submission buttons. `FormHeader.jsx` contains the title, logo, or any introductory information about the invoice, whereas `FormFooter.jsx` typically contains action buttons like submit, cancel, or even a print button
-   **FormLineItem.jsx:** Manages individual line items within an invoice, allowing dynamic interaction, such as adding or removing line items, and recalculating totals dynamically. The `uuid` library is used to generate a unique identifier for each line item in an invoice.
-   **PDFDocument.jsx:** Uses the `@react-pdf/renderer` library to transform the invoice data into a downloadable PDF file. This component defines the PDF document structure, styles, and contents based on the data received, which typically includes text, images, tables, and other PDF elements necessary for displaying a complete invoice.

### Flow of Data

1. **Entry Point (`main.jsx`):** Initializes the React application and mounts the `InvoiceApp.jsx` component.
2. **Form Management (`Form.jsx`):** The invoice form captures user inputs with validation handled by Formik and Yup. The state of the form is lifted up to `InvoiceApp.jsx` for shared context.
3. **Line Items Management (`FormLineItem.jsx`):** Each line item in the invoice contains a unique ID and is managed individually, allowing dynamic addition and removal of items.
4. **PDF Generation (`PDFDocument.jsx`):** Upon form submission, the invoice data is processed and rendered into a downloadable PDF file.

### Configuration

-   **Vite Config (`vite.config.js`):** Configures Vite as the build tool for the project. It includes settings for React fast refresh and build optimization.
-   **Dependencies (`package.json`):** Includes all necessary libraries and their versions to ensure compatibility and functionality.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build locally to preview it.
