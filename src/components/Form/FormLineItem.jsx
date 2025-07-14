/* eslint-disable react/prop-types */
import { useField, useFormikContext } from "formik";
import { useState } from "react";
import {
    StyledTable,
    StyledTableBody,
    StyledTableRow,
    StyledTableCell,
    StyledInput,
    StyledProductServiceInput,
    StyledPriceInput,
    StyledQtyTaxDiscInput,
    StyledDescriptionTextarea,
    StyledDeleteButton,
    StyledItemCard,
    StyledItemCardHeader,
    StyledItemNumber,
    StyledCardDeleteButton,
    StyledMainCardInput,
    StyledDescriptionCardInput,
    StyledDetailsGrid,
    StyledInputGroup,
    StyledInputLabel,
    StyledCompactInput,
    StyledAdvancedToggle,
    StyledAdvancedSection,
    StyledItemTotal,
    StyledMobileTable,
    StyledDesktopItemNumber,
} from "../../styles/Form.styles";

const LineItem = ({ item, index, arrayHelpers }) => {
    const { errors, touched, handleChange } = useFormikContext();
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
    
    const [productServiceField] = useField(`items[${index}].productService`);
    const [descriptionField] = useField(`items[${index}].description`);
    const [qtyField] = useField(`items[${index}].qty`);
    const [priceField] = useField(`items[${index}].price`);
    const [taxPercentageField] = useField(`items[${index}].taxPercentage`);
    const [discountPercentageField] = useField(
        `items[${index}].discountPercentage`
    );

    const subtotal = (item.qty || 0) * (item.price || 0);
    const subTotalWithTax = subtotal * (1 + (item.taxPercentage || 0) / 100);
    const discountAmount = subTotalWithTax * ((item.discountPercentage || 0) / 100);
    const lineItemTotal = parseFloat(
        (subTotalWithTax - discountAmount).toFixed(2)
    );

    return (
        <>
            {/* Desktop Table Layout */}
            <StyledMobileTable>
                <StyledTable>
                    <StyledTableBody>
                        <StyledTableRow>
                            <StyledTableCell className="item-number">
                                <StyledDesktopItemNumber>{index + 1}</StyledDesktopItemNumber>
                            </StyledTableCell>
                            <StyledTableCell className="product-service">
                                <StyledInput>
                                    <label htmlFor={`items[${index}].productService`}>
                                        <StyledProductServiceInput
                                            {...productServiceField}
                                            onChange={handleChange}
                                            placeholder="Enter a product"
                                        />
                                        {errors.items?.[index]?.productService &&
                                            touched.items?.[index]?.productService && (
                                                <span>{errors.items[index].productService}</span>
                                            )}
                                    </label>
                                    <label htmlFor={`items[${index}].description`}>
                                        <StyledDescriptionTextarea
                                            {...descriptionField}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Enter a description... (Optional)"
                                        />
                                    </label>
                                </StyledInput>
                            </StyledTableCell>
                            <StyledTableCell className="qty">
                                <StyledInput>
                                    <label htmlFor={`items[${index}].qty`}>
                                        <StyledQtyTaxDiscInput
                                            {...qtyField}
                                            onChange={handleChange}
                                            type="number"
                                            inputMode="numeric"
                                        />
                                        {errors.items?.[index]?.qty &&
                                            touched.items?.[index]?.qty && (
                                                <span>{errors.items[index].qty}</span>
                                            )}
                                    </label>
                                </StyledInput>
                            </StyledTableCell>
                            <StyledTableCell className="price">
                                <StyledInput>
                                    <label htmlFor={`items[${index}].price`}>
                                        <StyledPriceInput
                                            {...priceField}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            type="number"
                                            inputMode="decimal"
                                        />
                                        {errors.items?.[index]?.price &&
                                            touched.items?.[index]?.price && (
                                                <span>{errors.items[index].price}</span>
                                            )}
                                    </label>
                                </StyledInput>
                            </StyledTableCell>
                            <StyledTableCell className="tax">
                                <StyledInput>
                                    <label htmlFor={`items[${index}].taxPercentage`}>
                                        <StyledQtyTaxDiscInput
                                            {...taxPercentageField}
                                            onChange={handleChange}
                                            placeholder="0"
                                            type="number"
                                            inputMode="numeric"
                                        />
                                        {errors.items?.[index]?.taxPercentage &&
                                            touched.items?.[index]?.taxPercentage && (
                                                <span>{errors.items[index].taxPercentage}</span>
                                            )}
                                    </label>
                                </StyledInput>
                            </StyledTableCell>
                            <StyledTableCell className="discount">
                                <StyledInput>
                                    <label htmlFor={`items[${index}].discountPercentage`}>
                                        <StyledQtyTaxDiscInput
                                            {...discountPercentageField}
                                            onChange={handleChange}
                                            placeholder="%0"
                                            type="number"
                                            inputMode="numeric"
                                        />
                                        {errors.items?.[index]?.discountPercentage &&
                                            touched.items?.[index]?.discountPercentage && (
                                                <span>{errors.items[index].discountPercentage}</span>
                                            )}
                                    </label>
                                </StyledInput>
                            </StyledTableCell>
                            <StyledTableCell className="total">
                                <div id={`itemTotal${index}`}>{lineItemTotal}</div>
                            </StyledTableCell>
                            <StyledTableCell className="actions">
                                {index > 0 && (
                                    <StyledDeleteButton 
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            arrayHelpers.remove(index);
                                        }}
                                    >
                                        ×
                                    </StyledDeleteButton>
                                )}
                            </StyledTableCell>
                        </StyledTableRow>
                    </StyledTableBody>
                </StyledTable>
            </StyledMobileTable>

            {/* Mobile Card Layout */}
            <StyledItemCard>
                <StyledItemCardHeader>
                    <StyledItemNumber>{index + 1}</StyledItemNumber>
                    {index > 0 && (
                        <StyledCardDeleteButton onClick={() => arrayHelpers.remove(index)}>
                            ×
                        </StyledCardDeleteButton>
                    )}
                </StyledItemCardHeader>
                
                <StyledMainCardInput
                    {...productServiceField}
                    onChange={handleChange}
                    placeholder="Enter product or service name"
                />
                {errors.items?.[index]?.productService &&
                    touched.items?.[index]?.productService && (
                        <span style={{color: '#ff4444', fontSize: '12px', marginBottom: '8px', display: 'block'}}>
                            {errors.items[index].productService}
                        </span>
                    )}
                
                <StyledDescriptionCardInput
                    {...descriptionField}
                    onChange={handleChange}
                    placeholder="Add description (optional)"
                />
                
                <StyledDetailsGrid>
                    <StyledInputGroup>
                        <StyledInputLabel>Quantity</StyledInputLabel>
                        <StyledCompactInput
                            {...qtyField}
                            onChange={handleChange}
                            type="number"
                            inputMode="numeric"
                        />
                        {errors.items?.[index]?.qty &&
                            touched.items?.[index]?.qty && (
                                <span style={{color: '#ff4444', fontSize: '10px', marginTop: '2px'}}>
                                    {errors.items[index].qty}
                                </span>
                            )}
                    </StyledInputGroup>
                    <StyledInputGroup>
                        <StyledInputLabel>Price</StyledInputLabel>
                        <StyledCompactInput
                            {...priceField}
                            onChange={handleChange}
                            type="number"
                            inputMode="decimal"
                            placeholder="0.00"
                        />
                        {errors.items?.[index]?.price &&
                            touched.items?.[index]?.price && (
                                <span style={{color: '#ff4444', fontSize: '10px', marginTop: '2px'}}>
                                    {errors.items[index].price}
                                </span>
                            )}
                    </StyledInputGroup>
                </StyledDetailsGrid>

                <StyledAdvancedToggle 
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsAdvancedOpen(!isAdvancedOpen);
                    }}
                >
                    <span>More options</span>
                    <span>{isAdvancedOpen ? '▲' : '▼'}</span>
                </StyledAdvancedToggle>

                <StyledAdvancedSection isOpen={isAdvancedOpen}>
                    <StyledDetailsGrid>
                        <StyledInputGroup>
                            <StyledInputLabel>Tax (%)</StyledInputLabel>
                            <StyledCompactInput
                                {...taxPercentageField}
                                onChange={handleChange}
                                type="number"
                                inputMode="numeric"
                                placeholder="0"
                            />
                            {errors.items?.[index]?.taxPercentage &&
                                touched.items?.[index]?.taxPercentage && (
                                    <span style={{color: '#ff4444', fontSize: '10px', marginTop: '2px'}}>
                                        {errors.items[index].taxPercentage}
                                    </span>
                                )}
                        </StyledInputGroup>
                        <StyledInputGroup>
                            <StyledInputLabel>Discount (%)</StyledInputLabel>
                            <StyledCompactInput
                                {...discountPercentageField}
                                onChange={handleChange}
                                type="number"
                                inputMode="numeric"
                                placeholder="0"
                            />
                            {errors.items?.[index]?.discountPercentage &&
                                touched.items?.[index]?.discountPercentage && (
                                    <span style={{color: '#ff4444', fontSize: '10px', marginTop: '2px'}}>
                                        {errors.items[index].discountPercentage}
                                    </span>
                                )}
                        </StyledInputGroup>
                    </StyledDetailsGrid>
                </StyledAdvancedSection>

                <StyledItemTotal>${lineItemTotal}</StyledItemTotal>
            </StyledItemCard>
        </>
    );
};

export default LineItem;
