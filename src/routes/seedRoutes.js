const express = require("express");
const Product = require("../models/productModel.js");
const data = require("../data.js");
const User = require("../models/userModel.js");

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
module.exports = seedRouter;
