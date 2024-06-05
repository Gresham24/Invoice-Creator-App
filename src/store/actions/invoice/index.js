export const addInvoice = (invoice) => {
  return {
    type: "ADD_INVOICE",
    payload: invoice,
  };
};

export const removeInvoice = ({ id }) => {
  return {
    type: "DELETE_INVOICE",
    payload: id,
  };
};
