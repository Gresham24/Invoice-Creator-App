import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../PDFDocument";
import {
    StyledButtonWrapper,
    StyledBackButton,
} from "../../styles/FormPreview.styles";

function ButtonWrapper({
    handleBackButton,
    formValues,
    invoiceNumber,
    totals,
}) {
    return (
        <StyledButtonWrapper>
            <StyledBackButton onClick={handleBackButton}>Back</StyledBackButton>
            <PDFDownloadLink
                document={
                    <PDFDocument formValues={formValues} totals={totals} />
                }
                fileName={`INV${invoiceNumber}`}
                style={{
                    textDecoration: "none",
                    border: "1px solid transparent",
                    background: "#f8f9fa",
                    padding: "8px 48px",
                    borderRadius: "8px",
                }}
            >
                {({ loading }) =>
                    loading ? "Loading document..." : "Download"
                }
            </PDFDownloadLink>
        </StyledButtonWrapper>
    );
}

export default ButtonWrapper;
