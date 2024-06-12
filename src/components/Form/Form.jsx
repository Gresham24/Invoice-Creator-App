import { createContext, useContext, useEffect, useState } from "react";
import { companyDetails, customerDetails } from "../formData";
import { useNavigate } from "react-router-dom";
import {
    StyledFormHeader,
    StyledFormFooter,
    StyledAddButton,
    StyledDescriptionHeaders,
    StyledCostSummaries,
    StyledCostSummaryAmounts,
    StyledExtraDetails,
    StyledFormActionButtons,
    StyledCancelButton,
    StyledSubmitButton,
} from "../../styles/Form.styles";

import { calculateTotals } from "../../utils/calculateTotals";
import { validateField, validateForm } from "../../utils/formValidation";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { calculateDueDate } from "../../utils/calculateDueDate";

import LineItem from "./FormLineItem";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export const FormDataContext = createContext();

export default function Form() {
    const { formValues, setFormValues } = useContext(FormDataContext);
    const navigate = useNavigate();

    const [items, setItems] = useState(
        formValues.items.length > 0
            ? formValues.items
            : [
                  {
                      id: 1,
                      productService: "",
                      description: "",
                      qty: 1,
                      price: 0,
                      taxPercentage: "",
                      discountPercentage: "",
                  },
              ]
    );

    const initialNextItemId =
        items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 2;
    const [nextItemId, setNextItemId] = useState(initialNextItemId);

    const [totals, setTotals] = useState(formValues.totals);
    const [details, setDetails] = useState({
        ...formValues.details,
        issueDate: formValues.details.issueDate || getCurrentDate(),
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setTotals(calculateTotals(items));
    }, [items]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
        validateField(name, value, setErrors);
    };

    const handleAddNewItem = (event) => {
        event.preventDefault();
        setItems((prevItems) => [
            ...prevItems,
            {
                id: nextItemId,
                productService: "",
                description: "",
                qty: 1,
                price: 0,
                taxPercentage: 0,
                discountPercentage: 0,
            },
        ]);
        setNextItemId((prevId) => prevId + 1);
    };

    const handleUpdateItem = (id, name, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, [name]: value } : item
            )
        );
        validateField(name, value, setErrors);
    };

    const handleDeleteItem = (itemId) => {
        setItems((oldItems) => oldItems.filter((item) => item.id !== itemId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(details, items, setErrors)) {
            const dueDate = calculateDueDate(
                details.issueDate,
                details.dueDate
            );
            setFormValues({ details: { ...details, dueDate }, items, totals });
            navigate("/preview");
        } else {
            alert("Please fill in all the necessary fields in the form.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormHeader
                details={details}
                errors={errors}
                handleChange={handleChange}
            />

            <hr />

            <StyledDescriptionHeaders>
                <div>Item</div>
                <div>Product / Service</div>
                <div>QTY</div>
                <div>Price</div>
                <div>TAX</div>
                <div>Discount</div>
                <div>Total</div>
            </StyledDescriptionHeaders>
            <div>
                <div>
                    {items.map((item, index) => (
                        <LineItem
                            index={index}
                            key={item.id}
                            item={item}
                            onUpdate={handleUpdateItem}
                            onDelete={handleDeleteItem}
                            errors={errors}
                        />
                    ))}
                </div>
                <StyledAddButton onClick={handleAddNewItem}>
                    + Add a new item
                </StyledAddButton>
            </div>

            <hr />
            <FormFooter
                totals={totals}
                details={details}
                errors={errors}
                handleChange={handleChange}
            />
        </form>
    );
}
