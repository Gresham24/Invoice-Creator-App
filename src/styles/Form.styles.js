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
        display: none;
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
        text-align: left;
    }
    &:nth-child(2) {
        width: 35%;
    }
    &:nth-child(3) {
        width: 10%;
        text-align: left;
    }
    &:nth-child(4) {
        width: 12%;
        text-align: left;
    }
    &:nth-child(5) {
        width: 10%;
        text-align: left;
    }
    &:nth-child(6) {
        width: 10%;
        text-align: left;
    }
    &:nth-child(7) {
        width: 10%;
        text-align: right;
    }
    &:nth-child(8) {
        width: 5%;
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

    @media (max-width: 768px) {
        width: 100%;
        padding: 16px;
        background: ${colors.lightBlue};
        color: white;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 20px;
        transition: background 0.2s;

        &:hover {
            background: #0056b3;
        }

        &:active {
            opacity: 0.8;
        }
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

// Mobile card-based styles
export const StyledItemCard = styled.div`
    border: 2px solid #f0f0f0;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    background: #fafafa;
    transition: all 0.2s ease;

    &:focus-within {
        border-color: ${colors.lightBlue};
        background: white;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

export const StyledItemCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
`;

export const StyledItemNumber = styled.div`
    background: ${colors.lightBlue};
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    flex-shrink: 0;
`;

export const StyledCardDeleteButton = styled.button`
    background: #ff4444;
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
        background: #cc0000;
    }
`;

export const StyledMainCardInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 8px;
    background: white;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }
`;

export const StyledDescriptionCardInput = styled.textarea`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 6px;
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
    background: white;
    resize: none;
    height: 60px;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }
`;

export const StyledDetailsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledInputLabel = styled.label`
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
    font-weight: 500;
`;

export const StyledCompactInput = styled.input`
    padding: 10px;
    border: 1px solid ${colors.borderGray};
    border-radius: 6px;
    font-size: 14px;
    background: white;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }
`;

export const StyledAdvancedToggle = styled.button`
    background: none;
    border: none;
    color: ${colors.lightBlue};
    font-size: 14px;
    cursor: pointer;
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const StyledAdvancedSection = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #eee;
`;

export const StyledItemTotal = styled.div`
    text-align: right;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 2px solid #eee;
`;

export const StyledMobileTable = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledItemsSection = styled.div`
    background: white;
    border-radius: 12px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        padding: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`;

export const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const StyledSectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
`;

export const StyledTotalBadge = styled.div`
    background: #e8f4fd;
    color: ${colors.lightBlue};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
`;
