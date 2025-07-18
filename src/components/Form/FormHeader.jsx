import { useField, useFormikContext } from "formik";
import { customerDetails } from "../formData";
import {
    StyledCompanyDetails,
    StyledFormHeader,
    StyledInput,
    StyledDropdown,
    StyledInputsWrapper,
    StyledCustomerDetails,
    // New mobile section styles
    StyledMobileSection,
    StyledMobileSectionInner,
    StyledMobileSectionTitle,
    StyledMobileSectionIcon,
    StyledMobileFormGroup,
    StyledMobileFormLabel,
    StyledMobileOptionalBadge,
    StyledMobileFormInput,
    StyledMobileFormSelect,
    StyledMobileInputRow,
    StyledMobileLogoUpload,
    StyledMobileLogoIcon,
    StyledMobileLogoText,
    StyledMobileLogoSubtext,
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
        <>
            {/* Desktop Layout */}
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
            
            {/* Mobile Layout with Section Design */}
            <StyledMobileSection>
                {/* Company Information Section */}
                <StyledMobileSectionInner className="company-section">
                    <StyledMobileSectionTitle>
                        <StyledMobileSectionIcon>🏢</StyledMobileSectionIcon>
                        Company Information
                    </StyledMobileSectionTitle>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>Full Name</StyledMobileFormLabel>
                        <StyledMobileFormInput
                            {...nameField}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                        {errors.details?.name && touched.details?.name && (
                            <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                {errors.details.name}
                            </span>
                        )}
                    </StyledMobileFormGroup>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>Company Name</StyledMobileFormLabel>
                        <StyledMobileFormInput
                            {...companyNameField}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                            required
                        />
                        {errors.details?.companyName && touched.details?.companyName && (
                            <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                {errors.details.companyName}
                            </span>
                        )}
                    </StyledMobileFormGroup>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>
                            Company Logo
                            <StyledMobileOptionalBadge>Optional</StyledMobileOptionalBadge>
                        </StyledMobileFormLabel>
                        <StyledMobileLogoUpload 
                            className={values.details.companyLogo ? 'has-file' : ''}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {values.details.companyLogo ? (
                                <>
                                    <StyledMobileLogoIcon>✓</StyledMobileLogoIcon>
                                    <StyledMobileLogoText>Logo uploaded</StyledMobileLogoText>
                                    <StyledMobileLogoSubtext>Click to change</StyledMobileLogoSubtext>
                                </>
                            ) : (
                                <>
                                    <StyledMobileLogoIcon>📷</StyledMobileLogoIcon>
                                    <StyledMobileLogoText>Upload Logo</StyledMobileLogoText>
                                    <StyledMobileLogoSubtext>PNG, JPG up to 5MB</StyledMobileLogoSubtext>
                                </>
                            )}
                        </StyledMobileLogoUpload>
                        <input
                            id="companyLogo"
                            name="companyLogo"
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleLogoChange}
                            style={{display: 'none'}}
                        />
                    </StyledMobileFormGroup>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>Company Address</StyledMobileFormLabel>
                        <StyledMobileFormInput
                            {...companyAddressField}
                            onChange={handleChange}
                            placeholder="Enter your company address"
                            required
                        />
                        {errors.details?.companyAddress && touched.details?.companyAddress && (
                            <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                {errors.details.companyAddress}
                            </span>
                        )}
                    </StyledMobileFormGroup>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>Company Email</StyledMobileFormLabel>
                        <StyledMobileFormInput
                            {...companyEmailField}
                            onChange={handleChange}
                            placeholder="Enter your company email"
                            required
                            type="email"
                        />
                        {errors.details?.companyEmail && touched.details?.companyEmail && (
                            <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                {errors.details.companyEmail}
                            </span>
                        )}
                    </StyledMobileFormGroup>
                </StyledMobileSectionInner>
                
                {/* Invoice Details Section */}
                <StyledMobileSectionInner className="invoice-section">
                    <StyledMobileSectionTitle>
                        <StyledMobileSectionIcon>📄</StyledMobileSectionIcon>
                        Invoice Details
                    </StyledMobileSectionTitle>
                    
                    <StyledMobileInputRow>
                        <StyledMobileFormGroup>
                            <StyledMobileFormLabel>Invoice Number</StyledMobileFormLabel>
                            <StyledMobileFormInput
                                {...invoiceNumberField}
                                onChange={handleChange}
                                placeholder="INV-001"
                            />
                            {errors.details?.invoiceNumber && touched.details?.invoiceNumber && (
                                <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                    {errors.details.invoiceNumber}
                                </span>
                            )}
                        </StyledMobileFormGroup>
                        
                        <StyledMobileFormGroup>
                            <StyledMobileFormLabel>
                                Purchase Order
                                <StyledMobileOptionalBadge>Optional</StyledMobileOptionalBadge>
                            </StyledMobileFormLabel>
                            <StyledMobileFormInput
                                {...purchaseOrderField}
                                onChange={handleChange}
                                placeholder="PO-001"
                            />
                            {errors.details?.purchaseOrder && touched.details?.purchaseOrder && (
                                <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                    {errors.details.purchaseOrder}
                                </span>
                            )}
                        </StyledMobileFormGroup>
                    </StyledMobileInputRow>
                    
                    <StyledMobileFormGroup>
                        <StyledMobileFormLabel>Customer</StyledMobileFormLabel>
                        <StyledMobileFormSelect
                            {...customerField}
                            onChange={handleChange}
                            value={values.details.customer || ""}
                        >
                            <option value="" disabled>
                                Select a customer
                            </option>
                            <option value="Emirates">Emirates Airlines</option>
                            <option value="Mandu">Mandu</option>
                            <option value="Amasuku">Amasuku</option>
                            <option value="add-new">+ Add New Customer</option>
                        </StyledMobileFormSelect>
                        {errors.details?.customer && touched.details?.customer && (
                            <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                {errors.details.customer}
                            </span>
                        )}
                        {values.details.customer && values.details.customer !== 'add-new' && (
                            <StyledCustomerDetails>
                                <p>{customerDetails[values.details.customer]?.address}</p>
                                <p>{customerDetails[values.details.customer]?.phone}</p>
                            </StyledCustomerDetails>
                        )}
                    </StyledMobileFormGroup>
                    
                    <StyledMobileInputRow>
                        <StyledMobileFormGroup>
                            <StyledMobileFormLabel>Issue Date</StyledMobileFormLabel>
                            <StyledMobileFormInput
                                {...issueDateField}
                                onChange={handleChange}
                                type="date"
                            />
                            {errors.details?.issueDate && touched.details?.issueDate && (
                                <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                    {errors.details.issueDate}
                                </span>
                            )}
                        </StyledMobileFormGroup>
                        
                        <StyledMobileFormGroup>
                            <StyledMobileFormLabel>Due Date</StyledMobileFormLabel>
                            <StyledMobileFormSelect
                                {...dueDateField}
                                onChange={handleChange}
                                value={values.details.dueDate || ""}
                            >
                                <option value="" disabled>
                                    Select due date
                                </option>
                                <option value="30days">30 days from issue</option>
                                <option value="60days">60 days from issue</option>
                                <option value="90days">90 days from issue</option>
                            </StyledMobileFormSelect>
                            {errors.details?.dueDate && touched.details?.dueDate && (
                                <span style={{color: '#ff4444', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                    {errors.details.dueDate}
                                </span>
                            )}
                        </StyledMobileFormGroup>
                    </StyledMobileInputRow>
                </StyledMobileSectionInner>
            </StyledMobileSection>
        </>
    );
};

export default FormHeader;
