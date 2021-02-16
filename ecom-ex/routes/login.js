const express = require("express");
const userValidator = require("../validators/user.validator");
const router = express.Router();

// login
router.post("/", userValidator);

module.exports = router;