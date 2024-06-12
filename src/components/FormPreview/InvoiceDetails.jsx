import { companyDetails, customerDetails } from "../FormData";
import {
    StyledInvoiceDetails,
    StyledInvoiceDates,
} from "../../styles/FormPreview.styles";

function InvoiceDetails({ formEntryDetails }) {
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
            <StyledInvoiceDates>
                <div>
                    <h3>Issued</h3>
                    <p>{formEntryDetails.issueDate} </p>
                </div>
                <div>
                    <h3>Due</h3>
                    <p>{formEntryDetails.dueDate} </p>
                </div>
            </StyledInvoiceDates>
        </StyledInvoiceDetails>
    );
}

export default InvoiceDetails;
