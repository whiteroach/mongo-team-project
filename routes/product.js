const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");


router.get('/', productController.displayProduct)

router.post('/',productController.createProducts)

module.exports = router;
