import { createContext, useContext, useEffect, useState } from "react";
import { companyDetails, customerDetails } from "./FormData";
import { useNavigate } from "react-router-dom";
import {
    StyledCompanyDetails,
    StyledInput,
    StyledDropdown,
    StyledCustomerDetails,
    StyledFormHeader,
    StyledInputsWrapper,
    StyledDescriptionHeaders,
    StyledDescriptionRow,
    StyledProductServiceInput,
    StyledPriceInput,
    StyledQtyTaxDiscInput,
    StyledDescriptionTextarea,
    StyledDeleteButton,
    StyledAddButton,
    StyledFormFooter,
    StyledCostSummaries,
    StyledCostSummaryAmounts,
    StyledExtraDetails,
    StyledFormActionButtons,
    StyledCancelButton,
    StyledSubmitButton,
} from "../styles/Form.styled";

export const FormDataContext = createContext();


//**========== COMPONENTS=========== **/

const LineItem = ({
    item,
    onUpdate,
    onDelete,
    index,
    lineItemTotal,
    errors,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(item.id, name, value);
    };

    const subtotal = item.qty * item.price;
    const subTotalWithTax = subtotal * (1 + item.taxPercentage / 100);
    const discountAmount = subTotalWithTax * (item.discountPercentage / 100);
    lineItemTotal = parseFloat((subTotalWithTax - discountAmount).toFixed(2));

    return (
        <StyledDescriptionRow>
            <div>{index + 1}</div>
            <StyledInput>
                <label htmlFor="productService">
                    <StyledProductServiceInput
                        name="productService"
                        type="text"
                        value={item.productService || ""}
                        onChange={handleChange}
                        placeholder="Enter a product"
                    />
                    {errors[`productService${index}`] && (
                        <span>{errors[`productService${index}`]}</span>
                    )}
                </label>
                <label htmlFor="description">
                    <StyledDescriptionTextarea
                        name="description"
                        type="text"
                        rows="3"
                        value={item.description || ""}
                        onChange={handleChange}
                        placeholder="Enter a description... (Optional)"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="qty">
                    <StyledQtyTaxDiscInput
                        name="qty"
                        type="number"
                        value={item.qty || ""}
                        onChange={handleChange}
                    />
                    {errors[`qty${index}`] && (
                        <span>{errors[`qty${index}`]}</span>
                    )}
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="price">
                    <StyledPriceInput
                        name="price"
                        type="number"
                        value={item.price || ""}
                        onChange={handleChange}
                        placeholder="0.00"
                    />
                    {errors[`price${index}`] && (
                        <span>{errors[`price${index}`]}</span>
                    )}
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="taxPercentage">
                    <StyledQtyTaxDiscInput
                        name="taxPercentage"
                        type="number"
                        value={item.taxPercentage || ""}
                        onChange={handleChange}
                        placeholder="% 0"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="discountPercentage">
                    <StyledQtyTaxDiscInput
                        name="discountPercentage"
                        type="number"
                        value={item.discountPercentage || ""}
                        onChange={handleChange}
                        placeholder="%  0"
                    />
                </label>
            </StyledInput>
            <div id={"itemTotal" + index}>{lineItemTotal}</div>
            {index > 0 && (
                <StyledDeleteButton onClick={() => onDelete(item.id)}>
                    <img src="/delete_icon.svg" alt="delete button" />
                </StyledDeleteButton>
            )}
        </StyledDescriptionRow>
    );
};

// Main funcition
export default function Form() {
    /*=========== CONTEXT ===========*/

    // Use context to access setFormValues
    const { formValues, setFormValues } = useContext(FormDataContext);

    // Get today's date in YYYY-MM-DD format
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    /*=========== HOOKS===========*/

    // form line items
    // Initialize state with values from formValues context
    const [items, setItems] = useState(
        formValues.items.length > 0
            ? formValues.items
            : [
                  {
                      id: 1,
                      productService: "",
                      description: "",
                      qty: 1,
                      price: 0,
                      taxPercentage: "",
                      discountPercentage: "",
                  },
              ]
    );

    // Initialize nextItemId based on the maximum ID in items array plus one
    const initialNextItemId =
        items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 2;
    const [nextItemId, setNextItemId] = useState(initialNextItemId);

    const [totals, setTotals] = useState(formValues.totals);
    // Initialize details with current date for issueDate
    const [details, setDetails] = useState({
        ...formValues.details,
        issueDate: formValues.details.issueDate || getCurrentDate(),
    });

    /*=========== FUNCTIONS ===========*/
    useEffect(() => {
        calculateTotals();
    }, [items]);

    const calculateTotals = () => {
        let subtotal = 0;
        let taxAmount = 0;
        let discountAmount = 0;

        items.forEach((item) => {
            const itemSubtotal = item.qty * item.price;
            subtotal += itemSubtotal;
            taxAmount += itemSubtotal * (item.taxPercentage / 100);
            discountAmount += itemSubtotal * (item.discountPercentage / 100);
        });

        const total = subtotal + taxAmount - discountAmount;

        setTotals({
            subtotal: parseFloat(subtotal.toFixed(2)),
            tax: parseFloat(taxAmount.toFixed(2)),
            discount: parseFloat(discountAmount.toFixed(2)),
            total: parseFloat(total.toFixed(2)),
        });
    };

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });

        // Validate on change
        validateField(name, value);
    };

    const validateField = (name, value) => {
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
                if (!value || value <= 0)
                    error = "Quantity must be greater than 0";
                break;
            case "price":
                if (!value || value <= 0)
                    error = "Price must be greater than 0";
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const validateForm = () => {
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

    // Function to calculate the due date
    const calculateDueDate = (issueDate, dueDateOption) => {
        const issue = new Date(issueDate);
        switch (dueDateOption) {
            case "30days":
                issue.setDate(issue.getDate() + 30);
                break;
            case "60days":
                issue.setDate(issue.getDate() + 60);
                break;
            case "90days":
                issue.setDate(issue.getDate() + 90);
                break;
            default:
                break;
        }
        return issue.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    };

    // Function to add a new line item
    const handleAddNewItem = (event) => {
        event.preventDefault();
        setItems((prevItems) => [
            ...prevItems,
            {
                id: nextItemId,
                productService: "",
                description: "",
                qty: 1,
                price: 0,
                taxPercentage: 0,
                discountPercentage: 0,
            },
        ]);
        setNextItemId((prevId) => prevId + 1);
    };

    // Function to handle updates to line item
    const handleUpdateItem = (id, name, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, [name]: value } : item
            )
        );
        // Validate on change
        validateField(name, value);
    };

    // Function to delete a line item
    const handleDeleteItem = (itemId) => {
        setItems((oldItems) => oldItems.filter((item) => item.id !== itemId));
    };

    // navigate to preview page
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const dueDate = calculateDueDate(
                details.issueDate,
                details.dueDate
            );
            setFormValues({ details: { ...details, dueDate }, items, totals });
            navigate("/preview");
        } else {
            alert("Please fill in all the necessary fields in the form.");
        }
    };

    // Form display
    return (
        <form onSubmit={handleSubmit}>
            <StyledFormHeader>
                <StyledCompanyDetails>
                    <div>
                        <h3>{companyDetails.name}</h3>
                        <p>{companyDetails.companyName}</p>
                    </div>
                    <img src={companyDetails.companyLogo} alt="logo" />
                    <p>{companyDetails.companyAddress1}</p>
                    <p>{companyDetails.companyAddress2}</p>
                    <p>{companyDetails.companyEmail}</p>
                </StyledCompanyDetails>

                <StyledInputsWrapper>
                    <StyledInput>
                        <label htmlFor="invoiceNumber">Invoice number</label>
                        <input
                            onChange={handleChange}
                            name="invoiceNumber"
                            type="text"
                            id="invoiceNumber"
                            placeholder="Enter invoice number..."
                            value={details.invoiceNumber || ""}
                        />
                        {errors.invoiceNumber && (
                            <span>{errors.invoiceNumber}</span>
                        )}
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="purchaseOrder">Purchase order</label>
                        <input
                            onChange={handleChange}
                            name="purchaseOrder"
                            type="text"
                            id="purchaseOrder"
                            placeholder="Enter purchase order number..."
                            value={details.purchaseOrder || ""}
                        />
                        {errors.purchaseOrder && (
                            <span>{errors.purchaseOrder}</span>
                        )}
                    </StyledInput>
                </StyledInputsWrapper>

                <StyledDropdown>
                    <label htmlFor="customerName">Customer</label>
                    <select
                        name="customer"
                        id="customerName"
                        onChange={handleChange}
                        defaultValue={details.customer || ""}
                    >
                        <option value="" disabled>
                            Select a customer
                        </option>
                        <option value="Emirates">Emirates Airlines</option>
                        <option value="Mandu">Mandu</option>
                        <option value="Amasuku">Amasuku</option>
                    </select>
                    {errors.customer && <span>{errors.customer}</span>}
                    {details.customer && (
                        <StyledCustomerDetails>
                            <p>{customerDetails[details.customer]?.address}</p>
                            <p>{customerDetails[details.customer]?.phone}</p>
                        </StyledCustomerDetails>
                    )}
                </StyledDropdown>

                <StyledInputsWrapper>
                    <StyledInput>
                        <label htmlFor="issueDate">Issue date</label>
                        <input
                            onChange={handleChange}
                            name="issueDate"
                            type="date"
                            id="issueDate"
                            value={details.issueDate || ""}
                        />
                        {errors.issueDate && <span>{errors.issueDate}</span>}
                    </StyledInput>
                    <StyledDropdown>
                        <label htmlFor="dueDate">Due date</label>
                        <select
                            onChange={handleChange}
                            name="dueDate"
                            id="dueDate"
                            defaultValue={details.dueDate || ""}
                        >
                            <option value="" disabled>
                                Select a date
                            </option>
                            <option value="30days">Next 30 Days</option>
                            <option value="60days">Next 60 Days</option>
                            <option value="90days">Next 90 Days</option>
                        </select>
                        {errors.dueDate && <span>{errors.dueDate}</span>}
                    </StyledDropdown>
                </StyledInputsWrapper>
            </StyledFormHeader>

            <hr />

            <h4>Items</h4>
            <div>
                <div>
                    <StyledDescriptionHeaders>
                        <div>Item</div>
                        <div>Product / Service</div>
                        <div>QTY</div>
                        <div>Price</div>
                        <div>TAX</div>
                        <div>Discount</div>
                        <div>Total</div>
                    </StyledDescriptionHeaders>

                    {items.map((item, index) => (
                        <LineItem
                            index={index}
                            key={item.id}
                            item={item}
                            onUpdate={handleUpdateItem}
                            onDelete={handleDeleteItem}
                            errors={errors}
                        />
                    ))}
                </div>
                <StyledAddButton onClick={handleAddNewItem}>
                    + Add a new item
                </StyledAddButton>
            </div>

            <hr />
            <StyledFormFooter>
                <StyledExtraDetails>
                    <StyledInput>
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            name="notes"
                            id="notes"
                            cols="30"
                            rows="5"
                            onChange={handleChange}
                            placeholder="Enter a description... (Optional)"
                            value={details.notes || ""}
                        />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="bankDetails">
                            Bank account details
                        </label>
                        <textarea
                            name="bankDetails"
                            id="bankDetails"
                            cols="30"
                            rows="5"
                            onChange={handleChange}
                            placeholder="Enter a description... (Optional)"
                            value={details.bankDetails || ""}
                        />
                    </StyledInput>
                </StyledExtraDetails>

                <hr />

                <StyledCostSummaries>
                    <div>
                        <p>
                            Subtotal <span>(USD)</span>
                        </p>
                        <p>
                            Total VAT<span>(USD)</span>
                        </p>
                        <p>
                            Discount <span>(USD)</span>
                        </p>
                        <p>
                            {" "}
                            <b>Total</b>
                        </p>
                    </div>
                    <StyledCostSummaryAmounts>
                        <p>{totals.subtotal}</p>
                        <p>+{totals.tax}</p>
                        <p>-{totals.discount}</p>
                        <p>
                            <b>
                                <span>USD</span> {totals.total}
                            </b>
                        </p>
                    </StyledCostSummaryAmounts>
                </StyledCostSummaries>
                <hr />

                <StyledFormActionButtons>
                    <StyledCancelButton>Cancel</StyledCancelButton>
                    <StyledSubmitButton type="submit">
                        Create invoice
                    </StyledSubmitButton>
                </StyledFormActionButtons>
            </StyledFormFooter>
        </form>
    );
}
