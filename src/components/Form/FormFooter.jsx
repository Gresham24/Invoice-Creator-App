import React from "react";
import {
  StyledFormFooter,
    StyledCostSummaries,
    StyledCostSummaryAmounts,
    StyledExtraDetails,
    StyledInput,
    StyledFormActionButtons,
    StyledCancelButton,
    StyledSubmitButton,
} from "../../styles/Form.styles";

const FormFooter = ({ totals, details, errors, handleChange }) => {
    return (
        <StyledFormFooter>
            <StyledExtraDetails>
                <StyledInput>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="5"
                        onChange={handleChange}
                        placeholder="Enter a description... (Optional)"
                        value={details.notes || ""}
                    />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="bankDetails">Bank account details</label>
                    <textarea
                        name="bankDetails"
                        id="bankDetails"
                        cols="30"
                        rows="5"
                        onChange={handleChange}
                        placeholder="Enter a description... (Optional)"
                        value={details.bankDetails || ""}
                    />
                </StyledInput>
            </StyledExtraDetails>

            <hr />

            <StyledCostSummaries>
                <div>
                    <p>
                        Subtotal <span>(USD)</span>
                    </p>
                    <p>
                        Total VAT<span>(USD)</span>
                    </p>
                    <p>
                        Discount <span>(USD)</span>
                    </p>
                    <p>
                        <b>Total</b>
                    </p>
                </div>
                <StyledCostSummaryAmounts>
                    <p>{totals.subtotal}</p>
                    <p>+{totals.tax}</p>
                    <p>-{totals.discount}</p>
                    <p>
                        <b>
                            <span>USD</span> {totals.total}
                        </b>
                    </p>
                </StyledCostSummaryAmounts>
            </StyledCostSummaries>
            <hr />

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
