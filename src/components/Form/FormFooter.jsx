import { useField, useFormikContext } from "formik";
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

const FormFooter = () => {
    const { values, handleChange, handleReset } = useFormikContext();
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
                        <span>{symbol} {(totals.subtotal || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+{symbol} {(totals.tax || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-{symbol} {(totals.discount || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>{symbol} {(totals.total || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledSummarySection>

            {/* Action Buttons */}
            <StyledFormActionButtons className="footer-actions-desktop">
                <StyledCancelButton type="button" onClick={handleReset}>
                    Cancel
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
                        <span>{symbol}{(totals.subtotal || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+{symbol}{(totals.tax || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-{symbol}{(totals.discount || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>{symbol}{(totals.total || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledMobileSummarySection>

            {/* Mobile Action Buttons */}
            <StyledFormActionButtons className="footer-actions-mobile">
                <StyledCancelButton type="button" onClick={handleReset}>
                    Cancel
                </StyledCancelButton>
                <StyledSubmitButton type="submit">
                    Create Invoice
                </StyledSubmitButton>
            </StyledFormActionButtons>

        </StyledFormFooter>
    );
};

export default FormFooter;
