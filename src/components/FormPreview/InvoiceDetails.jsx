import { customerDetails } from "../formData";
import {
    StyledInvoiceDetails,
    StyledInvoiceMetaInfo,
} from "../../styles/FormPreview.styles";

function InvoiceDetails({ formEntryDetails, companyDetails }) {
    return (
        <StyledInvoiceDetails>
            <div>
                <h3>From</h3>
                <p>{companyDetails.name}</p>
                {companyDetails.companyName && <p>{companyDetails.companyName}</p>}
                <p>{companyDetails.companyAddress}</p>
                <p>{companyDetails.companyEmail}</p>
            </div>
            <div>
                <h3>Billed To</h3>
                {formEntryDetails.customer === "custom-customer" && formEntryDetails.customerData ? (
                    <div>
                        {formEntryDetails.customerData.companyName && <p><strong>{formEntryDetails.customerData.companyName}</strong></p>}
                        {formEntryDetails.customerData.contactName && <p>{formEntryDetails.customerData.contactName}</p>}
                        <p>{formEntryDetails.customerData.companyAddress}</p>
                        <p>{formEntryDetails.customerData.email}</p>
                        <p>{formEntryDetails.customerData.phoneNumber}</p>
                    </div>
                ) : (
                    <>
                        <p>{formEntryDetails.customer}</p>
                        {formEntryDetails.customer && (
                            <div>
                                <p>
                                    {
                                        customerDetails[formEntryDetails.customer]
                                            ?.address
                                    }
                                </p>
                                <p>
                                    {customerDetails[formEntryDetails.customer]?.phone}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
            <StyledInvoiceMetaInfo>
                {formEntryDetails.purchaseOrder && formEntryDetails.purchaseOrder.trim() !== '' && (
                    <div>
                        <h3>Purchase Order</h3>
                        <p>{formEntryDetails.purchaseOrder}</p>
                    </div>
                )}
                <div>
                    <h3>Issued</h3>
                    <p>{formEntryDetails.issueDate && 
                        (formEntryDetails.issueDate.includes('-') ? 
                            new Date(formEntryDetails.issueDate).toLocaleDateString('en-UK', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            }) : 
                            formEntryDetails.issueDate)
                    } </p>
                </div>
                <div>
                    <h3>Due</h3>
                    <p>{formEntryDetails.dueDate && 
                        (formEntryDetails.dueDate.includes('-') ? 
                            new Date(formEntryDetails.dueDate).toLocaleDateString('en-UK', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            }) : 
                            formEntryDetails.dueDate)
                    }</p>
                </div>
            </StyledInvoiceMetaInfo>
        </StyledInvoiceDetails>
    );
}

export default InvoiceDetails;
