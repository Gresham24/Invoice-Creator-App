import { useField, useFormikContext } from "formik";
import { customerDetails } from "../formData";
import {
    StyledCompanyDetails,
    StyledFormHeader,
    StyledInput,
    StyledDropdown,
    StyledInputsWrapper,
    StyledCustomerDetails,
} from "../../styles/Form.styles";
import { useRef } from "react";

const FormHeader = () => {
    const { values, errors, touched, handleChange, setFieldValue } = useFormikContext();
    const [nameField] = useField("details.name");
    const [companyNameField] = useField("details.companyName");
    const [companyAddressField] = useField("details.companyAddress");
    const [companyEmailField] = useField("details.companyEmail");
    const [invoiceNumberField] = useField("details.invoiceNumber");
    const [purchaseOrderField] = useField("details.purchaseOrder");
    const [customerField] = useField("details.customer");
    const [issueDateField] = useField("details.issueDate");
    const [dueDateField] = useField("details.dueDate");
    const fileInputRef = useRef();

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new window.FileReader();
            reader.onloadend = () => {
                setFieldValue("details.companyLogo", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <StyledFormHeader>
            <StyledCompanyDetails>
                <StyledInput>
                    <label htmlFor="name">Full Name</label>
                    <input
                        {...nameField}
                        onChange={handleChange}
                        placeholder="Enter your full name..."
                        required
                    />
                    {errors.details?.name && touched.details?.name && (
                        <span>{errors.details.name}</span>
                    )}
                </StyledInput>
                <StyledInput>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        {...companyNameField}
                        onChange={handleChange}
                        placeholder="Enter your company name..."
                        required
                    />
                    {errors.details?.companyName && touched.details?.companyName && (
                        <span>{errors.details.companyName}</span>
                    )}
                </StyledInput>
                <StyledInput>
                    <label htmlFor="companyLogo">Company Logo (optional)</label>
                    <input
                        id="companyLogo"
                        name="companyLogo"
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleLogoChange}
                    />
                    {values.details.companyLogo && (
                        <div style={{ position: 'relative', width: 'fit-content', marginTop: '12px' }}>
                            <img
                                src={values.details.companyLogo}
                                alt="Company Logo Preview"
                                style={{
                                    maxWidth: 80,
                                    maxHeight: 80,
                                    display: 'block',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setFieldValue("details.companyLogo", "");
                                    if (fileInputRef.current) {
                                        fileInputRef.current.value = "";
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    top: -8,
                                    right: -10,
                                    background: 'white',
                                    color: 'red',
                                    border: '1px solid #999',
                                    borderRadius: '50%',
                                    width: 20,
                                    height: 20,
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    padding: 0,
                                    lineHeight: 1
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </StyledInput>
                <StyledInput>
                    <label htmlFor="companyAddress">Company Address</label>
                    <input
                        {...companyAddressField}
                        onChange={handleChange}
                        placeholder="Enter your company address..."
                        required
                    />
                    {errors.details?.companyAddress && touched.details?.companyAddress && (
                        <span>{errors.details.companyAddress}</span>
                    )}
                </StyledInput>
                <StyledInput>
                    <label htmlFor="companyEmail">Company Email</label>
                    <input
                        {...companyEmailField}
                        onChange={handleChange}
                        placeholder="Enter your company email..."
                        required
                        type="email"
                    />
                    {errors.details?.companyEmail && touched.details?.companyEmail && (
                        <span>{errors.details.companyEmail}</span>
                    )}
                </StyledInput>
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
