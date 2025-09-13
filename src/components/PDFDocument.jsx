import { customerDetails } from "./formData";
import { formatAmount } from "../utils/formatCurrency";
// import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        fontFamily: "Helvetica",
        height: "100%",
        position: "relative",
        padding: "20px",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
    },
    header: {
        padding: "20px 30px",
        backgroundColor: "#f8f9fa",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #e0e0e0",
    },
    headerTitle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    headerH1: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#333",
        letterSpacing: 1,
    },
    headerText: {
        color: "#666",
        fontSize: 12,
        margin: 0,
        fontWeight: "normal",
    },
    invoiceDetails: {
        padding: "25px 30px",
        backgroundColor: "#ffffff",
        fontSize: 11,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: 120,
        lineHeight: 1.4,
    },
    invoiceDetailsTextH1: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    invoiceDetailsSection: {
        flex: 1,
        maxWidth: 200,
        paddingRight: 15,
    },
    invoiceDetailsSectionMiddle: {
        flex: 1,
        maxWidth: 200,
        padding: "0 15px",
    },
    invoiceDetailsText: {
        fontSize: 10,
        color: "#666",
        margin: "1px 0",
        lineHeight: 1.3,
    },
    invoiceMetaInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "right",
        minWidth: 150,
        flexShrink: 0,
        gap: 12,
    },
    invoiceMetaInfoWrapper: {
        alignItems: "flex-end",
        marginBottom: 4,
    },

    descriptionHeaders: {
        backgroundColor: "#f8f9fa",
        padding: "8px 30px",
        fontSize: 11,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
    },
    descriptionHeadersRightSection: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionHeadersRightDiv: {
        width: "33.33%",
        textAlign: "right",
        fontSize: 11,
        fontWeight: "bold",
    },
    lineItem: {
        color: "#333",
        backgroundColor: "#ffffff",
    },
    lineItemContainer: {
        minHeight: 40,
        fontSize: 10,
        padding: "8px 0",
        margin: "0px 30px",
        borderBottom: "0.5px solid #e0e0e0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    lineItemRightSection: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    lineItemRightSectionText: {
        width: "33.33%",
        textAlign: "right",
        fontSize: 10,
        margin: 0,
        color: "#333",
    },
    totalSummaries: {
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "15px 30px 0 0",
    },
    amountWrappers: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "35%",
        marginBottom: 6,
        fontSize: 11,
    },
    extraInfoSection: {
        backgroundColor: "#ffffff",
        padding: "20px 0px 15px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        fontSize: 10,
        minHeight: 60,
        marginBottom: 20,
    },
    extraInfoText: {
        color: "#666",
        width: 250,
        lineHeight: 1.3,
    },
    footer: {
        padding: "15px 30px",
        backgroundColor: "#f8f9fa",
        fontWeight: "normal",
        fontSize: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
    },
    pageNumbersFooter: {
        padding: "8px 30px",
        backgroundColor: "#f8f9fa",
        fontWeight: "normal",
        fontSize: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
    },
    image: {
        width: 50,
        height: 50,
        maxWidth: 50,
        maxHeight: 50,
    },
    imagePlaceholder: {
        width: 50,
        height: 50,
    },
    detailValue: {
        color: "#666",
    },
    lineItemDescription: {
        fontSize: 9,
        color: "#666",
        lineHeight: 1.2,
        marginTop: 1,
    },
    lineItemProduct: {
        fontSize: 10,
        color: "#333",
        fontWeight: "bold",
        marginBottom: 1,
    },
});

const firstPageItems = 9;
const subsequentPageItems = 11;

// eslint-disable-next-line react/prop-types
const PDFDocument = ({ formValues, totals }) => {
    // Storing saved invoice details
    const formEntryDetails = {
        invoiceNumber: formValues.details.invoiceNumber,
        purchaseOrder: formValues.details.purchaseOrder,
        customer: formValues.details.customer,
        customerData: formValues.details.customerData,
        issueDate: formValues.details.issueDate,
        dueDate: formValues.details.dueDate,
        notes: formValues.details.notes,
        bankDetails: formValues.details.bankDetails,
    };
    const companyDetails = {
        name: formValues.details.name,
        companyName: formValues.details.companyName,
        companyLogo: formValues.details.companyLogo,
        companyAddress: formValues.details.companyAddress,
        companyEmail: formValues.details.companyEmail,
    };

    const currency = formValues.details.currency || "USD";
    const currencySymbols = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        ZAR: "R",
        CAD: "$",
        AUD: "$",
        JPY: "¥",
        CHF: "CHF",
        CNY: "¥",
    };
    const symbol = currencySymbols[currency] || currency;

    // Split items into groups of firstPageItems for the first page and subsequentPageItems for subsequent pages
    const pages = [];
    let currentPage = [];

    formValues.items.forEach((item) => {
        const itemsPerPage =
            pages.length === 0 ? firstPageItems : subsequentPageItems;
        if (currentPage.length < itemsPerPage) {
            currentPage.push(item);
        } else {
            pages.push(currentPage);
            currentPage = [item];
        }
    });

    if (currentPage.length > 0) {
        pages.push(currentPage);
    }
    return (
        <Document>
            {pages.map((items, index) => (
                <Page key={index} wrap size="A4" style={styles.page}>
                    <View style={styles.container}>
                        {/* Header Section */}
                        <View style={styles.header}>
                            {companyDetails.companyLogo ? (
                                <Image
                                    src={companyDetails.companyLogo}
                                    style={styles.image}
                                />
                            ) : (
                                <View style={styles.imagePlaceholder} />
                            )}
                            <View style={styles.headerTitle}>
                                <Text style={styles.headerH1}>INVOICE</Text>
                                <Text
                                    style={styles.headerText}
                                >{`NO. ${formEntryDetails.invoiceNumber}`}</Text>
                            </View>
                        </View>

                        {/* Conditional Rendering of Invoice Details */}
                        {index === 0 && (
                            <View style={styles.invoiceDetails}>
                                <View style={styles.invoiceDetailsSection}>
                                    <Text style={styles.invoiceDetailsTextH1}>
                                        From
                                    </Text>
                                    <Text style={styles.invoiceDetailsText}>{companyDetails.name}</Text>
                                    {companyDetails.companyName && <Text style={styles.invoiceDetailsText}>{companyDetails.companyName}</Text>}
                                    <Text style={styles.invoiceDetailsText}>{companyDetails.companyAddress}</Text>
                                    <Text style={styles.invoiceDetailsText}>{companyDetails.companyEmail}</Text>
                                </View>
                                <View style={styles.invoiceDetailsSectionMiddle}>
                                    <Text style={styles.invoiceDetailsTextH1}>
                                        Billed To
                                    </Text>
                                    {formEntryDetails.customer === "custom-customer" && formEntryDetails.customerData ? (
                                        <View>
                                            {formEntryDetails.customerData.companyName && <Text style={styles.invoiceDetailsText}>{formEntryDetails.customerData.companyName}</Text>}
                                            {formEntryDetails.customerData.contactName && <Text style={styles.invoiceDetailsText}>{formEntryDetails.customerData.contactName}</Text>}
                                            <Text style={styles.invoiceDetailsText}>{formEntryDetails.customerData.companyAddress}</Text>
                                            <Text style={styles.invoiceDetailsText}>{formEntryDetails.customerData.email}</Text>
                                            <Text style={styles.invoiceDetailsText}>{formEntryDetails.customerData.phoneNumber}</Text>
                                        </View>
                                    ) : (
                                        <View>
                                            <Text style={styles.invoiceDetailsText}>{formEntryDetails.customer}</Text>
                                            {formEntryDetails.customer && (
                                                <View>
                                                    <Text style={styles.invoiceDetailsText}>
                                                        {
                                                            customerDetails[
                                                                formEntryDetails
                                                                    .customer
                                                            ]?.address
                                                        }
                                                    </Text>
                                                    <Text style={styles.invoiceDetailsText}>
                                                        {
                                                            customerDetails[
                                                                formEntryDetails
                                                                    .customer
                                                            ]?.phone
                                                        }
                                                    </Text>
                                                </View>
                                            )}
                                        </View>
                                    )}
                                </View>
                                <View style={styles.invoiceMetaInfo}>
                                    {formEntryDetails.purchaseOrder && formEntryDetails.purchaseOrder.trim() !== '' && (
                                        <View style={styles.invoiceMetaInfoWrapper}>
                                            <Text
                                                style={styles.invoiceDetailsTextH1}
                                            >
                                                Purchase Order
                                            </Text>
                                            <Text style={styles.invoiceDetailsText}>
                                                {formEntryDetails.purchaseOrder}
                                            </Text>
                                        </View>
                                    )}
                                    <View style={styles.invoiceMetaInfoWrapper}>
                                        <Text
                                            style={styles.invoiceDetailsTextH1}
                                        >
                                            Issued
                                        </Text>
                                        <Text style={styles.invoiceDetailsText}>
                                            {formEntryDetails.issueDate}
                                        </Text>
                                    </View>
                                    <View style={styles.invoiceMetaInfoWrapper}>
                                        <Text
                                            style={styles.invoiceDetailsTextH1}
                                        >
                                            Due
                                        </Text>
                                        <Text style={styles.invoiceDetailsText}>
                                            {formEntryDetails.dueDate && 
                                                (formEntryDetails.dueDate.includes('-') ? 
                                                    new Date(formEntryDetails.dueDate).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    }) : 
                                                    formEntryDetails.dueDate)
                                            }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        {/* Conditional Rendering of Description Headers */}
                        <View wrap style={styles.descriptionHeaders}>
                            <View>
                                <Text>Item</Text>
                            </View>
                            <View style={styles.descriptionHeadersRightSection}>
                                <View style={styles.descriptionHeadersRightDiv}>
                                    <Text>Qty</Text>
                                </View>
                                <View style={styles.descriptionHeadersRightDiv}>
                                    <Text>Price</Text>
                                </View>
                                <View style={styles.descriptionHeadersRightDiv}>
                                    <Text>Total</Text>
                                </View>
                            </View>
                        </View>

                        {/* Line Items Section */}
                        {items.map((lineItem) => (
                            <View
                                wrap
                                key={lineItem.id}
                                style={styles.lineItem}
                            >
                                {/* Line item details */}
                                <View wrap style={styles.lineItemContainer}>
                                    <View>
                                        <Text style={styles.lineItemProduct}>{lineItem.productService}</Text>
                                        <Text style={styles.lineItemDescription}>{lineItem.description}</Text>
                                    </View>
                                    <View style={styles.lineItemRightSection}>
                                        <Text
                                            style={
                                                styles.lineItemRightSectionText
                                            }
                                        >
                                            {lineItem.qty}
                                        </Text>
                                        <Text
                                            style={
                                                styles.lineItemRightSectionText
                                            }
                                        >
                                            {symbol} {formatAmount(lineItem.price)}
                                        </Text>
                                        <Text
                                            style={
                                                styles.lineItemRightSectionText
                                            }
                                        >
                                            {symbol} {formatAmount(lineItem.qty * lineItem.price)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                        {/* Page Numbers - Only show on pages that aren't the last page */}
                        {index !== pages.length - 1 && (
                            <View style={styles.pageNumbersFooter}>
                                <Text style={styles.pageNumbers}>
                                    {index + 1} / {pages.length}{" "}
                                </Text>
                            </View>
                        )}

                        {/* Summary and Footer */}
                        {index === pages.length - 1 && (
                            <>
                                <View wrap style={styles.totalSummaries}>
                                    <View style={styles.amountWrappers}>
                                        <Text>Subtotal</Text>
                                        <Text>
                                            {symbol} {formatAmount(totals.subtotal)}
                                        </Text>
                                    </View>
                                    <View style={styles.amountWrappers}>
                                        <Text>Tax</Text>
                                        <Text>{symbol} {formatAmount(totals.tax)}</Text>
                                    </View>
                                    <View style={styles.amountWrappers}>
                                        <Text>Discount</Text>
                                        <Text>
                                            {symbol} {formatAmount(totals.discount)}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.amountWrappers,
                                            {
                                                padding: "10px 0px 10px 0px",
                                                borderBottom:
                                                    "3px solid #d7dae0",
                                                borderTop: "3px solid #d7dae0",
                                                fontWeight: "bold",
                                            },
                                        ]}
                                    >
                                        <Text style={{ fontWeight: "bold" }}>Amount Due</Text>
                                        <Text style={{ fontWeight: "bold" }}> {symbol} {formatAmount(totals.total)}</Text>
                                    </View>
                                </View>
                                <View wrap style={styles.extraInfoSection}>
                                    {formEntryDetails.bankDetails && (
                                        <View wrap>
                                            <Text style={{ fontWeight: 600, color: "#333", marginBottom: 4 }}>Payment Information:</Text>
                                            <Text wrap style={styles.extraInfoText}>
                                                {formEntryDetails.bankDetails}
                                            </Text>
                                        </View>
                                    )}
                                    {formEntryDetails.notes && (
                                        <View wrap>
                                            <Text style={{ fontWeight: 600, color: "#333", marginBottom: 4 }}>Notes:</Text>
                                            <Text wrap style={styles.extraInfoText}>
                                                {formEntryDetails.notes}
                                            </Text>
                                        </View>
                                    )}
                                </View>

                                <View style={styles.footer}>
                                    <Text style={{ color: "#333" }}>Thank you for your purchase!</Text>
                                    <Text
                                        style={[styles.pageNumbers, { color: "#333" }]}
                                        render={({ pageNumber, totalPages }) =>
                                            `${pageNumber} / ${totalPages}`
                                        }
                                        fixed
                                    />
                                </View>
                            </>
                        )}
                    </View>
                </Page>
            ))}
        </Document>
    );
};

export default PDFDocument;
