import styled from "styled-components";

export const StyledCompanyDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;
export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    & span {
        color: red;
        font-size: 0.8rem;
    }
    & label {
        display: flex;
        flex-direction: column;
    }
`;
export const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    & span {
        color: red;
        font-size: 0.8rem;
        margin-left: 10px;
    }
`;

export const StyledCustomerDetails = styled.div`
    color: #858585;
    font-size: 0.875rem;
`;
export const StyledFormHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    & input,
    select {
        width: 250px;
        height: 40px;
        padding: 10px;
    }
`;

export const StyledInputsWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

export const StyledDescriptionHeaders = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    margin-bottom: 2.75rem;
`;

export const StyledDescriptionRow = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: auto;
    grid-row-gap: 60px;
    margin-bottom: 3.75rem;
`;

export const StyledProductServiceInput = styled.input`
    width: 200px;
`;
export const StyledPriceInput = styled.input`
    width: 4rem;
`;
export const StyledQtyTaxDiscInput = styled.input`
    width: 2.7rem;
`;

export const StyledDescriptionTextarea = styled.textarea`
    margin-top: 10px;
    resize: none;
    width: 200px;
`;

export const StyledDeleteButton = styled.button`
    height: 1.5rem;
    width: 1.5rem;
    background: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
    & img:active {
        opacity: 0.7;
    }
`;

export const StyledAddButton = styled.button`
    background: none;
    border: none;
    color: #3dadaf;
    font-weight: 500;
    &:hover {
        cursor: pointer;
    }
    &:active {
        opacity: 0.7;
    }
`;

export const StyledFormFooter = styled.div`
    & div:first-child {
        margin-right: 30px;
    }
    & span {
        font-size: 0.7rem;
    }
`;

export const StyledCostSummaries = styled.div`
    display: flex;
    & div {
        display: flex;
        flex-direction: column;
    }
`;
export const StyledCostSummaryAmounts = styled.div`
    text-align: right;
`;
export const StyledExtraDetails = styled.div`
    display: flex;
    & textarea {
        margin-top: 5px;
        resize: none;
    }
`;

export const StyledFormActionButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 32px;
`;

export const StyledCancelButton = styled.button`
    border-radius: 8px;
    border: 1px solid #e4e0dd;
    background: #f8f9fa;
    padding: 8px 32px;
    &:active {
        background: #f0f2f3;
    }
`;

export const StyledSubmitButton = styled.button`
    border: none;
    border-radius: 8px;
    background: #3dadaf;
    padding: 8px 32px;
    color: white;
    &:active {
        opacity: 0.8;
    }
`;
