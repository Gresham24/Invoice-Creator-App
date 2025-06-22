import { StyledHeader, StyledTitle } from "../../styles/FormPreview.styles";

function Header({ invoiceNumber, companyDetails }) {
    return (
        <StyledHeader>
            {companyDetails.companyLogo ? (
                <img
                    src={companyDetails.companyLogo}
                    alt="logo"
                    style={{ maxHeight: "80px", maxWidth: "80px" }}
                />
            ) : (
                <div />
            )}
            <StyledTitle>
                <h1>INVOICE</h1>
                <p>{`NO. ${invoiceNumber}`}</p>
            </StyledTitle>
        </StyledHeader>
    );
}

export default Header;
