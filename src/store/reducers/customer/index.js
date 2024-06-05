export default function customerReducer(state = [], action) { 
    switch (action.type) { 
        case "ADD_CUSTOMER": 
            return [...state, action.payload]; 
        case "DELETE_CUSTOMER": 
            return state.customers.filter((customer) => customer.id !== action.payload); 
        default: 
            return state; 
    }
}