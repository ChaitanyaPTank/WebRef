const db = require("../db.json");
const { _dump, generateAccessToken } = require("./tokens");
const debug = require("debug");
const Joi = require("joi");

validatorDebugger = debug("app:user.validator");

const schema = Joi.object({
    name: Joi.string()
    .min(3)
    .required()
});

function validateUserName(req, res, next) {

    validatorDebugger("Validating user name...");
    const { error } = schema.validate(req.body);
    validatorDebugger(req.body);
    validatorDebugger("Error:", error);
    if (error) return res.status(400).send(error.message);
    next();

}

function userValidator(req, res, next) {

    validatorDebugger("checking for user in db");
    // validate if user exists
    const userExist = db.users.find(u => u.user === req.body.name);

    if (userExist) return res.status(400).send("User already exists");

    user = { id: db.users[db.users.length - 1].id + 1, user: req.body.name }
    db.users.push(user);

    generateAccessToken(req.body.name);
    res.send(user);

    next();

}

module.exports.userValidator = userValidator;
module.exports.validateUserName = validateUserName;