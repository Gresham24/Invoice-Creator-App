import { useContext } from "react";
import { FormDataContext } from "./Form";
import { companyDetails, customerDetails } from "./FormData";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import {
    StyledContainer,
    StyledHeader,
    StyledTitle,
    StyledInvoiceDetails,
    StyledInvoiceDates,
    StyledDescriptionHeaders,
    StyledFlexRight,
    StyledLineItem,
    StyledDarkText,
    StyledLineItemContainer,
    StyledTotalSummaries,
    StyledTotalSummaryWrapper,
    StyledTotalAmountDueWrapper,
    StyledExtraInfo,
    StyledFooter,
    StyledButtonWrapper,
    StyledBackButton,
} from "../styles/FormPrint.styles";

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
