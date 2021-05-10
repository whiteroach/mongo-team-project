const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const auth = require("../config/auth");

// Display Products
router.get("/", auth.permission, productController.displayProduct);

// Create new product
router.post("/", auth.permission, productController.createProducts);

// Delete product
router.get("/delete/:id", auth.permission, productController.deleteProduct);

// Display delete modal
router.get("/delete/:id", productController.displayDeleteModal);

// Update product
router.post("/update/:id", auth.permission, productController.updateProduct);

// Display update form
router.get("/update/:id", auth.permission, productController.displayFormModal);

module.exports = router;
