import { useContext } from "react";
import styled from "styled-components";
import { FormDataContext } from "./Form";
import Form from "./Form";

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


    return (
        <StyledContainer>
            <StyledPage>
              <p>{}</p>
                {/* <p>Details: {JSON.stringify(formValues.details)}</p> */}
                {/* <p>Items: {JSON.stringify(formValues.items)}</p> */}
            </StyledPage>
        </StyledContainer>
    );
}
