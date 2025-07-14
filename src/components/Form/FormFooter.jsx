import React from "react";
import { useField, useFormikContext } from "formik";
import {
    StyledFormFooter,
    StyledCostSummaries,
    StyledCostSummaryAmounts,
    StyledExtraDetails,
    StyledInput,
    StyledFormActionButtons,
    StyledCancelButton,
    StyledSubmitButton,
    StyledSummarySection,
    StyledNotesSection,
    StyledNotesTitle,
    StyledNotesInput,
    StyledSummaryCard,
    StyledSummaryRow,
    StyledMobileSummarySection,
    StyledMobileSummaryCard,
} from "../../styles/Form.styles";

const FormFooter = () => {
    const { values, errors, handleChange } = useFormikContext();
    const [notesField] = useField("details.notes");
    const [bankDetailsField] = useField("details.bankDetails");

    const totals = values.totals || {
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
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
                        <span>${(totals.subtotal || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+${(totals.tax || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-${(totals.discount || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>USD ${(totals.total || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledSummarySection>

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
                        <span>${(totals.subtotal || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Total Tax:</span>
                        <span>+${(totals.tax || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow>
                        <span>Discount:</span>
                        <span>-${(totals.discount || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                    <StyledSummaryRow className="total">
                        <span>Total:</span>
                        <span>USD ${(totals.total || 0).toFixed(2)}</span>
                    </StyledSummaryRow>
                </StyledSummaryCard>
            </StyledMobileSummarySection>
            {/* <hr /> */}

            <StyledFormActionButtons>
                <StyledCancelButton>Cancel</StyledCancelButton>
                <StyledSubmitButton type="submit">
                    Create invoice
                </StyledSubmitButton>
            </StyledFormActionButtons>
        </StyledFormFooter>
    );
};

export default FormFooter;
