import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: 50px auto;
    padding: 20px 32px;
    border-radius: 15px;
    box-shadow: 0px 15px 48px 0px rgba(46, 47, 58, 0.08);
    background-color: #f8f9fa;
    max-width: 980px;
`;

export const StyledHeader = styled.div`
    padding: 24px 40px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
        font-weight: 500;
        font-size: 32px;
    }
    & p {
        color: #858585;
    }
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
`;

export const StyledInvoiceDetails = styled.div`
    padding: 24px 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
`;

export const StyledInvoiceDates = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    justify-content: space-between;
`;

export const StyledDescriptionHeaders = styled.div`
    background-color: #ededed;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const StyledFlexRight = styled.div`
    width: 50%;
    display: flex;
    text-align: right;
    justify-content: space-between;
    & div {
        width: 33.33%;
        text-align: right;
    }
    & p {
        width: 33.33%;
        margin: 0;
    }
`;

export const StyledLineItem = styled.div`
    color: #5e6470;
    background-color: white;
`;

export const StyledDarkText = styled.p`
    color: #333;
`;

export const StyledLineItemContainer = styled.div`
    min-height: 69px;
    background-color: white;
    padding: 10px 0;
    margin: 0px 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #d7dae0;
`;

export const StyledTotalSummaries = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const StyledTotalSummaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
`;
export const StyledTotalAmountDueWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
    padding: 10px 0px 10px 0px;
    border-bottom: #d7dae0 3px solid;
    border-top: #d7dae0 3px solid;
`;

export const StyledExtraInfo = styled.div`
    background-color: white;
    padding: 110px 0px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    & p {
        color: #858585;
        width: 300px;
    }
`;

export const StyledFooter = styled.div`
    padding: 40px 0px 40px 40px;
    background-color: #f6f6f6;
    font-weight: 500;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

export const StyledBackButton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    background: #f8f9fa;
    padding: 8px 48px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: #f0f2f3;
    }
`;