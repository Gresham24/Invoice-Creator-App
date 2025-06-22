/* eslint-disable react/prop-types */
import { useField, useFormikContext } from "formik";
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
} from "../../styles/Form.styles";

const LineItem = ({ item, index, arrayHelpers }) => {
    const { errors, touched, handleChange } = useFormikContext();
    const [productServiceField] = useField(`items[${index}].productService`);
    const [descriptionField] = useField(`items[${index}].description`);
    const [qtyField] = useField(`items[${index}].qty`);
    const [priceField] = useField(`items[${index}].price`);
    const [taxPercentageField] = useField(`items[${index}].taxPercentage`);
    const [discountPercentageField] = useField(
        `items[${index}].discountPercentage`
    );

    const subtotal = item.qty * item.price;
    const subTotalWithTax = subtotal * (1 + item.taxPercentage / 100);
    const discountAmount = subTotalWithTax * (item.discountPercentage / 100);
    const lineItemTotal = parseFloat(
        (subTotalWithTax - discountAmount).toFixed(2)
    );

    return (
        <StyledTable>
            <StyledTableBody>
                <StyledTableRow>
                    <StyledTableCell className="item-number">
                        {index + 1}
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
                                    placeholder="%0"
                                    type="number"
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
                            <StyledDeleteButton onClick={() => arrayHelpers.remove(index)}>
                                <img src="/delete_icon.svg" alt="delete button" />
                            </StyledDeleteButton>
                        )}
                    </StyledTableCell>
                </StyledTableRow>
            </StyledTableBody>
        </StyledTable>
    );
};

export default LineItem;
