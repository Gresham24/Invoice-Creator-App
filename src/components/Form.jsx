import styled from "styled-components";
import { useState } from "react";

/*
Notes:
- Made it one big form and didn't split into separate file components so the submit needs to handle everything

TO DO:

- calculation for total amount
- calculaction for cost summaries
- modify input properties/rules 
- Research on suitable PDF generators


- add error handling of the invoice

*/

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
`;
const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    & .customerDetails {
        color: #858585;
        font-size: 0.875rem;
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

const LineItem = ({ item, onUpdate, onDelete, index }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(item.id, name, value);
    };

    const subtotal = item.qty * item.price;
    const subTotalWithTax = subtotal * (1 + item.taxPercentage / 100);
    const discountAmount = subTotalWithTax * (item.discountPercentage / 100);
    const lineItemTotal = parseFloat((subTotalWithTax - discountAmount).toFixed(
        2)
    );


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
                    />
                </label>
                <label htmlFor="description">
                    <textarea
                        name="description"
                        type="text"
                        className="description"
                        value={item.description || ""}
                        onChange={handleChange}
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
                    />
                </label>
            </StyledInput>
            <div id={"itemTotal" + index}>{lineItemTotal}</div>
            {index > 0 && (
                <StyledDeleteButton onClick={() => onDelete(item.id)}>
                    <img
                        src="./src/assets/mdi-light_delete.svg"
                        alt="delete button"
                    />
                </StyledDeleteButton>
            )}
        </StyledDescriptionRow>
    );
};

// Main funcition
function Form() {
    /*=========== HOOKS===========*/

    // form line items
    const [items, setItems] = useState([
        {
            id: 1,
            productService: "",
            description: "",
            qty: "",
            price: "",
            taxPercentage: "",
            discountPercentage: "",
        },
    ]);
    const [nextItemId, setNextItemId] = useState(2);
    // form header details
    const [details, setDetails] = useState({
        invoiceNumber: "",
        purchaseOrder: "",
        customer: "",
        issueDate: "",
        dueDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        console.log(items);
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
                qty: 0,
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
    };

    // Function to delete a line item
    const handleDeleteItem = (itemId) => {
        setItems((oldItems) => oldItems.filter((item) => item.id !== itemId));
    };

    // Object storing customer details
    const customerDetails = {
        Emirates: {
            address: "Garhoud Area, Dubai - United Arab Emirates",
            phone: "+971600555555",
        },
        Mandu: {
            address: "Lunkuswe, Lusaka - Zambia",
            phone: "+26601114444",
        },
        Amasuku: {
            address: "Tryall Road, Milnerton Rural - South Africa  ",
            phone: "+27769998888",
        },
    };

    // Form display
    return (
        <form onSubmit={handleSubmit}>
            <StyledFormHeader>
                <StyledCompanyDetails>
                    <div>
                        <h3 id="name">Masharty Tembo</h3>
                        <p id="companyName">Web Masters Limited</p>
                    </div>
                    <img
                        src="src/assets/webcoin_web logo.png"
                        id="companyLogo"
                        alt="logo"
                    />
                    <p id="companyAddress">
                        1234, Al Malqa <br /> Riyadh 12345, Saudi arabia
                    </p>
                    <p id="companyEmail">mohamed.f.ghulam@gmail.com</p>
                </StyledCompanyDetails>

                <div className="inputsWrapper">
                    <StyledInput>
                        <label htmlFor="invoiceNumber">Invoice number</label>
                        <input
                            onChange={handleChange}
                            name="invoiceNumber"
                            type="text"
                            id="invoiceNumber"
                        />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor="purchaseOrder">Purchase order</label>
                        <input
                            onChange={handleChange}
                            name="purchaseOrder"
                            type="text"
                            id="purchaseOrder"
                        />
                    </StyledInput>
                </div>

                <StyledDropdown>
                    <label htmlFor="customerName">Customer</label>
                    <select
                        name="customer"
                        id="customerName"
                        // Modify customer dropdown to be added to handleChange() function
                        onChange={handleChange}
                    >
                        <option></option>
                        <option value="Emirates">Emirates Airlines</option>
                        <option value="Mandu">Mandu</option>
                        <option value="Amasuku">Amasuku</option>
                    </select>
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
                        />
                    </StyledInput>
                    <StyledDropdown>
                        <label htmlFor="dueDate">Due date</label>
                        <select
                            onChange={handleChange}
                            name="dueDate"
                            id="dueDate"
                        >
                            <option></option>
                            <option value="30days">Next 30 Days</option>
                            <option value="60days">Next 60 Days</option>
                            <option value="90days">Next 90 Days</option>
                        </select>
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
                    <div>
                        <p className="subtotalAmount">500.00</p>
                        <p className="vatAmount">+75.00</p>
                        <p className="discountAmount">-25.00</p>
                        <p className="totalAmount">
                            <b>
                                <span>USD</span> 550.00
                            </b>
                        </p>
                    </div>
                </div>
                <hr />

                <StyledFormActionButtons>
                    <button id="cancelButton" className="cancelButton">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        id="createInvoiceButton"
                        className="createInvoiceButton"
                    >
                        Create invoice
                    </button>
                </StyledFormActionButtons>
            </StyledFormFooter>
        </form>
    );
}

export default Form;
