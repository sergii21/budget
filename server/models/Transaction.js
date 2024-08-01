const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Please add amount"],
  },
  name: {
    type: String,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  type: {
    type: String,
  },
}); 

module.exports = mongoose.model('Transaction', TransactionSchema)