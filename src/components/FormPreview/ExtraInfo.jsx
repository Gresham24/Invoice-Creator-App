import { StyledExtraInfo } from "../../styles/FormPreview.styles";

function ExtraInfo({ bankDetails, notes }) {
    return (
        <StyledExtraInfo>
            {bankDetails && (
                <div className="paymentInfoContainer">
                    <h4>Payment Information:</h4>
                    <p>{bankDetails}</p>
                </div>
            )}
            {notes && (
                <div className="notesContainer">
                    <h4>Notes:</h4>
                    <p>{notes}</p>
                </div>
            )}
        </StyledExtraInfo>
    );
}

export default ExtraInfo;
