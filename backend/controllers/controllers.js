const models = require("../models/models.js");

const create_Categories = async (req, res) => {
  const Create = new models.Categories({
    type: "Savings",
    color: "#1F3B5C",
  });
  let data = await Create.save();
  if (data) {
    res.json({ message: "Data saved" });
  }
};
const get_Categories = async (req, res) => {
  let data = await models.Categories.find({});
  let filter = await data.map((item) =>
    Object.assign({}, { type: item.type, color: item.color })
  );
  return res.json(filter);
};
const create_Transaction = async (req, res) => {
  const { name, type, amount } = req.body;
  const Create = new models.Transaction({
    name: name,
    type: type,
    amount: amount,
    date: new Date(),
  });
  let result = await Create.save();
  if (result) {
    res.json({ message: "Data saved" });
  } else {
    res.json({ message: "Data not saved" });
  }
};
const get_Transactions = async (req,res) => {
  let data = await models.Transaction.find({});
  res.send(data);
};
const delete_Transaction = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Please provide data" });
  } else {
    let data = await models.Transaction.deleteOne(req.body);
    if (data) {
      return res.json({ message: "Data deleted" });
    } else {
      return res.json({ message: "Data not deleted" });
    }
  }
};
module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transactions,
  delete_Transaction,
};
