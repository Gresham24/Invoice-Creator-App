import { useContext } from "react";
import styled from "styled-components";
import { FormDataContext } from "./Form";
import { companyDetails, customerDetails } from "./FormData";

const StyledContainer = styled.div`
    margin-top: 50px;
    padding: 20px 32px;
    border-radius: 15px;
    background: #f8f9fa;
    box-shadow: 0px 15px 48px 0px rgba(46, 47, 58, 0.08);
    /* height: 882px; */
`;

const StyledPage = styled.div``;

export default function FormPrint() {
    const { formValues } = useContext(FormDataContext);

    const formEntryDetails = {
        invoiceNumber: formValues.details.invoiceNumber,
        purchaseOrder: formValues.details.purchaseOrder,
        customer: formValues.details.customer,
        issueDate: formValues.details.issueDate,
        dueDate: formValues.details.dueDate,
        note: formValues.details.note,
        bankDetails: formValues.details.bankDetails,
    };

    const formLineItems = {

    }
    // console.log(formValues);
    
    return (
        <StyledContainer>
            <StyledPage>
                <div className="header">
                    <img src={companyDetails.companyLogo} alt="logo" />
                    <div className="title">
                        <h1>INVOICE</h1>
                        <p>{`NO. `}</p>
                    </div>
                </div>
                {/* <p>Details: {JSON.stringify(formValues.details)}</p> */}
                {/* <p>Items: {JSON.stringify(formValues.items)}</p> */}
            </StyledPage>
        </StyledContainer>
    );
}
