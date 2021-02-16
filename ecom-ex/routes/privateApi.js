const express = require("express");
const router = express.Router();
const db = require("../db.json");
const { authenticateToken } = require("../validators/tokens"); // token authentication middleware

router.get("/", (req, res) => {
    res.send("This is private API");
});

router.get("/products", authenticateToken, (req, res) =>{
    res.send(db.products);
});

module.exports = router;