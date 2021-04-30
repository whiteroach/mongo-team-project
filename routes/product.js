const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

<<<<<<< HEAD

router.get('/', productController.displayProduct)
=======
router.get("/product", productController.displayProduct);
>>>>>>> 79d058dd933f42c0a63dcce082277cb27b67dba2

module.exports = router;
