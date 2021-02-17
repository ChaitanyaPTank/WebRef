const express = require("express");
const { _ , __ , blakclistToken } = require("../validators/tokens");
const router = express.Router();

router.post("/", blakclistToken, (req, res) => {
    res.send("Succesfully logged out...");
});

module.exports = router;