import {
    StyledTotalSummaries,
    StyledTotalSummaryWrapper,
    StyledTotalAmountDueWrapper,
} from "../../styles/FormPreview.styles";

function CostSummaries({ totals, currency = "USD", symbol = "$" }) {
    return (
        <StyledTotalSummaries>
            <StyledTotalSummaryWrapper>
                <p>Subtotal</p>
                <p>{symbol} {totals.subtotal.toFixed(2)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalSummaryWrapper>
                <p>Tax</p>
                <p>{symbol} {totals.tax.toFixed(2)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalSummaryWrapper>
                <p>Discount</p>
                <p>{symbol} {totals.discount.toFixed(2)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalAmountDueWrapper>
                <p>Amount Due</p>
                <p>{symbol}{totals.total.toFixed(2)}</p>
            </StyledTotalAmountDueWrapper>
        </StyledTotalSummaries>
    );
}

export default CostSummaries;
