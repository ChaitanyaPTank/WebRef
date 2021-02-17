const { validate } = require("express-validation");
const Joi = require("joi");

const schema = Joi.object({
    product: Joi.string()
    .min(3)
    .required()
});

function validateProductName(req, res, next) {
    const { error } = schema.validate(req.body);
    console.log("prod body is...", req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
}

module.exports = validateProductName;