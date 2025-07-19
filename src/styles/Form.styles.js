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
    gap: 0;
    padding: 0 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

// Desktop section styles matching new HTML design
export const StyledDesktopSection = styled.div`
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    margin-bottom: 20px;
    max-width: 1200px;
    margin: 0 auto 20px auto;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledDesktopSectionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
    
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledDesktopSectionInner = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    transition: background 0.2s ease;
    
    &.company-section {
        background: ${colors.companyGradient};
        border-right: 1px solid #f0f0f0;
        
        &:focus-within {
            background: linear-gradient(135deg, #e6f2ff 0%, #ddeeff 100%);
        }
        
        @media (max-width: 1024px) {
            border-right: none;
            border-bottom: 1px solid #f0f0f0;
        }
    }
    
    &.invoice-section {
        background: ${colors.invoiceGradient};
        
        &:focus-within {
            background: linear-gradient(135deg, #fff2e6 0%, #ffebdb 100%);
        }
    }
    
    @media (max-width: 768px) {
        padding: 24px;
    }
    
    @media (max-width: 480px) {
        padding: 20px;
    }
`;

export const StyledDesktopSectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const StyledDesktopSectionIcon = styled.span`
    width: 24px;
    height: 24px;
    background: ${colors.sectionIconBg};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    flex-shrink: 0;
`;

export const StyledDesktopFormGroup = styled.div`
    margin-bottom: 20px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledDesktopFormLabel = styled.label`
    display: block;
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
`;

export const StyledDesktopOptionalBadge = styled.span`
    background: #f0f0f0;
    color: #666;
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 4px;
    margin-left: 8px;
    font-weight: normal;
`;

export const StyledDesktopFormInput = styled.input`
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }
    
    &::placeholder {
        color: #999;
    }
`;

export const StyledDesktopFormSelect = styled.select`
    width: 100%;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 14px center;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-right: 45px;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }
`;

export const StyledDesktopInputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const StyledDesktopInputRowThree = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 120px;
    gap: 16px;
    align-items: end;
    
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        
        .currency-selector {
            grid-column: 1 / -1;
        }
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const StyledDesktopLogoUpload = styled.div`
    border: 2px dashed #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    background: #fafafa;
    transition: all 0.2s;
    cursor: pointer;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    &:hover {
        border-color: ${colors.lightBlue};
        background: #f0f6ff;
        
        .logo-icon {
            background: ${colors.lightBlue};
            color: white;
        }
    }
    
    &.has-file {
        border-color: ${colors.lightBlue};
        background: #f0f6ff;
    }
`;

export const StyledDesktopLogoIcon = styled.div`
    width: 48px;
    height: 48px;
    background: #e6f2ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    color: ${colors.lightBlue};
    font-size: 20px;
    transition: all 0.2s;
`;

export const StyledDesktopLogoText = styled.div`
    font-size: 15px;
    color: #666;
    margin-bottom: 6px;
    font-weight: 500;
`;

export const StyledDesktopLogoSubtext = styled.div`
    font-size: 13px;
    color: #999;
`;

export const StyledDesktopCurrencySelector = styled.div`
    display: flex;
    flex-direction: column;
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
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 24px;
    background-color: ${colors.white};
    border-radius: 8px;
    border: 1px solid #e9ecef;
    overflow: hidden;
`;

export const StyledTableHeader = styled.thead`
    background-color: #f8f9fa;
    font-weight: 600;
    font-size: 14px;
    color: #666;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    background: #fafafa;
    border-bottom: 8px solid #f5f7fa;
    transition: all 0.2s ease;

    &:hover {
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    &:focus-within {
        background: white;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }

    &:last-child {
        border-bottom: none;
        border-radius: 0 0 8px 8px;
    }
`;

export const StyledTableCell = styled.td`
    padding: 16px 12px;
    vertical-align: top;
    border: none;

    &.item-number {
        width: 50px;
        text-align: center;
    }

    &.product-service {
        width: 400px;
    }

    &.qty {
        width: 80px;
        text-align: center;
    }

    &.price {
        width: 100px;
        text-align: center;
    }

    &.tax {
        width: 80px;
        text-align: center;
    }

    &.discount {
        width: 100px;
        text-align: center;
    }

    &.total {
        width: 120px;
        text-align: right;
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
    }

    &.actions {
        width: 60px;
        text-align: center;
    }

    @media (max-width: 1024px) {
        &.product-service {
            width: 300px;
        }
    }

    @media (max-width: 768px) {
        padding: 0.75rem 0.5rem;
    }
`;

export const StyledTableHeaderCell = styled.th`
    padding: 16px 12px;
    text-align: left;
    font-weight: 600;
    color: #666;
    border-bottom: 2px solid #e9ecef;

    &:first-child {
        width: 50px;
        text-align: center;
        border-radius: 8px 0 0 0;
    }
    &:nth-child(2) {
        width: 400px;
    }
    &:nth-child(3) {
        width: 80px;
        text-align: center;
    }
    &:nth-child(4) {
        width: 100px;
        text-align: center;
    }
    &:nth-child(5) {
        width: 80px;
        text-align: center;
    }
    &:nth-child(6) {
        width: 100px;
        text-align: center;
    }
    &:nth-child(7) {
        width: 120px;
        text-align: right;
    }
    &:last-child {
        width: 60px;
        text-align: center;
        border-radius: 0 8px 0 0;
    }

    @media (max-width: 1024px) {
        &:nth-child(2) {
            width: 300px;
        }
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
    max-width: 380px;
    padding: 8px 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    background: white;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }

    @media (max-width: 1024px) {
        max-width: 280px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 8px;
        max-width: 100%;
    }
`;

export const StyledPriceInput = styled.input`
    width: 100%;
    max-width: 80px;
    padding: 8px 4px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    background: white;
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
        max-width: 70px;
    }
`;

export const StyledQtyTaxDiscInput = styled.input`
    width: 100%;
    max-width: 60px;
    padding: 8px 4px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    background: white;
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
        max-width: 50px;
    }
`;

export const StyledDescriptionTextarea = styled.textarea`
    resize: none;
    width: 100%;
    max-width: 380px;
    height: 60px;
    padding: 8px 12px;
    border: 1px solid ${colors.borderGray};
    border-radius: 4px;
    font-size: 13px;
    color: #666;
    background: white;
    line-height: 1.4;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
    }

    &::placeholder {
        color: #999;
    }

    @media (max-width: 1024px) {
        max-width: 280px;
    }

    @media (max-width: 600px) {
        max-width: 180px;
        font-size: 11px;
        padding: 6px 8px;
        height: 50px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 8px;
        height: 50px;
        max-width: 100%;
    }
`;

export const StyledDeleteButton = styled.button`
    height: 32px;
    width: 32px;
    background: #ff4444;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
    margin: 0 auto;

    &:hover {
        background: #cc0000;
        transform: scale(1.1);
    }

    & img {
        width: 16px;
        height: 16px;
        filter: invert(1);
    }
`;

export const StyledAddButton = styled.button`
    width: 100%;
    padding: 16px;
    background: ${colors.lightBlue};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
    transition: background 0.2s;

    &:hover {
        background:#51c0c2;
    }

    &:active {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        margin-top: 20px;
        border-radius: 12px;
    }
`;

export const StyledFormFooter = styled.div`
    padding: 0 32px 32px;

    @media (max-width: 1024px) {
        padding: 0 24px 24px;
    }

    @media (max-width: 768px) {
        padding: 0 16px 16px;
    }
`;

export const StyledCostSummaries = styled.div`
    display: flex;
    & div {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
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

export const StyledSummarySection = styled.div`
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 48px;
    margin-top: 40px;
    margin-bottom: 32px;
    align-items: start;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 320px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledMobileSummarySection = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const StyledNotesSection = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 24px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export const StyledNotesTitle = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
`;

export const StyledNotesInput = styled.textarea`
    padding: 16px;
    border: 1px solid ${colors.borderGray};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    resize: vertical;
    min-height: 120px;
    background: white;
    transition: all 0.2s ease;
    width: 100%;
    max-width: 100%;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    &::placeholder {
        color: ${colors.gray};
    }
`;

export const StyledSummaryCard = styled.div`
    margin-top: 20px;
    background: #f8f9fa;
    border-radius: 12px;
    padding: 28px;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    position: sticky;
    top: 20px;
`;

export const StyledSummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 1.4;

    &:last-child:not(.total) {
        margin-bottom: 0;
    }

    span:first-child {
        color: #666;
        font-weight: 500;
        justify-self: start;
    }

    span:last-child {
        font-weight: 600;
        color: #1a1a1a;
        font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace;
        letter-spacing: 0.5px;
        justify-self: end;
        white-space: nowrap;
        text-align: right;
    }

    &.total {
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        border-top: 2px solid #ddd;
        padding-top: 20px;
        margin-top: 20px;
        margin-bottom: 0;

        span:first-child {
            color: #1a1a1a;
            font-weight: 600;
        }

        span:last-child {
            font-size: 20px;
            font-weight: 700;
            color: ${colors.lightBlue};
            font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono",
                monospace;
        }
    }
`;

export const StyledFormActionButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 16px;
    padding: 32px 0 0;
    border-top: 1px solid #e9ecef;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        padding: 24px 0 0;
        margin-top: 24px;
    }
`;

export const StyledCancelButton = styled.button`
    border-radius: 8px;
    border: 1px solid ${colors.borderGray};
    background: white;
    color: #666;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: #f8f9fa;
        border-color: #ccc;
    }

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
    color: ${colors.white};
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 8px rgba(46, 182, 184, 0.23);


    &:hover {
        background: #51c0c2;
        box-shadow: 0 4px 8px rgba(46, 182, 184, 0.23);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(46, 182, 184, 0.23);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// Mobile card-based styles with section styling
export const StyledItemCard = styled.div`
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
    overflow: hidden;

    &:focus-within {
        border-color: ${colors.lightBlue};
        background: ${colors.cardBackground};
        box-shadow: 0 4px 12px rgba(61, 173, 175, 0.15);
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

// New section-based mobile styles
export const StyledMobileSection = styled.div`
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    margin-bottom: 16px;
    
    @media (min-width: 769px) {
        display: none;
    }
`;

export const StyledMobileSectionInner = styled.div`
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s ease;
    
    &:last-child {
        border-bottom: none;
    }
    
    &:focus-within {
        background: ${colors.cardBackground};
    }
    
    &.company-section {
        background: ${colors.companyGradient};
        
        &:focus-within {
            background: linear-gradient(135deg, #e6f2ff 0%, #ddeeff 100%);
        }
    }
    
    &.invoice-section {
        background: ${colors.invoiceGradient};
        
        &:focus-within {
            background: linear-gradient(135deg, #fff2e6 0%, #ffebdb 100%);
        }
    }
`;

export const StyledMobileSectionTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 16px 0;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StyledMobileSectionIcon = styled.span`
    width: 20px;
    height: 20px;
    background: ${colors.sectionIconBg};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: bold;
    flex-shrink: 0;
`;

export const StyledMobileFormGroup = styled.div`
    margin-bottom: 16px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledMobileFormLabel = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 6px;
`;

export const StyledMobileOptionalBadge = styled.span`
    background: #f0f0f0;
    color: #666;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 8px;
    font-weight: normal;
`;

export const StyledMobileFormInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }
    
    &::placeholder {
        color: #999;
    }
    
    @media (max-width: 480px) {
        font-size: 16px; /* Prevents zoom on iOS */
    }
`;

export const StyledMobileFormSelect = styled.select`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-right: 40px;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }
    
    @media (max-width: 480px) {
        font-size: 16px; /* Prevents zoom on iOS */
    }
`;

export const StyledMobileFormTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    resize: vertical;
    min-height: 80px;
    transition: border-color 0.2s, box-shadow 0.2s;
    
    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }
    
    &::placeholder {
        color: #999;
    }
`;

export const StyledMobileInputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const StyledMobileLogoUpload = styled.div`
    border: 2px dashed #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background: #fafafa;
    transition: all 0.2s;
    cursor: pointer;
    
    &:hover {
        border-color: ${colors.lightBlue};
        background: #f0f6ff;
    }
    
    &.has-file {
        border-color: ${colors.lightBlue};
        background: #f0f6ff;
    }
`;

export const StyledMobileLogoIcon = styled.div`
    width: 40px;
    height: 40px;
    background: #e6f2ff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
    color: ${colors.lightBlue};
    font-size: 18px;
`;

export const StyledMobileLogoText = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
`;

export const StyledMobileLogoSubtext = styled.div`
    font-size: 12px;
    color: #999;
`;

export const StyledItemCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0f0f0;
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
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 8px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }

    &::placeholder {
        color: #999;
    }
    
    @media (max-width: 480px) {
        font-size: 16px; /* Prevents zoom on iOS */
    }
`;

export const StyledDescriptionCardInput = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
    background: white;
    resize: none;
    height: 60px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }

    &::placeholder {
        color: #999;
    }
`;

export const StyledDetailsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 580px) {
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
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        outline: none;
        border-color: ${colors.lightBlue};
        box-shadow: 0 0 0 3px ${colors.focusBlue};
    }

    &::placeholder {
        color: #999;
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

export const StyledAdvancedSection = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isOpen",
})`
    display: ${(props) => (props.isOpen ? "block" : "none")};
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

export const StyledDesktopItemNumber = styled.div`
    background: ${colors.lightBlue};
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    margin: 0 auto;
    transition: background 0.2s ease;

    .item-row:focus-within & {
        background: #0056b3;
    }
`;

export const StyledTotalBadge = styled.div`
    background: #e8f4fd;
    color: ${colors.lightBlue};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    @media (max-width: 768px) {
        padding: 6px 12px;
    }
`;

export const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const StyledSectionTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 18px;
    }
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
    padding: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const StyledMobileSummaryCard = styled.div`
    background: #f8f9fa;
    border-radius: 12px;
    padding: 28px;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    position: static;
    margin-bottom: 16px;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;
