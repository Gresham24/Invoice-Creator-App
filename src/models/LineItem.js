export default class LineItem {
  constructor(
    name,
    description,
    quantity = 0,
    price = 0,
    tax = 0,
    discount = 0
  ) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.tax = tax;
    this.discount = discount;
  }

  getSubtotal() {
    return this.price * this.quantity;
  }

  getTotalTax() {
    return (this.price * this.quantity * this.tax) / 100;
  }

  getTotalDiscount() {
    return (this.price * this.quantity * this.discount) / 100;
  }

  getTotal() {
    let totalBeforeDiscount = this.price * this.quantity;
    let totalAfterDiscount =
      totalBeforeDiscount - (totalBeforeDiscount * this.discount) / 100;
    let totalAfterTax =
      totalAfterDiscount + (totalAfterDiscount * this.tax) / 100;
    return totalAfterTax;
  }
}
