const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.displayProduct);

router.post("/", productController.createProducts);

router.get("/delete/:id", productController.deleteProduct);

// router.get("/delete/:id", productController.displayDeleteModal);

router.post("/update/:id", productController.updateProduct);

router.get("/update/:id", productController.displayFormModal);

module.exports = router;
