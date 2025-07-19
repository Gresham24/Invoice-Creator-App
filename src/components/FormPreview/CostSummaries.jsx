import {
    StyledTotalSummaries,
    StyledTotalSummaryWrapper,
    StyledTotalAmountDueWrapper,
} from "../../styles/FormPreview.styles";
import { formatAmount } from "../../utils/formatCurrency";

function CostSummaries({ totals, currency = "USD", symbol = "$" }) {
    return (
        <StyledTotalSummaries>
            <StyledTotalSummaryWrapper>
                <p>Subtotal</p>
                <p>{symbol} {formatAmount(totals.subtotal)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalSummaryWrapper>
                <p>Tax</p>
                <p>{symbol} {formatAmount(totals.tax)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalSummaryWrapper>
                <p>Discount</p>
                <p>{symbol} {formatAmount(totals.discount)}</p>
            </StyledTotalSummaryWrapper>
            <StyledTotalAmountDueWrapper>
                <p>Amount Due</p>
                <p>{symbol} {formatAmount(totals.total)}</p>
            </StyledTotalAmountDueWrapper>
        </StyledTotalSummaries>
    );
}

export default CostSummaries;
