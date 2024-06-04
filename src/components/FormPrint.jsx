import { useContext } from "react";
import styled from "styled-components";
import { FormDataContext } from "./Form";
import { companyDetails, customerDetails } from "./FormData";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";

const StyledContainer = styled.div`
    margin: 50px auto;
    padding: 20px 32px;
    border-radius: 15px;
    box-shadow: 0px 15px 48px 0px rgba(46, 47, 58, 0.08);
    background-color: #f8f9fa;
    max-width: 980px;
`;

const StyledHeader = styled.div`
    padding: 24px 40px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
        font-weight: 500;
        font-size: 32px;
    }
    & p {
        color: #858585;
    }
`;

const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
`;

const StyledInvoiceDetails = styled.div`
    padding: 24px 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;

const StyledInvoiceDates = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    justify-content: space-between;
`;

const StyledDescriptionHeaders = styled.div`
    background-color: #ededed;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledFlexRight = styled.div`
    width: 50%;
    display: flex;
    text-align: right;
    justify-content: space-between;
    & div {
        width: 33.33%;
        text-align: right;
    }
    & p {
        width: 33.33%;
        margin: 0;
    }
`;

const StyledLineItem = styled.div`
    color: #5e6470;
    background-color: white;
`;

const StyledDarkText = styled.p`
    color: #333;
`;

const StyledLineItemContainer = styled.div`
    min-height: 69px;
    background-color: white;
    padding: 10px 0;
    margin: 0px 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #d7dae0;
`;

const StyledTotalSummaries = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const StyledTotalSummaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
`;
const StyledTotalAmountDueWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
    padding: 10px 0px 10px 0px;
    border-bottom: #d7dae0 3px solid;
    border-top: #d7dae0 3px solid;
`;

const StyledExtraInfo = styled.div`
    background-color: white;
    padding: 110px 0px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    & p {
        color: #858585;
        width: 300px;
    }
`;

const StyledFooter = styled.div`
    padding: 40px 0px 40px 40px;
    background-color: #f6f6f6;
    font-weight: 500;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

const StyledBackButton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    background: #f8f9fa;
    padding: 8px 48px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: #f0f2f3;
    }
`;

function FormPrint() {
    const { formValues } = useContext(FormDataContext);
    const navigate = useNavigate();

    // Accessing the cost summaries
    const { totals } = formValues;

    // Storing saved invoice details
    const formEntryDetails = {
        invoiceNumber: formValues.details.invoiceNumber,
        purchaseOrder: formValues.details.purchaseOrder,
        customer: formValues.details.customer,
        issueDate: formValues.details.issueDate,
        dueDate: formValues.details.dueDate,
        notes: formValues.details.notes,
        bankDetails: formValues.details.bankDetails,
    };

    //************* Routing ***************//
    const handleBackButton = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div>
            <StyledContainer>
                {/************** Invoice header section ****************/}
                <StyledHeader>
                    <img src={companyDetails.companyLogo} alt="logo" />
                    <StyledTitle>
                        <h1>INVOICE</h1>
                        <p>{`NO. ${formEntryDetails.invoiceNumber}`}</p>
                    </StyledTitle>
                </StyledHeader>

                {/************** Invoice details section ****************/}
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

                {/************** Description headers section ****************/}
                <StyledDescriptionHeaders>
                    <div className="flex-left">
                        <div>Item</div>
                    </div>
                    <StyledFlexRight>
                        <div>Qty</div>
                        <div>Price</div>
                        <div>Total</div>
                    </StyledFlexRight>
                </StyledDescriptionHeaders>

                {/************** Line items section ****************/}
                {formValues.items.map((lineItem) => (
                    <StyledLineItem key={lineItem.id}>
                        <StyledLineItemContainer>
                            <div>
                                <StyledDarkText>
                                    {lineItem.productService}
                                </StyledDarkText>
                                <p>{lineItem.description}</p>
                            </div>
                            <StyledFlexRight>
                                <p>{lineItem.qty}</p>
                                <p>$ {lineItem.price}</p>
                                <p>$ {lineItem.qty * lineItem.price}</p>
                            </StyledFlexRight>
                        </StyledLineItemContainer>
                    </StyledLineItem>
                ))}

                {/************** Cost summaries section ****************/}
                <StyledTotalSummaries>
                    <StyledTotalSummaryWrapper>
                        <p>Subtotal</p>
                        <p>$ {totals.subtotal.toFixed(2)}</p>
                    </StyledTotalSummaryWrapper>
                    <StyledTotalSummaryWrapper>
                        <p>Tax</p>
                        <p>$ {totals.tax.toFixed(2)}</p>
                    </StyledTotalSummaryWrapper>
                    <StyledTotalSummaryWrapper>
                        <p>Discount</p>
                        <p>$ {totals.discount.toFixed(2)}</p>
                    </StyledTotalSummaryWrapper>
                    <StyledTotalAmountDueWrapper>
                        <p>Amount Due</p>
                        <p>$ {totals.total.toFixed(2)}</p>
                    </StyledTotalAmountDueWrapper>
                </StyledTotalSummaries>

                {/************** Extra info section ****************/}
                <StyledExtraInfo>
                    {formEntryDetails.bankDetails && (
                        <div className="paymentInfoContainer">
                            <h4>Payment Infomration:</h4>
                            <p>{formEntryDetails.bankDetails}</p>
                        </div>
                    )}
                    {formEntryDetails.notes && (
                        <div className="notesContainer">
                            <h4>Notes:</h4>
                            <p>{formEntryDetails.notes}</p>
                        </div>
                    )}
                </StyledExtraInfo>
                <StyledFooter>
                    <p>Thank you for your purchase!</p>
                </StyledFooter>
            </StyledContainer>
            <StyledButtonWrapper>
                <StyledBackButton onClick={handleBackButton}>
                    Back
                </StyledBackButton>
                <PDFDownloadLink
                    document={
                        <PDFDocument formValues={formValues} totals={totals} />
                    }
                    fileName={`INV${formEntryDetails.invoiceNumber}`}
                    style={{
                        textDecoration: "none",
                        border: "1px solid transparent",
                        background: "#f8f9fa",
                        padding: "8px 48px",
                        borderRadius: "8px",
                    }}
                >
                    {({ loading, error }) =>
                        loading ? "Loading document..." : "Download"
                    }
                </PDFDownloadLink>
            </StyledButtonWrapper>
        </div>
    );
}

export default FormPrint;
