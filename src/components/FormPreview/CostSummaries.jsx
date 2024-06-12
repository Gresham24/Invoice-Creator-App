import {
    StyledTotalSummaries,
    StyledTotalSummaryWrapper,
    StyledTotalAmountDueWrapper,
} from "../styles/FormPreview.styles";

function CostSummaries({ totals }) {
    return (
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
    );
}

export default CostSummaries;
