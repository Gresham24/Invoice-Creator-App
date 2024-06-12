export const calculateTotals = (items) => {
    let subtotal = 0;
    let taxAmount = 0;
    let discountAmount = 0;

    items.forEach((item) => {
        const itemSubtotal = item.qty * item.price;
        subtotal += itemSubtotal;
        taxAmount += itemSubtotal * (item.taxPercentage / 100);
        discountAmount += itemSubtotal * (item.discountPercentage / 100);
    });

    const total = subtotal + taxAmount - discountAmount;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        tax: parseFloat(taxAmount.toFixed(2)),
        discount: parseFloat(discountAmount.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
    };
};
