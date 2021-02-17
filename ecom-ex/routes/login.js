const express = require("express");
const { userValidator, validateUserName } = require("../validators/user.validator");
const router = express.Router();

// login
router.post("/", validateUserName, userValidator);

module.exports = router;