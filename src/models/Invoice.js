import LineItem from "./LineItem";

export default class Invoice {
  lineItems = [];

  constructor(
    number,
    purchaseOrderNumber = null,
    date = null,
    dueDate = null,
    notes = null,
    bankAccountDetails = null
  ) {
    this.id = Math.floor(Math.random() * 1000);
    this.number = number;
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.date = date;
    this.dueDate = dueDate;
    this.notes = notes;
    this.bankAccountDetails = bankAccountDetails;
  }

  /**
   * 
   * @param {Custo} customer 
   */
  setCustomer(customer) {
    this.customer = customer;
  }

  /**
   * Add a line item to the invoice
   * @param {LineItem} lineItem
   */
  addLineItem(lineItem) {
    this.lineItems.push(lineItem);
  }

  removeLineItem(index) {
    this.lineItems.splice(index, 1);
  }

  getSubtotal() {
    return this.lineItems.reduce(
      (subtotal, lineItem) => subtotal + lineItem.getSubtotal(),
      0
    );
  }

  getTotalTax() {
    return this.lineItems.reduce(
      (totalTax, lineItem) => totalTax + lineItem.getTotalTax(),
      0
    );
  }

  getTotalDiscount() {
    return this.lineItems.reduce(
      (totalDiscount, lineItem) => totalDiscount + lineItem.getTotalDiscount(),
      0
    );
  }

  getTotal() {
    return this.lineItems.reduce(
      (total, lineItem) => total + lineItem.getTotal(),
      0
    );
  }
}
