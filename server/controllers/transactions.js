const Transaction = require("../models/Transaction");
const Budget = require("../models/Budget");
const { isValidText } = require("../utils/validation");

exports.getTransactionList = async (req, res, next) => {
  const transactionList = (await Transaction.find()).reverse();
    res.status(200).json(transactionList);
};
exports.getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).send("Not found");
    }
      res.status(200).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.createTransaction = async (req, res, next) => {
  try {
    let errors = {};

    if (!isValidText(req.body.name)) {
      errors.name = "Invalid name.";
    }

    if (!isValidText(req.body.description)) {
      errors.description = "Invalid description.";
    }

    if (Object.values(errors).length) {
      return res.status(422).json({ errors, message: "Validation errors." });
    }

    const transaction = await Transaction.create(req.body);

    const { budget, balance } = await Budget.findOne();
    const newBudgetData = {
      budget,
      balance: balance - transaction.amount,
    };
    await Budget.updateOne(newBudgetData);

    return res.status(201).json(transaction);
  } catch (error) {
    return res.status(422).json({ message: "Validation errors." });
  }
};
exports.updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!transaction) {
      return res.status(400).send("Failed");
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(400).send("Failed");
    }

    res.status(200).json({});
  } catch (error) {
    res.status(400).send(error);
  }
};
