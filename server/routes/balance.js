const express = require("express");
const Budget = require("../models/Budget");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const budget = await Budget.findOne(); 
    return res.json(budget);
  })
  .put(async (req, res) => {
    const { budget } = req.body;
    const savedData = await Budget.findOne() ?? {balance:0, budget:0};
    const newData = {
      budget: +budget,
      balance: +budget,
    };
    const newSavedData = await Budget.updateOne(newData);
    return res.json(newSavedData);
  });

module.exports = router;  
 