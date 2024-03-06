import styled from "styled-components";
import { useId, useState } from "react";

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
    & .prodServDescription {
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

// Main funcition
function Form() {
    /*=========== HOOKS===========*/
    const [selectedCustomer, setSelectedCustomer] = useState("");
    const id = useId();

    // Function to handle selection change
    const handleSelectionChange = (event) => {
        setSelectedCustomer(event.target.value);
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
        <form>
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
                        <label htmlFor={id + "-invoiceNumber"}>
                            Invoice number
                        </label>
                        <input type="text" id={id + "-invoiceNumber"} />
                    </StyledInput>
                    <StyledInput>
                        <label htmlFor={id + "-purchaseOrder"}>
                            Purchase order
                        </label>
                        <input type="text" id={id + "-purchaseOrder"} />
                    </StyledInput>
                </div>

                <StyledDropdown>
                    <label htmlFor={id + "-customer"}>Customer</label>
                    <select
                        name="customer"
                        id={id + "-customer"}
                        onChange={handleSelectionChange}
                    >
                        <option></option>
                        <option value="Emirates">Emirates Airlines</option>
                        <option value="Mandu">Mandu</option>
                        <option value="Amasuku">Amasuku</option>
                    </select>
                    {selectedCustomer && (
                        <div className="customerDetails">
                            <p>{customerDetails[selectedCustomer]?.address}</p>
                            <p>{customerDetails[selectedCustomer]?.phone}</p>
                        </div>
                    )}
                </StyledDropdown>

                <div className="invoiceDates">
                    <StyledInput>
                        <label htmlFor={id + "-issueDate"}>Issue date</label>
                        <input type="date" id={id + "-issueDate"} />
                    </StyledInput>
                    <StyledDropdown>
                        <label htmlFor={id + "-dueDate"}>Due date</label>
                        <select name="dueDate" id={id + "-dueDate"}>
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

                    <StyledDescriptionRow>
                        <div>1</div>
                        <StyledInput>
                            <label htmlFor="productService">
                                <input
                                    name="productService"
                                    type="text"
                                    className="productService"
                                />
                            </label>
                            <textarea
                                name="prodServDescription"
                                className="prodServDescription"
                            ></textarea>
                        </StyledInput>
                        <StyledInput>
                            <label htmlFor="qty">
                                <input
                                    name="qty"
                                    className="qty"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <StyledInput>
                            <label htmlFor="price">
                                <input
                                    name="price"
                                    className="price"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <StyledInput>
                            <label htmlFor="taxPercentage">
                                <input
                                    name="taxPercentage"
                                    className="taxPercentage"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <StyledInput>
                            <label htmlFor="discountPercentage">
                                <input
                                    name="discountPercentage"
                                    className="discountPercentage"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <div>usd 40,000</div>
                        <StyledDeleteButton>
                            <img
                                src="./src/assets/mdi-light_delete.svg"
                                alt="delete button"
                            />
                        </StyledDeleteButton>
                    </StyledDescriptionRow>
                </div>
                <StyledAddButton>+ Add a new item</StyledAddButton>
            </div>

            <hr />
            <StyledFormFooter>
                <div className="costSummaries">
                    <div>
                        <p>
                            Subtotal <span>(USD)</span>
                        </p>
                        <p>
                            Total <span>(USD)</span>
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
                    <button id={id + "cancelButton"} className="cancelButton">
                        Cancel
                    </button>
                    <button
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
