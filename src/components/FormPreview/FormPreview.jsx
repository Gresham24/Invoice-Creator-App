import { useContext } from "react";
import { FormDataContext } from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/FormPreview.styles";
import Header from "./Header";
import InvoiceDetails from "./InvoiceDetails";
import DescriptionHeaders from "./DescriptionHeaders";
import LineItems from "./LineItems";
import CostSummaries from "./CostSummaries";
import ExtraInfo from "./ExtraInfo";
import Footer from "./Footer";
import ButtonWrapper from "./ButtonWrapper";

function FormPreview() {
    const { formValues } = useContext(FormDataContext);
    const navigate = useNavigate();
    const { totals } = formValues;

    const formEntryDetails = {
        invoiceNumber: formValues.details.invoiceNumber,
        purchaseOrder: formValues.details.purchaseOrder,
        customer: formValues.details.customer,
        issueDate: formValues.details.issueDate,
        dueDate: formValues.details.dueDate,
        notes: formValues.details.notes,
        bankDetails: formValues.details.bankDetails,
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div>
            <StyledContainer>
                <Header invoiceNumber={formEntryDetails.invoiceNumber} companyDetails={formValues.details} />
                <InvoiceDetails formEntryDetails={formEntryDetails} companyDetails={formValues.details} />
                <DescriptionHeaders />
                <LineItems items={formValues.items} />
                <CostSummaries totals={totals} />
                <ExtraInfo
                    bankDetails={formEntryDetails.bankDetails}
                    notes={formEntryDetails.notes}
                />
                <Footer />
            </StyledContainer>
            <ButtonWrapper
                handleBackButton={handleBackButton}
                formValues={formValues}
                invoiceNumber={formEntryDetails.invoiceNumber}
                totals={totals}
            />
        </div>
    );
}

export default FormPreview;
