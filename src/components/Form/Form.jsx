import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import {
    StyledAddButton,
    StyledDescriptionHeaders,
    StyledTable,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledItemsSection,
    StyledSectionHeader,
    StyledSectionTitle,
    StyledTotalBadge,
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
        name: Yup.string().required("Full name is required"),
        companyName: Yup.string().required("Company name is required"),
        companyLogo: Yup.string().nullable(),
        companyAddress: Yup.string().required("Company address is required"),
        companyEmail: Yup.string().email("Invalid email").required("Company email is required"),
        invoiceNumber: Yup.string().required("Invoice number is required"),
        purchaseOrder: Yup.string().required("Purchase order is required"),
        issueDate: Yup.date().required("Issue date is required"),
        dueDate: Yup.string().required("Due date is required"),
        customer: Yup.string().required("Customer is required"),
    }),
    items: Yup.array().of(
        Yup.object().shape({
            productService: Yup.string().required(
                "Required"
            ),
            qty: Yup.number()
                .required("Required")
                .min(1, "Quantity must be at least 1"),
            price: Yup.number()
                .required("Required")
                .min(1, "Price must be at least 1"),
            taxPercentage: Yup.number()
                .min(0, "Tax percentage must be at least 0"),
            discountPercentage: Yup.number()
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
                name: formValues.details?.name || "",
                companyName: formValues.details?.companyName || "",
                companyLogo: formValues.details?.companyLogo || "",
                companyAddress: formValues.details?.companyAddress || "",
                companyEmail: formValues.details?.companyEmail || "",
                invoiceNumber: "",
                purchaseOrder: "",
                issueDate: getCurrentDate(),
                dueDate: "",
                customer: "",
                notes: "",
                bankDetails: "",
                currency: formValues.details?.currency || "ZAR",
                ...formValues.details,
            },
            items:
                formValues.items.length > 0
                    ? formValues.items
                    : [
                          {
                              id: uuidv4(),
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
            const dueDate = values.details.calculatedDueDate || calculateDueDate(
                values.details.issueDate,
                values.details.dueDate
            );
            setFormValues({
                details: { ...values.details, dueDate, currency: values.details.currency },
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

                <StyledItemsSection>
                    <StyledSectionHeader>
                        <StyledSectionTitle>Items & Services</StyledSectionTitle>
                        <StyledTotalBadge>
                            {formik.values.items.length} item{formik.values.items.length !== 1 ? 's' : ''} • ${(formik.values.totals?.total || 0).toFixed(2)}
                        </StyledTotalBadge>
                    </StyledSectionHeader>

                    <StyledDescriptionHeaders>
                        <StyledTable>
                            <StyledTableHeader>
                                <tr>
                                    <StyledTableHeaderCell>Item</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>Product / Service</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>QTY</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>Price</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>TAX</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>Discount</StyledTableHeaderCell>
                                    <StyledTableHeaderCell>Total</StyledTableHeaderCell>
                                    <StyledTableHeaderCell></StyledTableHeaderCell>
                                </tr>
                            </StyledTableHeader>
                        </StyledTable>
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
                                            id: uuidv4(),
                                            productService: "",
                                            description: "",
                                            qty: 1,
                                            price: "",
                                            taxPercentage: "",
                                            discountPercentage: "",
                                        });
                                    }}
                                >
                                    + Add another item
                                </StyledAddButton>
                            </div>
                        )}
                    />
                </StyledItemsSection>

                <hr />
                <FormFooter />
            </form>
        </FormikProvider>
    );
}