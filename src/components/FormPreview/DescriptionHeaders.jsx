import {
    StyledDescriptionHeaders,
    StyledFlexRight,
} from "../../styles/FormPreview.styles";

function DescriptionHeaders() {
    return (
        <StyledDescriptionHeaders>
            <div className="flex-left">
                <div>Item</div>
            </div>
            <StyledFlexRight>
                <div>Qty</div>
                <div>Price</div>
                <div>Total</div>
            </StyledFlexRight>
        </StyledDescriptionHeaders>
    );
}

export default DescriptionHeaders;
