const express = require("express");
const {
  getTransactionList,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

const router = express.Router();

router.route("/").get(getTransactionList).post(createTransaction);
router 
  .route("/:id")
  .get(getTransaction) 
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
