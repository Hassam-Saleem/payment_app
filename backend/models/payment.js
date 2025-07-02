const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  accountNumber: String,
  phoneNumber: String,
  ssnOrPin: String,
  billAmount: String,
  email: String,
  firstName: String,
  lastName: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zipCode: String
});

module.exports = mongoose.model('Payment', paymentSchema);
