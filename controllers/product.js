const Product = require("../models/productSchema");
const url = require("url");
const { isRegExp } = require("util");

//display the product page
exports.displayProduct = (req, res) => {
  Product.find((err, data) => {
    const message = req.query;
    // console.log(message.user);
    if (err) throw err;
    res.render("product", {
      product: data,
      pageName: "Product",
      msg: message,
    });
  });
};

// Display Products
exports.createProducts = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save().then();
  res.redirect(
    url.format({
      pathname: "/product",
      query: {
        successMsg: "product added!",
      },
    })
  );
};

// Update Product
exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  //   console.log(productId, req.body);
  Product.findByIdAndUpdate(productId, req.body, { new: true }, (err, doc) => {
    console.log("Updated:", doc);
    res.redirect(
      url.format({
        pathname: "/product",
        query: {
          updateMsg: "product updated",
        },
      })
    );
  });
};

// Display Update Form
exports.displayFormModal = (req, res) => {
  const { id } = req.params;
  Product.findOne({ _id: id }, (err, doc) => {
    // console.log(doc);
    res.render("modalForm", { product: doc });
  });
};

// Delete Product
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId, (err, doc) => {
    if (err) throw err;
    console.log("deleted:", doc);
    res.redirect(
      url.format({
        pathname: "/product",
        query: {
          deleteMsg: "product removed!",
        },
      })
    );
  });
};

// Display Delete Message
exports.displayDeleteModal = (req, res) => {
  const { id } = req.params;
  Product.findOne({ _id: id }, (err, doc) => {
    // console.log(doc);
    res.render("deleteModal", { product: doc });
  });
};
