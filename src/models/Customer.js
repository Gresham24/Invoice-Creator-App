export default class Customer {
  constructor(name, address, phoneNumber) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
