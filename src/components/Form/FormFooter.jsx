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
            <StyledExtraDetails>
                <StyledInput>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        {...notesField}
                        onChange={handleChange}
                        cols="30"
                        rows="5"
                        placeholder="Enter a description... (Optional)"
                    />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="bankDetails">Bank account details</label>
                    <textarea
                        {...bankDetailsField}
                        onChange={handleChange}
                        cols="30"
                        rows="5"
                        placeholder="Enter a description... (Optional)"
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
