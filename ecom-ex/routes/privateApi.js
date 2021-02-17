const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../validators/tokens"); // token authentication middleware
const { changeProduct, sendProduct, productExists, removeProduct } = require("../controllers/product.controller");
const validateProductName = require("../validators/product.validator");

router.get("/", (req, res) => {
    res.send("This is private API");
});

router.get("/products", authenticateToken, sendProduct);
router.put("/products/:id", authenticateToken, validateProductName, productExists, changeProduct);
router.delete("/products/:id", authenticateToken, productExists, removeProduct);

module.exports = router;