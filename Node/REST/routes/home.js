const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {title:"REST_API", message:"Jay Swaminarayana"});
});

module.exports = router; // typeof(route) == function
