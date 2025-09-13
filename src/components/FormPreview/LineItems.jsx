import {
    StyledLineItem,
    StyledLineItemContainer,
    StyledFlexRight,
    StyledDarkText,
    StyledDescriptionText,
} from "../../styles/FormPreview.styles";
import { formatAmount } from "../../utils/formatCurrency";

function LineItems({ items, currency = "USD", symbol = "$" }) {
    const truncateDescription = (description, maxLength = 150) => {
        if (!description) return "";
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + "...";
    };

    return (
        <>
            {items.map((lineItem) => (
                <StyledLineItem key={lineItem.id}>
                    <StyledLineItemContainer>
                        <div>
                            <StyledDarkText>
                                {lineItem.productService}
                            </StyledDarkText>
                            <StyledDescriptionText>
                                {truncateDescription(lineItem.description)}
                            </StyledDescriptionText>
                        </div>
                        <StyledFlexRight>
                            <p>{lineItem.qty}</p>
                            <p>{symbol} {formatAmount(lineItem.price)}</p>
                            <p>{symbol} {formatAmount(lineItem.qty * lineItem.price)}</p>
                        </StyledFlexRight>
                    </StyledLineItemContainer>
                </StyledLineItem>
            ))}
        </>
    );
}

export default LineItems;
