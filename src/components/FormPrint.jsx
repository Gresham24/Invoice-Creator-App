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
  background-color: #ededed;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & .flex-right {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  & .flex-right div {
    width: 33.33%;
    text-align: right;
  }
`;

const StyledLineItem = styled.div`
  color: #5e6470;
  background-color: white;
  & .lineItemContainer {
    min-height: 69px;
    background-color: white;
    padding: 10px 0;
    margin: 0px 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #d7dae0;
    & .flex-right {
      width: 50%;
      display: flex;
      text-align: right;
      justify-content: space-between;
    }
    .flex-right p {
      width: 33.33%;
      margin: 0;
    }
    & .flex-left p:first-child {
      color: #333;
    }
  }
`;

const StyledTotalSummaries = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: end;
  & .subtotal,
  .taxAmount,
  .discountTotal,
  .totalAmount {
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
  }
  & .totalAmount {
    padding: 10px 0px 10px 0px;
    border-bottom: #d7dae0 3px solid;
    border-top: #d7dae0 3px solid;
  }
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

const StyledbuttonWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  & button {
    border-radius: 8px;
    border: 1px solid transparent;
    background: #f8f9fa; // I would generally store colours in a constants file, since they are highly re-used
    padding: 8px 48px;
  }
  & button:hover {
    cursor: pointer;
  }
  & .backButton:active {
    background: #f0f2f3;
  }
  & .printButton {
    background: #3dadaf;
    color: white;
  }
  & .printButton:active {
    opacity: 0.8;
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
          <div className="title">
            <h1>INVOICE</h1>
            <p>{`NO. ${formEntryDetails.invoiceNumber}`}</p>
          </div>
        </StyledHeader>

        {/************** Invoice details section ****************/}
        <StyledInvoiceDetails>
          <div className="companyDetails">
            <h3>From</h3>
            <p>{companyDetails.name}</p>
            <p>{companyDetails.companyName}</p>
            <p>{companyDetails.companyAddress}</p>
            <p>{companyDetails.companyEmail}</p>
          </div>
          <div className="customerDetails">
            <h3>Billed To</h3>
            <p>{formEntryDetails.customer}</p>
            {formEntryDetails.customer && (
              <div className="customerDetails">
                <p>{customerDetails[formEntryDetails.customer]?.address}</p>
                <p>{customerDetails[formEntryDetails.customer]?.phone}</p>
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

        {/************** Description headers section ****************/}
        <StyldDescriptionHeaders>
          <div className="flex-left">
            <div>Item</div>
          </div>
          <div className="flex-right">
            <div>Qty</div>
            <div>Price</div>
            <div>Total</div>
          </div>
        </StyldDescriptionHeaders>

        {/************** Line items section ****************/}
        {formValues.items.map((lineItem) => (
          <StyledLineItem key={lineItem.id}>
            <div className="lineItemContainer">
              <div className="flex-left">
                <p>{lineItem.productService}</p>
                <p>{lineItem.description}</p>
              </div>
              <div className="flex-right">
                <p>{lineItem.qty}</p>
                <p>$ {lineItem.price}</p>
                <p>$ {lineItem.qty * lineItem.price}</p>
              </div>
            </div>
          </StyledLineItem>
        ))}

        {/************** Cost summaries section ****************/}
        <StyledTotalSummaries>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>$ {totals.subtotal.toFixed(2)}</p>
          </div>
          <div className="taxAmount">
            <p>Tax</p>
            <p>$ {totals.tax.toFixed(2)}</p>
          </div>
          <div className="discountTotal">
            <p>Discount</p>
            <p>$ {totals.discount.toFixed(2)}</p>
          </div>
          <div className="totalAmount">
            <p>Amount Due</p>
            <p>$ {totals.total.toFixed(2)}</p>
          </div>
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
      <StyledbuttonWrapper>
        <button className="backButton" onClick={handleBackButton}>
          Back
        </button>
        <PDFDownloadLink
          document={<PDFDocument formValues={formValues} totals={totals} />}
          fileName={`INV${formEntryDetails.invoiceNumber}`}
          style={{
            textDecoration: "none",
            border: "1px solid transparent",
            background: "#f8f9fa",
            padding: "8px 48px",
            borderRadius: "8px", // you should be consistent in using styled components
          }}
        >
          {({ loading, error }) =>
            loading ? "Loading document..." : "Download"
          }
        </PDFDownloadLink>
      </StyledbuttonWrapper>
    </div>
  );
}

export default FormPrint;
