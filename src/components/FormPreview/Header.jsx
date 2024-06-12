import { companyDetails } from "../FormData";
import { StyledHeader, StyledTitle } from "../../styles/FormPreview.styles";

function Header({ invoiceNumber }) {
    return (
        <StyledHeader>
            <img src={companyDetails.companyLogo} alt="logo" />
            <StyledTitle>
                <h1>INVOICE</h1>
                <p>{`NO. ${invoiceNumber}`}</p>
            </StyledTitle>
        </StyledHeader>
    );
}

export default Header;
