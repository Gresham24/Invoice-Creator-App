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
`;

const StyledFormBody = styled.div`
    /*  */
`;

const StyledDescriptionTable = styled.div``;
const StyledDescriptionHeaders = styled.div`
    display: grid;
    grid-template-columns: 0.5fr repeat(7, 1fr);
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    margin-bottom: 2.75rem;
    background-color: #00b7ff;
`;

const StyledDescriptionRow = styled.div`
    display: grid;
    grid-template-columns: 0.5fr repeat(7, 1fr);
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    grid-row-gap: 60px;
    margin-bottom: 3.75rem;
    background-color: orange;
    & .qty,
    .tax,
    .discount {
        width: 3rem;
    }
    & .price {
        width: 7rem;
    }
    & .prodServDescription {
        margin-top: 10px;
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
            <StyledFormBody>
                <StyledDescriptionTable>
                    <StyledDescriptionHeaders>
                        <div>Item</div>
                        <div>Product / Service</div>
                        <div>QTY</div>
                        <div>Price</div>
                        <div>TAX</div>
                        <div>Discount</div>
                        <div>Total</div>
                        {/* <div></div> */}
                    </StyledDescriptionHeaders>

                    <StyledDescriptionRow>
                        <div>1</div>
                        <StyledInput>
                            <label htmlFor="productService">
                                <input name="productService" type="text" />
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
                            <label htmlFor="tax">
                                <input
                                    name="tax"
                                    className="tax"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <StyledInput>
                            <label htmlFor="discount">
                                <input
                                    name="discount"
                                    className="discount"
                                    type="number"
                                />
                            </label>
                        </StyledInput>
                        <div>usd 40,000</div>
                        <button>
                            <img
                                src="./src/assets/mdi-light_delete.svg"
                                alt="delete button"
                            />
                        </button>
                    </StyledDescriptionRow>
                </StyledDescriptionTable>
            </StyledFormBody>
        </form>
    );
}

export default Form;
