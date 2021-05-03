const mongoose = require("mongoose");
const schema = mongoose.Schema;

const newProduct = new schema({
  title: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", newProduct);

module.exports = Product;
