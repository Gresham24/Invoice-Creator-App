import { useContext } from "react";
import styled from "styled-components";
import { FormDataContext } from "./Form";
import { companyDetails, customerDetails } from "./FormData";

const StyledContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px 32px;
    border-radius: 15px;
    background: #f8f9fa;
    box-shadow: 0px 15px 48px 0px rgba(46, 47, 58, 0.08);
`;

const StyledPage = styled.div``;

const StyledHeader = styled.div`
    padding: 24px 40px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
        display: flex;
        flex-direction: column;
        text-align: end;
    }
    & h1 {
        font-weight: 500;
        font-size: 32px;
    }
    & p {
        color: #858585;
    }
`;

const StyledInvoiceDetails = styled.div`
    padding: 24px 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    & .invoiceDates {
        display: flex;
        flex-direction: column;
        text-align: end;
        justify-content: space-between;
    }
`;

const StyldDescriptionHeaders = styled.div`
    background-color: #f6f6f6;

    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & .flex-right {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
`;

export default function FormPrint() {
    const { formValues } = useContext(FormDataContext);

    // Storing saved invoice details
    const formEntryDetails = {
        invoiceNumber: formValues.details.invoiceNumber,
        purchaseOrder: formValues.details.purchaseOrder,
        customer: formValues.details.customer,
        issueDate: formValues.details.issueDate,
        dueDate: formValues.details.dueDate,
        note: formValues.details.note,
        bankDetails: formValues.details.bankDetails,
    };

    // Storing saved invoice line items
    const formLineItems = {};
    console.log(formValues);

    return (
        <StyledContainer>
            <StyledPage>
                <StyledHeader>
                    <img src={companyDetails.companyLogo} alt="logo" />
                    <div className="title">
                        <h1>INVOICE</h1>
                        <p>{`NO. ${formEntryDetails.invoiceNumber}`}</p>
                        {/* <p>{`NO. ${formEntryDetails.purchaseOrder}`}</p> */}
                    </div>
                </StyledHeader>
                <StyledInvoiceDetails>
                    <div className="companyDetails">
                        <h3>From</h3>
                        <p>{companyDetails.name}</p>
                        <p>{companyDetails.companyName}</p>
                        {/* <p>{companyDetails.companyAddress1}</p> */}
                        <p>{companyDetails.companyAddress2}</p>
                        <p>{companyDetails.companyEmail}</p>
                    </div>
                    <div className="customerDetails">
                        <h3>From</h3>
                        <p>{formEntryDetails.customer}</p>
                        {formEntryDetails.customer && (
                            <div className="customerDetails">
                                <p>
                                    {
                                        customerDetails[
                                            formEntryDetails.customer
                                        ]?.address
                                    }
                                </p>
                                <p>
                                    {
                                        customerDetails[
                                            formEntryDetails.customer
                                        ]?.phone
                                    }
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="invoiceDates">
                        <div className="issued">
                            <h3>Issued</h3>
                            <p>{formEntryDetails.issueDate} </p>
                        </div>
                        <div className="due">
                            <h3>Due</h3>
                            <p>{formEntryDetails.dueDate} </p>
                        </div>
                    </div>
                </StyledInvoiceDetails>
                <StyldDescriptionHeaders>
                    <div>Item</div>
                    <div className="flex-right">

                    <div>Qty</div>
                    <div>Price</div>
                    <div>Total</div>
                    </div>
                </StyldDescriptionHeaders>
                {/* <p>Details: {JSON.stringify(formValues.details)}</p> */}
                {/* <p>Items: {JSON.stringify(formValues.items)}</p> */}
            </StyledPage>
        </StyledContainer>
    );
}
