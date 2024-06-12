import React from "react";
import { companyDetails, customerDetails } from "../formData";
import {
    StyledCompanyDetails,
    StyledFormHeader,
    StyledInput,
    StyledDropdown,
    StyledInputsWrapper,
    StyledCustomerDetails,
} from "../../styles/Form.styles";

const FormHeader = ({ details, errors, handleChange }) => {
    return (
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
    );
};

export default FormHeader;
