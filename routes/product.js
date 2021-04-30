const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/product", productController.displayProduct);

module.exports = router;
