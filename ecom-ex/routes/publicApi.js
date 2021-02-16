const express = require("express");
const router = express.Router();
const users = require("../db.json"); // simulates databae

router.get("/", (req, res) => {
    res.send("This API is for products");
});

router.get("/users", (req, res) => {
    console.log("in /api/public/users api:");
    res.send(users.users);
});

router.get("/users/:id", (req, res) =>{
    const user = users.users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(400).send("User ID is invalid");
    res.send(user);
});

module.exports = router;