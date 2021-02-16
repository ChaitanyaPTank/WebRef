const db = require("../db.json");
// const tokennn = require("./tokens");
const { _okay , generateAccessToken } = require("./tokens");

function userValidator(req, res, next){

    // validate if user exists
    const userExist = db.users.find(u => u.user === req.body.name);

    if (userExist) return res.status(400).send("User already exists");

    user = { id: db.users[db.users.length-1].id +1 , user: req.body.name }
    db.users.push(user);

    generateAccessToken(req.body.name);
    res.send(user);

    next();

}

module.exports = userValidator;