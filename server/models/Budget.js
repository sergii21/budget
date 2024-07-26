const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: [true, "Please add amount"],
  },
  balance: {
    type: Number,
    required: [true, "Please add amount"],
  },
}); 

module.exports = mongoose.model("Budget", BudgetSchema);