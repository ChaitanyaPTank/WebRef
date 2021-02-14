const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Jay Swaminarayana");
});

module.exports = router;
