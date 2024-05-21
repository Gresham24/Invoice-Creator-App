import styled from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";
import { companyDetails, customerDetails } from "./FormData";
import { useNavigate } from "react-router-dom";

export const FormDataContext = createContext();

/*=========== STYLED COMPONENTS ===========*/

const StyledCompanyDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;
const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    & span {
        color: red;
        font-size: 0.8rem;
        margin-left: 10px;
    }
`;
const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & .customerDetails {
        color: #858585;
        font-size: 0.875rem;
    }

    & span {
        color: red;
        font-size: 0.8rem;
        margin-left: 10px;
    }
`;
const StyledFormHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    & .invoiceDates,
    .inputsWrapper {
        display: flex;
        gap: 2rem;
    }

    & input,
    select {
        width: 250px;
        height: 40px;
        padding: 10px;
    }
`;

const StyledDescriptionHeaders = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    margin-bottom: 2.75rem;
`;

const StyledDescriptionRow = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    grid-row-gap: 60px;
    margin-bottom: 3.75rem;
    & .qty,
    .taxPercentage,
    .discountPercentage {
        width: 3rem;
    }
    & .price {
        width: 5rem;
    }
    & .productService {
        width: 200px;
    }
    & .description {
        margin-top: 10px;
        resize: none;
        width: 200px;
    }
`;

const StyledDeleteButton = styled.button`
    height: 1.5rem;
    width: 1.5rem;
    background: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
    & img:active {
        opacity: 0.7;
    }
`;

const StyledAddButton = styled.button`
    background: none;
    border: none;
    color: #3dadaf;
    font-weight: 500;
    &:hover {
        cursor: pointer;
    }
    &:active {
        opacity: 0.7;
    }
`;

const StyledFormFooter = styled.div`
    & .costSummaries {
        display: flex;
    }
    & .costSummaryAmounts {
        text-align: right;
    }
    & div:first-child {
        margin-right: 30px;
    }
    & .costSummaries div {
        display: flex;
        flex-direction: column;
    }
    & span {
        font-size: 0.7rem;
    }
    & .extraDetails {
        display: flex;
    }
    & .extraDetails textarea {
        margin-top: 5px;
        resize: none;
    }
`;

const StyledFormActionButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 32px;
    & .cancelButton {
        border-radius: 8px;
        border: 1px solid #e4e0dd;
        background: #f8f9fa;
        padding: 8px 32px;
    }
    & .cancelButton:active {
        background: #f0f2f3;
    }
    & .createInvoiceButton {
        border: none;
        border-radius: 8px;
        background: #3dadaf;
        padding: 8px 32px;
        color: white;
    }
    & .createInvoiceButton:active {
        opacity: 0.8;
    }
`;

//**========== COMPONENTS=========== **/

const LineItem = ({ item, onUpdate, onDelete, index, lineItemTotal }) => {
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
                    <input
                        name="productService"
                        type="text"
                        className="productService"
                        value={item.productService || ""}
                        onChange={handleChange}
                        placeholder="Enter a product"
                    />
                </label>
                <label htmlFor="description">
                    <textarea
                        name="description"
                        type="text"
                        rows="3"
                        className="description"
                        value={item.description || ""}
                        onChange={handleChange}
                        placeholder="Enter a description... (Optional)"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="qty">
                    <input
                        name="qty"
                        type="number"
                        className="qty"
                        value={item.qty || ""}
                        onChange={handleChange}
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="price">
                    <input
                        name="price"
                        type="number"
                        value={item.price || ""}
                        className="price"
                        onChange={handleChange}
                        placeholder="0.00"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="taxPercentage">
                    <input
                        name="taxPercentage"
                        type="number"
                        value={item.taxPercentage || ""}
                        className="taxPercentage"
                        onChange={handleChange}
                        placeholder="% 0"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="discountPercentage">
                    <input
                        name="discountPercentage"
                        type="number"
                        value={item.discountPercentage || ""}
                        className="discountPercentage"
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

        if (!details.invoiceNumber)
            currentErrors.invoiceNumber = "Invoice number is required";
        if (!details.purchaseOrder)
            currentErrors.purchaseOrder = "Purchase order is required";
        if (!details.customer) currentErrors.customer = "Customer is required";
        if (!details.issueDate)
            currentErrors.issueDate = "Issue date is required";
        if (!details.dueDate)
            currentErrors.dueDate = "Due date is required";

        items.forEach((item, index) => {
            if (!item.productService)
                currentErrors[`productService${index}`] =
                    "Product/service is required";
            if (!item.qty || item.qty <= 0)
                currentErrors[`qty${index}`] =
                    "Quantity must be greater than 0";
            if (!item.price || item.price <= 0)
                currentErrors[`price${index}`] = "Price must be greater than 0";
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
    const dueDate = calculateDueDate(details.issueDate, details.dueDate);
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

                <div className="inputsWrapper">
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
                </div>

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
                        <div className="customerDetails">
                            <p>{customerDetails[details.customer]?.address}</p>
                            <p>{customerDetails[details.customer]?.phone}</p>
                        </div>
                    )}
                </StyledDropdown>

                <div className="invoiceDates">
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
                </div>
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
                        />
                    ))}
                </div>
                <StyledAddButton onClick={handleAddNewItem}>
                    + Add a new item
                </StyledAddButton>
            </div>

            <hr />
            <StyledFormFooter>
                <div className="extraDetails">
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
                </div>

                <hr />

                <div className="costSummaries">
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
                    <div className="costSummaryAmounts">
                        <p className="subtotalAmount">{totals.subtotal}</p>
                        <p className="vatAmount">+{totals.tax}</p>
                        <p className="discountAmount">-{totals.discount}</p>
                        <p className="totalAmount">
                            <b>
                                <span>USD</span> {totals.total}
                            </b>
                        </p>
                    </div>
                </div>
                <hr />

                <StyledFormActionButtons>
                    <button className="cancelButton">Cancel</button>
                    <button type="submit" className="createInvoiceButton">
                        Create invoice
                    </button>
                </StyledFormActionButtons>
            </StyledFormFooter>
        </form>
    );
}
