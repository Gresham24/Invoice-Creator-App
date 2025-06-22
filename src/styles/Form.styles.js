import styled from "styled-components";
import { colors } from "../constants";

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
    width: 100%;
    & span {
        color: ${colors.red};
        font-size: 0.8rem;
        margin-top: 4px;
        text-align: left;
    }
    & label {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    & span {
        color: ${colors.red};
        font-size: 0.8rem;
        margin-left: 10px;
    }
`;

export const StyledCustomerDetails = styled.div`
    color: ${colors.gray};
    font-size: 0.875rem;
`;

export const StyledFormHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0 1rem;
    & input,
    select {
        width: 100%;
        height: 40px;
        padding: 10px;
    }

    @media (max-width: 768px) {
        padding: 0 0.5rem;
    }
`;

export const StyledInputsWrapper = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const StyledDescriptionHeaders = styled.div`
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 14px;
    padding: 1rem;
    background-color: ${colors.mediumGray};
    border-radius: 8px 8px 0 0;

    @media (max-width: 768px) {
        padding: 0.75rem;
        font-size: 12px;
    }
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.2rem;
    background-color: ${colors.white};
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    overflow: hidden;
`;

export const StyledTableHeader = styled.thead`
    background-color: ${colors.mediumGray};
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid ${colors.borderGray};
    }
`;

export const StyledTableCell = styled.td`
    padding: 1rem 0.5rem;
    vertical-align: top;

    &.item-number {
        text-align: center;
        width: 5%;
    }

    &.product-service {
        width: 35%;
    }

    &.qty {
        text-align: right;
        width: 10%;
    }

    &.price {
        text-align: right;
        width: 12%;
    }

    &.tax {
        text-align: right;
        width: 10%;
    }

    &.discount {
        text-align: right;
        width: 10%;
    }

    &.total {
        text-align: right;
        width: 10%;
    }

    &.actions {
        text-align: center;
        width: 8%;
    }

    @media (max-width: 768px) {
        padding: 0.75rem 0.5rem;
    }
`;

export const StyledTableHeaderCell = styled.th`
    padding: 1rem 0.5rem;
    text-align: left;
    font-weight: 500;

    &:nth-child(1) {
        width: 5%;
        text-align: center;
    }
    &:nth-child(2) {
        width: 35%;
    }
    &:nth-child(3) {
        width: 10%;
        text-align: center;
    }
    &:nth-child(4) {
        width: 12%;
        text-align: center;
    }
    &:nth-child(5) {
        width: 10%;
        text-align: center;
    }
    &:nth-child(6) {
        width: 10%;
        text-align: center;
    }
    &:nth-child(7) {
        width: 10%;
        text-align: right;
    }
    &:nth-child(8) {
        width: 8%;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 0.75rem 0.5rem;
        font-size: 12px;
    }
`;

export const StyledDescriptionRow = styled.div`
    display: none;
`;

export const StyledProductServiceInput = styled.input`
    width: 100%;
    max-width: 200px;
    height: 36px;
    padding: 8px 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 8px;
    }
`;

export const StyledPriceInput = styled.input`
    width: 100%;
    max-width: 100px;
    height: 36px;
    padding: 8px 4px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    text-align: right;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 4px;
        max-width: 80px;
    }
`;

export const StyledQtyTaxDiscInput = styled.input`
    width: 100%;
    max-width: 50px;
    height: 36px;
    padding: 8px 4px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    text-align: right;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 8px;
        max-width: 60px;
    }
`;

export const StyledDescriptionTextarea = styled.textarea`
    margin-top: 8px;
    resize: none;
    width: 100%;
    max-width: 200px;
    height: 60px;
    padding: 8px 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 8px;
        height: 50px;
        max-width: 150px;
    }
`;

export const StyledDeleteButton = styled.button`
    height: 32px;
    width: 32px;
    background: none;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: ${colors.lightGray};
    }

    &:active {
        background-color: ${colors.mediumGray};
    }

    & img {
        width: 16px;
        height: 16px;
    }
`;

export const StyledAddButton = styled.button`
    background: none;
    border: none;
    color: ${colors.lightBlue};
    font-weight: 500;
    padding: 1rem;
    &:hover {
        cursor: pointer;
    }
    &:active {
        opacity: 0.7;
    }
`;

export const StyledFormFooter = styled.div`
    padding: 0 1rem;
    & div:first-child {
        margin-right: 30px;
    }
    & span {
        font-size: 0.7rem;
    }
`;

export const StyledCostSummaries = styled.div`
    display: flex;
    /* justify-content: flex-end; */
    & div {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        /* flex-direction: column; */
        align-items: flex-end;
    }
`;

export const StyledCostSummaryAmounts = styled.div`
    text-align: right;
`;

export const StyledExtraDetails = styled.div`
    display: flex;
    gap: 2rem;
    & textarea {
        margin-top: 5px;
        resize: none;
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const StyledFormActionButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 32px;
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
`;

export const StyledCancelButton = styled.button`
    border-radius: 8px;
    border: 1px solid ${colors.borderGray};
    background: ${colors.lightGray};
    padding: 8px 32px;
    &:active {
        background: ${colors.mediumGray};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledSubmitButton = styled.button`
    border: none;
    border-radius: 8px;
    background: ${colors.lightBlue};
    padding: 8px 32px;
    color: ${colors.white};
    &:active {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
