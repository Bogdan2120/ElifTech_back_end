const { Card } = require("../models/card");

const { ctrlWrapper } = require("../utils");

const makeOrder = async (req, res) => {
  console.log(req.body);
  const result = await Card.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  makeOrder: ctrlWrapper(makeOrder),
};
