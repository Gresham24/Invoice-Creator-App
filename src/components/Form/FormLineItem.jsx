import React from "react";
import {
    StyledDescriptionRow,
    StyledInput,
    StyledProductServiceInput,
    StyledPriceInput,
    StyledQtyTaxDiscInput,
    StyledDescriptionTextarea,
    StyledDeleteButton,
} from "../../styles/Form.styles";

const LineItem = ({ item, onUpdate, onDelete, index, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(item.id, name, value);
    };

    const subtotal = item.qty * item.price;
    const subTotalWithTax = subtotal * (1 + item.taxPercentage / 100);
    const discountAmount = subTotalWithTax * (item.discountPercentage / 100);
    const lineItemTotal = parseFloat(
        (subTotalWithTax - discountAmount).toFixed(2)
    );

    return (
        <StyledDescriptionRow>
            <div>{index + 1}</div>
            <StyledInput>
                <label htmlFor="productService">
                    <StyledProductServiceInput
                        name="productService"
                        type="text"
                        value={item.productService || ""}
                        onChange={handleChange}
                        placeholder="Enter a product"
                    />
                    {errors[`productService${index}`] && (
                        <span>{errors[`productService${index}`]}</span>
                    )}
                </label>
                <label htmlFor="description">
                    <StyledDescriptionTextarea
                        name="description"
                        type="text"
                        rows="3"
                        value={item.description || ""}
                        onChange={handleChange}
                        placeholder="Enter a description... (Optional)"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="qty">
                    <StyledQtyTaxDiscInput
                        name="qty"
                        type="number"
                        value={item.qty || ""}
                        onChange={handleChange}
                    />
                    {errors[`qty${index}`] && (
                        <span>{errors[`qty${index}`]}</span>
                    )}
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="price">
                    <StyledPriceInput
                        name="price"
                        type="number"
                        value={item.price || ""}
                        onChange={handleChange}
                        placeholder="0.00"
                    />
                    {errors[`price${index}`] && (
                        <span>{errors[`price${index}`]}</span>
                    )}
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="taxPercentage">
                    <StyledQtyTaxDiscInput
                        name="taxPercentage"
                        type="number"
                        value={item.taxPercentage || ""}
                        onChange={handleChange}
                        placeholder="% 0"
                    />
                </label>
            </StyledInput>
            <StyledInput>
                <label htmlFor="discountPercentage">
                    <StyledQtyTaxDiscInput
                        name="discountPercentage"
                        type="number"
                        value={item.discountPercentage || ""}
                        onChange={handleChange}
                        placeholder="%  0"
                    />
                </label>
            </StyledInput>
            <div id={"itemTotal" + index}>{lineItemTotal}</div>
            {index > 0 && (
                <StyledDeleteButton onClick={() => onDelete(item.id)}>
                    <img src="/delete_icon.svg" alt="delete button" />
                </StyledDeleteButton>
            )}
        </StyledDescriptionRow>
    );
};

export default LineItem;
