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
        /* margin-left: 10px; */
    }
    & label {
        display: flex;
        flex-direction: column;
    }
`;
const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & .customerDetails {
        color: #858585;
        font-size: 0.875rem;
    } // There's an extra unnecessary line added here. It's important to format code consistently. I use prettier to help fix things like this.

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
        width: 4rem;
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
    color: #3dadaf; // In larger projects its best practice to store colors as constants in a file so that you reuse them for consistency.
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

// Wow 175 lines of styling! I would encourage you to break this massive file up into separate files.

//**========== COMPONENTS=========== **/

const LineItem = ({ item, onUpdate, onDelete, index, lineItemTotal, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(item.id, name, value);
    };

    const subtotal = item.qty * item.price;
    const subTotalWithTax = subtotal * (1 + item.taxPercentage / 100);
    const discountAmount = subTotalWithTax * (item.discountPercentage / 100);
    // You shouldn't reassign lineItemTotal like this. The destructing of props creates constants. 
    // If ESLint is setup correctly it should warn you.
    // The reason for this rule is because it creates unexpected behaviour that can be hard to debug.

    // e.g. Imagine you saw a grey cat spill a glass of water but without you knowing it shape shifted 
    // and became an orange cat. You'd look for a grey cat and wouldn't think to accuse the orange cat. 
    // A grey cat should remain a grey cat. Once a variable is declared it should remain that value. 
    // For the same reason I would avoid using `let` and instead assign a new `const`. Not always possible
    // but most of the time it is

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
                    {errors[`productService${index}`] && (
                        <span>{errors[`productService${index}`]}</span>
                    )}
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
                    {errors[`qty${index}`] && (
                        <span>{errors[`qty${index}`]}</span>
                    )}
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
                    {/* This is same thing is repeated multiple times. If you repeat something more 
                    than twice its worth abstracting it into its own component or function */}
                    {errors[`price${index}`] && (
                        <span>{errors[`price${index}`]}</span>
                    )}
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

// This should be in a separate file. Also remove the useless inline comments. 
// They're a clear indicator that you used AI to generate the code. 
// An inline comment should always be a last resort to explain code. 
// Rather rename the variables, break the code up into pieces or write unit tests that explain it.

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
    // There are some libraries e.g. formik that make implementing validation much cleaner. They handle all the heavy lifting.
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
            currentErrors.invoiceNumber = "Required";
        if (!details.purchaseOrder)
            currentErrors.purchaseOrder = "Required";
        if (!details.customer) currentErrors.customer = "Required";
        if (!details.issueDate)
            currentErrors.issueDate = "Required";
        if (!details.dueDate)
            currentErrors.dueDate = "Required";

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
    // This should be in a separate file. Theres something called the Separation of Concerns and its cousin 
    // Single responsibility principle. I would strongly encourage that to discuss them with ChatGPT until 
    // you fully understand them. Or as my math teach would say: "If I was to wake you up in the middle of the 
    // and ask you what they were you'd be able to answer without hesitation". Lol!
    // But seriously understanding these concepts are or to being a great developer.

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
// Jesus take the wheel 😅 700 line! This needs to be broken up into smaller components.
// As a rough guide no file should be longer then 120 lines but try aim for less.
// If a styled component is used by 2 components then it should be in a separate file so that 
// each component can access it. Shared components I usually store like this: src/shared/components/some-component-name-here
// I also sometimes have src/page/components for things that aren't common. 
// But different frameworks have differing standards for this e.g. App Routing in Next.js 