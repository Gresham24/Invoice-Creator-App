import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { formatAmount } from "../../utils/formatCurrency";
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

import LineItem from "./FormLineItem";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export const FormDataContext = createContext();

const validationSchema = Yup.object().shape({
    details: Yup.object().shape({
        name: Yup.string().required("Full name is required"),
        companyName: Yup.string(),
        companyLogo: Yup.string().nullable(),
        companyAddress: Yup.string().required("Company address is required"),
        companyEmail: Yup.string().email("Invalid email").required("Company email is required"),
        companyNumber: Yup.string(),
        vatNumber: Yup.string(),
        invoiceNumber: Yup.string().required("Invoice number is required"),
        purchaseOrder: Yup.string(),
        issueDate: Yup.date().required("Issue date is required"),
        dueDate: Yup.string().required("Due date is required"),
        customDueDate: Yup.date().when("dueDate", {
            is: "custom",
            then: (schema) => schema.required("Custom due date is required"),
            otherwise: (schema) => schema.nullable(),
        }),
        customer: Yup.string().required("Customer is required"),
        customerData: Yup.object().when("customer", {
            is: "custom-customer",
            then: (schema) => schema.required("Customer details are required"),
            otherwise: (schema) => schema.nullable(),
        }),
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

    // Clean initial values for reset functionality
    const getInitialValues = () => ({
        details: {
            name: "",
            companyName: "",
            companyLogo: "",
            companyAddress: "",
            companyEmail: "",
            companyNumber: "",
            vatNumber: "",
            invoiceNumber: "",
            purchaseOrder: "",
            issueDate: getCurrentDate(),
            dueDate: "",
            customDueDate: "",
            customer: "",
            customerData: null,
            notes: "",
            bankDetails: "",
            currency: "ZAR",
        },
        items: [
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
        totals: {
            subtotal: 0,
            tax: 0,
            discount: 0,
            total: 0,
        },
    });

    const formik = useFormik({
        initialValues: formValues.items.length > 0 ? {
            details: {
                name: formValues.details?.name || "",
                companyName: formValues.details?.companyName || "",
                companyLogo: formValues.details?.companyLogo || "",
                companyAddress: formValues.details?.companyAddress || "",
                companyEmail: formValues.details?.companyEmail || "",
                companyNumber: formValues.details?.companyNumber || "",
                vatNumber: formValues.details?.vatNumber || "",
                invoiceNumber: formValues.details?.invoiceNumber || "",
                purchaseOrder: formValues.details?.purchaseOrder || "",
                issueDate: formValues.details?.issueDate || getCurrentDate(),
                dueDate: formValues.details?.dueDate || "",
                customDueDate: formValues.details?.customDueDate || "",
                customer: formValues.details?.customer || "",
                customerData: formValues.details?.customerData || null,
                notes: formValues.details?.notes || "",
                bankDetails: formValues.details?.bankDetails || "",
                currency: formValues.details?.currency || "ZAR",
            },
            items: formValues.items,
            totals: formValues.totals || {
                subtotal: 0,
                tax: 0,
                discount: 0,
                total: 0,
            },
        } : getInitialValues(),
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle due date based on selection
            let finalDueDate;
            if (values.details.dueDate === "custom") {
                finalDueDate = values.details.customDueDate;
            } else if (values.details.dueDate && values.details.issueDate) {
                // Calculate due date for predefined options
                const issueDate = new Date(values.details.issueDate);
                const daysToAdd = parseInt(values.details.dueDate);
                const dueDate = new Date(issueDate);
                dueDate.setDate(dueDate.getDate() + daysToAdd);
                finalDueDate = dueDate.toISOString().split('T')[0];
            } else {
                finalDueDate = values.details.dueDate;
            }
            
            setFormValues({
                details: { ...values.details, dueDate: finalDueDate, currency: values.details.currency },
                items: values.items,
                totals: calculateTotals(values.items),
            });
            navigate("preview");
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
                            {(() => {
                                const currency = formik.values.details.currency || 'USD';
                                const currencySymbols = {
                                    USD: '$',
                                    EUR: '€',
                                    GBP: '£',
                                    ZAR: 'R',
                                    CAD: '$',
                                    AUD: '$',
                                    JPY: '¥',
                                    CHF: 'CHF',
                                    CNY: '¥',
                                };
                                const symbol = currencySymbols[currency] || currency;
                                return `${formik.values.items.length} item${formik.values.items.length !== 1 ? 's' : ''} • ${symbol} ${formatAmount(formik.values.totals?.total || 0)}`;
                            })()}
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