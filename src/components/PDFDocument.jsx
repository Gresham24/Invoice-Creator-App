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
    },
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
    },
    header: {
        padding: "20px 40px",
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    headerH1: {
        fontSize: 24,
        marginBottom: 5,
    },
    headerText: {
        color: "#858585",
        fontSize: 16,
    },
    invoiceDetails: {
        padding: "24px 40px",
        backgroundColor: "white",
        fontSize: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    invoiceDetailsTextH1: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 2,
    },
    invoiceMetaInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "right",
    },
    invoiceMetaInfoWrapper: {
        alignItems: "flex-end",
        marginBottom: 8,
    },

    descriptionHeaders: {
        backgroundColor: "#EDEDED",
        padding: "10px 40px",
        fontSize: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
        fontSize: 10,
    },
    lineItem: {
        color: "#000",
        backgroundColor: "white",
        padding: "5px 0",
    },
    lineItemContainer: {
        minHeight: "45px",
        fontSize: 10,
        padding: "10px 0",
        margin: "0px 40px",
        borderBottom: "0.5px solid #d7dae0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
    },
    totalSummaries: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "10px 40px",
    },
    amountWrappers: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "33.33%",
        marginTop: 5,
        fontSize: 10,
    },
    extraInfoSection: {
        backgroundColor: "white",
        padding: "10px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontSize: 10,
    },
    extraInfoText: {
        color: "#858585",
        width: 300,
    },
    footer: {
        padding: "40px 40px",
        backgroundColor: "#f6f6f6",
        fontWeight: 700,
        fontSize: 10,
        width: "100%",
        bottom: 0,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        width: 40,
        height: 40,
    },
    imagePlaceholder: {
        width: 40,
        height: 40,
    },
    detailValue: {
        color: "#858585",
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
                                <View>
                                    <Text style={styles.invoiceDetailsTextH1}>
                                        From
                                    </Text>
                                    <Text style={styles.detailValue}>{companyDetails.name}</Text>
                                    <Text style={styles.detailValue}>{companyDetails.companyName}</Text>
                                    <Text style={styles.detailValue}>{companyDetails.companyAddress}</Text>
                                    <Text style={styles.detailValue}>{companyDetails.companyEmail}</Text>
                                </View>
                                <View>
                                    <Text style={styles.invoiceDetailsTextH1}>
                                        Billed To
                                    </Text>
                                    <Text style={styles.detailValue}>{formEntryDetails.customer}</Text>
                                    {formEntryDetails.customer && (
                                        <View>
                                            <Text style={styles.detailValue}>
                                                {
                                                    customerDetails[
                                                        formEntryDetails
                                                            .customer
                                                    ]?.address
                                                }
                                            </Text>
                                            <Text style={styles.detailValue}>
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
                                <View style={styles.invoiceMetaInfo}>
                                    <View style={styles.invoiceMetaInfoWrapper}>
                                        <Text
                                            style={styles.invoiceDetailsTextH1}
                                        >
                                            Purchase Order
                                        </Text>
                                        <Text style={styles.detailValue}>
                                            {formEntryDetails.purchaseOrder}
                                        </Text>
                                    </View>
                                    <View style={styles.invoiceMetaInfoWrapper}>
                                        <Text
                                            style={styles.invoiceDetailsTextH1}
                                        >
                                            Issued
                                        </Text>
                                        <Text style={styles.detailValue}>
                                            {formEntryDetails.issueDate}
                                        </Text>
                                    </View>
                                    <View style={styles.invoiceMetaInfoWrapper}>
                                        <Text
                                            style={styles.invoiceDetailsTextH1}
                                        >
                                            Due
                                        </Text>
                                        <Text style={styles.detailValue}>
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
                                        <Text>{lineItem.productService}</Text>
                                        <Text>{lineItem.description}</Text>
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
                        {/* Page Numbers */}
                        <View style={styles.footer}>
                            <View></View>
                            <Text style={styles.pageNumbers}>
                                {index + 1} / {pages.length}{" "}
                            </Text>
                        </View>

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
                                            },
                                        ]}
                                    >
                                        <Text>Amount Due</Text>
                                        <Text> {symbol} {formatAmount(totals.total)}</Text>
                                    </View>
                                </View>
                                <View style={styles.extraInfoSection}>
                                    {formEntryDetails.bankDetails && (
                                        <View>
                                            <Text>Payment Infomration:</Text>
                                            <Text>
                                                {formEntryDetails.bankDetails}
                                            </Text>
                                        </View>
                                    )}
                                    {formEntryDetails.notes && (
                                        <View>
                                            <Text>Notes:</Text>
                                            <Text style={styles.extraInfoText}>
                                                {formEntryDetails.notes}
                                            </Text>
                                        </View>
                                    )}
                                </View>

                                <View style={styles.footer}>
                                    <Text>Thank you for your purchase!</Text>
                                    <Text
                                        style={styles.pageNumbers}
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
