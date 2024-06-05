export default function invoiceReducer(state = [], action) {
    switch (action.type) {
        case "ADD_INVOICE":
            return [...state, action.payload];
        case "DELETE_INVOICE":
            return state.invoices.filter((invoice) => invoice.id !== action.payload);
        default:
            return state;
    }
}