import { useField, useFormikContext } from "formik";
import { v4 as uuidv4 } from "uuid";
import { getCurrentDate } from "../../utils/getCurrentDate";
import {
    StyledFormFooter,
    StyledSummarySection,
    StyledNotesSection,
    StyledNotesTitle,
    StyledNotesInput,
    StyledSummaryCard,
    StyledSummaryRow,
    StyledMobileSummarySection,
    StyledFormActionButtons,
    StyledCancelButton,
    StyledSubmitButton,
} from "../../styles/Form.styles";
import { formatAmount } from "../../utils/formatCurrency";

const FormFooter = () => {
    const { values, handleChange, resetForm } = useFormikContext();
    const [notesField] = useField("details.notes");
    const [bankDetailsField] = useField("details.bankDetails");

    const totals = values.totals || {
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
    };

    const currency = values.details.currency || "ZAR";
    const currencySymbols = {
        ZAR: "R",
        USD: "$",
        EUR: "€",
        GBP: "£",
        CAD: "$",
        AUD: "$",
        JPY: "¥",
        CHF: "CHF",
        CNY: "¥",
    };
    const symbol = currencySymbols[currency] || currency;

    const handleResetForm = () => {
        const cleanInitialValues = {
            details: {
                name: "",
                companyName: "",
                companyLogo: "",
                companyAddress: "",
                companyEmail: "",
                invoiceNumber: "",
                purchaseOrder: "",
                issueDate: getCurrentDate(),
                dueDate: "",
                customDueDate: "",
                customer: "",
                customerData: null,
                notes: "",
                bankDetails: "",
                currency: "ZAR",
            },
            items: [
                {
                    id: uuidv4(),
                    productService: "",
                    description: "",
                    qty: 1,
                    price: "",
                    taxPercentage: "",
                    discountPercentage: "",
                },
            ],
            totals: {
                subtotal: 0,
                tax: 0,
                discount: 0,
                total: 0,
            },
        };
        resetForm({ values: cleanInitialValues });
    };

    return (
        <StyledFormFooter>
            {/* Desktop & Mobile Summary Layout (identical markup, responsive via CSS) */}
            <StyledSummarySection>
                <StyledNotesSection>
                    <div>
                        <StyledNotesTitle>Notes</StyledNotesTitle>
                        <StyledNotesInput
                            {...notesField}
                            onChange={handleChange}
                            placeholder="Enter a description... (Optional)"
                        />
                    </div>
                    <div>
                        <StyledNotesTitle>Bank Account Details</StyledNotesTitle>
                        <StyledNotesInput
                            {...bankDetailsField}
                            onChange={handleChange}
                            placeholder="Enter bank details... (Optional)"
                        />
                    </div>
                </StyledNotesSection>

                <StyledSummaryCard>
                    <StyledSummaryRow>
                        <span>Subtotal:</span>
                        <span>{symbol} {formatAmount(totals.subtotal || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+{symbol} {formatAmount(totals.tax || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-{symbol} {formatAmount(totals.discount || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>{symbol} {formatAmount(totals.total || 0)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledSummarySection>

            {/* Action Buttons */}
            <StyledFormActionButtons className="footer-actions-desktop">
                <StyledCancelButton type="button" onClick={handleResetForm}>
                    Reset Form
                </StyledCancelButton>
                <StyledSubmitButton type="submit">
                    Create Invoice
                </StyledSubmitButton>
            </StyledFormActionButtons>

            {/* Mobile: Only show summary card and notes, stacked vertically */}
            <StyledMobileSummarySection>
                <StyledNotesSection>
                    <div>
                        <StyledNotesTitle>Notes</StyledNotesTitle>
                        <StyledNotesInput
                            {...notesField}
                            onChange={handleChange}
                            placeholder="Enter a description... (Optional)"
                        />
                    </div>
                    <div>
                        <StyledNotesTitle>Bank Account Details</StyledNotesTitle>
                        <StyledNotesInput
                            {...bankDetailsField}
                            onChange={handleChange}
                            placeholder="Enter bank details... (Optional)"
                        />
                    </div>
                </StyledNotesSection>
                <StyledSummaryCard>
                    <StyledSummaryRow>
                        <span>Subtotal:</span>
                        <span>{symbol} {formatAmount(totals.subtotal || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+{symbol} {formatAmount(totals.tax || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-{symbol} {formatAmount(totals.discount || 0)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>{symbol} {formatAmount(totals.total || 0)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledMobileSummarySection>

            {/* Mobile Action Buttons */}
            <StyledFormActionButtons className="footer-actions-mobile">
                <StyledCancelButton type="button" onClick={handleResetForm}>
                    Reset Form
                </StyledCancelButton>
                <StyledSubmitButton type="submit">
                    Create Invoice
                </StyledSubmitButton>
            </StyledFormActionButtons>

        </StyledFormFooter>
    );
};

export default FormFooter;
