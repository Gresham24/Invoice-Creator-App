import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import {
    StyledAddButton,
    StyledDescriptionHeaders,
} from "../../styles/Form.styles";

import { calculateTotals } from "../../utils/calculateTotals";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { calculateDueDate } from "../../utils/calculateDueDate";

import LineItem from "./FormLineItem";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export const FormDataContext = createContext();

const validationSchema = Yup.object().shape({
    details: Yup.object().shape({
        invoiceNumber: Yup.string().required("Invoice number is required"),
        purchaseOrder: Yup.string().required("Purchase order is required"),
        issueDate: Yup.date().required("Issue date is required"),
        dueDate: Yup.string().required("Due date is required"),
        customer: Yup.string().required("Customer is required"),
    }),
    items: Yup.array().of(
        Yup.object().shape({
            productService: Yup.string().required(
                "Product/Service is required"
            ),
            qty: Yup.number()
                .typeError("Quantity must be a number")
                .required("Quantity is required")
                .min(1, "Quantity must be at least 1"),
            price: Yup.number()
                .typeError("Price must be a valid number")
                .required("Price is required")
                .min(1, "Price must be at least 1"),
            taxPercentage: Yup.number()
                .typeError("Tax percentage must be a valid number")
                .min(0, "Tax percentage must be at least 0"),
            discountPercentage: Yup.number()
                .typeError("Discount percentage must be a valid number")
                .min(0, "Discount percentage must be at least 0"),
        })
    ),
});

export default function Form() {
    const { formValues, setFormValues } = useContext(FormDataContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            details: {
                invoiceNumber: "",
                purchaseOrder: "",
                issueDate: getCurrentDate(),
                dueDate: "",
                customer: "",
                notes: "",
                bankDetails: "",
                ...formValues.details,
            },
            items:
                formValues.items.length > 0
                    ? formValues.items
                    : [
                          {
                              id: 1,
                              productService: "",
                              description: "",
                              qty: 1,
                              price: "",
                              taxPercentage: "",
                              discountPercentage: "",
                          },
                      ],
            totals: formValues.totals || {
                subtotal: 0,
                tax: 0,
                discount: 0,
                total: 0,
            },
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const dueDate = calculateDueDate(
                values.details.issueDate,
                values.details.dueDate
            );
            setFormValues({
                details: { ...values.details, dueDate },
                items: values.items,
                totals: calculateTotals(values.items),
            });
            navigate("/preview");
        },
    });

    useEffect(() => {
        formik.setFieldValue("totals", calculateTotals(formik.values.items));
    }, [formik.values.items]);

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <FormHeader/>

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
                <FieldArray
                    name="items"
                    render={(arrayHelpers) => (
                        <div>
                            {formik.values.items.map((item, index) => (
                                <LineItem
                                    index={index}
                                    key={item.id}
                                    item={item}
                                    arrayHelpers={arrayHelpers}
                                />
                            ))}
                            <StyledAddButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    arrayHelpers.push({
                                        id: formik.values.items.length + 1,
                                        productService: "",
                                        description: "",
                                        qty: 1,
                                        price: "",
                                        taxPercentage: "",
                                        discountPercentage: "",
                                    });
                                }}
                            >
                                + Add a new item
                            </StyledAddButton>
                        </div>
                    )}
                />

                <hr />
                <FormFooter />
            </form>
        </FormikProvider>
    );
}