import styled from "styled-components";
import { colors } from "../constants";

export const StyledContainer = styled.div`
    margin: 50px auto;
    padding: 20px 32px;
    border-radius: 15px;
    box-shadow: 0px 15px 48px 0px ${colors.shadowGray};
    background-color: ${colors.lightGray};
    max-width: 980px;
    color: ${colors.darkGray};

    /* Override parent text color inheritance */
    * {
        color: inherit;
    }

    /* Ensure headings are dark */
    h1, h2, h3, h4, h5, h6 {
        color: ${colors.darkGray};
    }

    /* Ensure paragraphs with gray text remain gray */
    p {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        margin: 20px auto;
        padding: 10px 16px;
    }
`;

export const StyledHeader = styled.div`
    padding: 24px 40px;
    background-color: ${colors.mediumGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h1 {
        font-weight: 500;
        font-size: 32px;
    }
    & p {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        padding: 16px 20px;
        flex-direction: column;
        gap: 1rem;
        text-align: center;

        & h1 {
            font-size: 24px;
        }
    }
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const StyledInvoiceDetails = styled.div`
    padding: 32px 40px;
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
    line-height: 1.6;
    min-height: 200px;

    & h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
        color: ${colors.darkGray};
    }

    & p {
        color: ${colors.gray};
        margin: 2px 0;
        line-height: 1.5;
    }

    & > div {
        flex: 1;
        max-width: 300px;
    }

    & > div:first-child {
        padding-right: 20px;
    }

    & > div:nth-child(2) {
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        padding: 24px 20px;
        flex-direction: column;
        gap: 2rem;
        min-height: auto;
        
        & > div {
            max-width: 100%;
            padding: 0 !important;
        }
    }
`;

export const StyledInvoiceMetaInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: flex-start;
    gap: 1.5rem;
    min-width: 200px;
    flex-shrink: 0;

    & div {
        margin-bottom: 8px;
    }

    & h3 {
        margin-bottom: 4px;
        font-weight: 600;
        color: ${colors.darkGray};
    }

    & p {
        margin: 0;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        text-align: start;
        min-width: auto;
        gap: 1rem;
    }
`;

export const StyledDescriptionHeaders = styled.div`
    background-color: ${colors.mediumGray};
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
        padding: 10px 20px;
    }
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

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledLineItem = styled.div`
    color: ${colors.darkGray};
    background-color: ${colors.white};
`;

export const StyledDarkText = styled.p`
    color: ${colors.darkGray};
`;

export const StyledLineItemContainer = styled.div`
    min-height: 69px;
    background-color: ${colors.white};
    padding: 10px 0;
    margin: 0px 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid ${colors.borderGray};

    @media (max-width: 768px) {
        margin: 0px 20px;
    }
`;

export const StyledTotalSummaries = styled.div`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const StyledTotalSummaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;

    @media (max-width: 768px) {
        margin: 10px 20px 10px 0px;
        width: 50%;
    }
`;

export const StyledTotalAmountDueWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px 10px 0px;
    width: 33.33%;
    padding: 10px 0px 10px 0px;
    border-bottom: ${colors.borderGray} 3px solid;
    border-top: ${colors.borderGray} 3px solid;

    @media (max-width: 768px) {
        margin: 10px 20px 10px 0px;
        width: 50%;
    }
`;

export const StyledExtraInfo = styled.div`
    background-color: ${colors.white};
    padding: 110px 0px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    & p {
        color: ${colors.gray};
        width: 300px;
    }

    @media (max-width: 768px) {
        padding: 40px 0px 20px 20px;
        & p {
            width: 100%;
        }
    }
`;

export const StyledFooter = styled.div`
    padding: 40px 0px 40px 40px;
    background-color: ${colors.mediumGray};
    font-weight: 500;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    /* align-items: center; */

    @media (max-width: 768px) {
        text-align: center;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const StyledBackButton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    background: ${colors.lightGray};
    padding: 8px 48px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: ${colors.mediumGray};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
