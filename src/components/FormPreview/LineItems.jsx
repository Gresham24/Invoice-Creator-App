import {
    StyledLineItem,
    StyledLineItemContainer,
    StyledFlexRight,
    StyledDarkText,
} from "../../styles/FormPreview.styles";

function LineItems({ items, currency = "USD", symbol = "$" }) {
    return (
        <>
            {items.map((lineItem) => (
                <StyledLineItem key={lineItem.id}>
                    <StyledLineItemContainer>
                        <div>
                            <StyledDarkText>
                                {lineItem.productService}
                            </StyledDarkText>
                            <p>{lineItem.description}</p>
                        </div>
                        <StyledFlexRight>
                            <p>{lineItem.qty}</p>
                            <p>{symbol} {lineItem.price}</p>
                            <p>{symbol} {lineItem.qty * lineItem.price}</p>
                        </StyledFlexRight>
                    </StyledLineItemContainer>
                </StyledLineItem>
            ))}
        </>
    );
}

export default LineItems;
