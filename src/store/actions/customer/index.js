export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    payload: customer,
  };
};

export const removeCustomer = ({ id }) => {
  return {
    type: "DELETE_CUSTOMER",
    payload: id,
  };
};
