/**
 * Formats a number as currency with commas for thousands separators
 * @param {number} amount - The amount to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted number with commas
 */
export const formatAmount = (amount, decimals = 2) => {
    if (isNaN(amount) || amount === null || amount === undefined) {
        return (0).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    return Number(amount).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formats a number as currency with symbol and commas
 * @param {number} amount - The amount to format
 * @param {string} symbol - Currency symbol
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, symbol = '$', decimals = 2) => {
    const formattedAmount = formatAmount(amount, decimals);
    return `${symbol} ${formattedAmount}`;
};