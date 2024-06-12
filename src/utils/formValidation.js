export const validateField = (name, value, setErrors) => {
    let error = "";

    switch (name) {
        case "invoiceNumber":
            if (!value) error = "Invoice number is required";
            break;
        case "purchaseOrder":
            if (!value) error = "Purchase order is required";
            break;
        case "customer":
            if (!value) error = "Customer is required";
            break;
        case "issueDate":
            if (!value) error = "Issue date is required";
            break;
        case "dueDate":
            if (!value) error = "Due date is required";
            break;
        case "qty":
            if (!value || value <= 0) error = "Quantity must be greater than 0";
            break;
        case "price":
            if (!value || value <= 0) error = "Price must be greater than 0";
            break;
        default:
            break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
};

export const validateForm = (details, items, setErrors) => {
    const currentErrors = {};

    if (!details.invoiceNumber) currentErrors.invoiceNumber = "Required";
    if (!details.purchaseOrder) currentErrors.purchaseOrder = "Required";
    if (!details.customer) currentErrors.customer = "Required";
    if (!details.issueDate) currentErrors.issueDate = "Required";
    if (!details.dueDate) currentErrors.dueDate = "Required";

    items.forEach((item, index) => {
        if (!item.productService)
            currentErrors[`productService${index}`] = "Required";
        if (!item.qty || item.qty <= 0)
            currentErrors[`qty${index}`] = "Required";
        if (!item.price || item.price <= 0)
            currentErrors[`price${index}`] = "Required";
    });

    setErrors(currentErrors);

    return Object.keys(currentErrors).length === 0;
};
