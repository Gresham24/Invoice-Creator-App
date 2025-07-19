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
                <p>{companyDetails.companyName}</p>
                <p>{companyDetails.companyAddress}</p>
                <p>{companyDetails.companyEmail}</p>
            </div>
            <div>
                <h3>Billed To</h3>
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
            </div>
            <StyledInvoiceMetaInfo>
                <div>
                    <h3>Purchase Order</h3>
                    <p>{formEntryDetails.purchaseOrder} </p>
                </div>
                <div>
                    <h3>Issued</h3>
                    <p>{formEntryDetails.issueDate && 
                        (formEntryDetails.issueDate.includes('-') ? 
                            new Date(formEntryDetails.issueDate).toLocaleDateString('en-US', {
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
                            new Date(formEntryDetails.dueDate).toLocaleDateString('en-US', {
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
