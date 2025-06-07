import { useField, useFormikContext } from "formik";
import { companyDetails, customerDetails } from "../formData";
import {
    StyledCompanyDetails,
    StyledFormHeader,
    StyledInput,
    StyledDropdown,
    StyledInputsWrapper,
    StyledCustomerDetails,
} from "../../styles/Form.styles";

const FormHeader = () => {
    const { values, errors, touched, handleChange } = useFormikContext();
    const [invoiceNumberField] = useField("details.invoiceNumber");
    const [purchaseOrderField] = useField("details.purchaseOrder");
    const [customerField] = useField("details.customer");
    const [issueDateField] = useField("details.issueDate");
    const [dueDateField] = useField("details.dueDate");

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
                        {...invoiceNumberField}
                        onChange={handleChange}
                        placeholder="Enter invoice number..."
                    />
                    {errors.details?.invoiceNumber &&
                        touched.details?.invoiceNumber && (
                            <span>{errors.details.invoiceNumber}</span>
                        )}
                </StyledInput>
                <StyledInput>
                    <label htmlFor="purchaseOrder">Purchase order</label>
                    <input
                        {...purchaseOrderField}
                        onChange={handleChange}
                        placeholder="Enter purchase order number..."
                    />
                    {errors.details?.purchaseOrder &&
                        touched.details?.purchaseOrder && (
                            <span>{errors.details.purchaseOrder}</span>
                        )}
                </StyledInput>
            </StyledInputsWrapper>

            <StyledDropdown>
                <label htmlFor="customerName">Customer</label>
                <select
                    {...customerField}
                    id="customerName"
                    onChange={handleChange}
                    value={values.details.customer || ""}
                >
                    <option value="" disabled>
                        Select a customer
                    </option>
                    <option value="Emirates">Emirates Airlines</option>
                    <option value="Mandu">Mandu</option>
                    <option value="Amasuku">Amasuku</option>
                </select>
                {errors.details?.customer && touched.details?.customer && (
                    <span>{errors.details.customer}</span>
                )}
                {values.details.customer && (
                    <StyledCustomerDetails>
                        <p>
                            {customerDetails[values.details.customer]?.address}
                        </p>
                        <p>{customerDetails[values.details.customer]?.phone}</p>
                    </StyledCustomerDetails>
                )}
            </StyledDropdown>

            <StyledInputsWrapper>
                <StyledInput>
                    <label htmlFor="issueDate">Issue date</label>
                    <input
                        {...issueDateField}
                        onChange={handleChange}
                        type="date"
                    />
                    {errors.details?.issueDate &&
                        touched.details?.issueDate && (
                            <span>{errors.details.issueDate}</span>
                        )}
                </StyledInput>
                <StyledDropdown>
                    <label htmlFor="dueDate">Due date</label>
                    <select
                        {...dueDateField}
                        onChange={handleChange}
                        value={values.details.dueDate || ""}
                    >
                        <option value="" disabled>
                            Select a date
                        </option>
                        <option value="30days">Next 30 Days</option>
                        <option value="60days">Next 60 Days</option>
                        <option value="90days">Next 90 Days</option>
                    </select>
                    {errors.details?.dueDate && touched.details?.dueDate && (
                        <span>{errors.details.dueDate}</span>
                    )}
                </StyledDropdown>
            </StyledInputsWrapper>
        </StyledFormHeader>
    );
};

export default FormHeader;
