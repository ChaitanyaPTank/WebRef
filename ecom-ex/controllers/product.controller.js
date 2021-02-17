const db = require("../db.json");
const debug = require("debug");
const controllerDebugger = debug("app:productController");

// this will change product in db object
function changeProduct(req, res, next) {

    // if product exists then find index of the same and change
    // in main db and return the product
    controllerDebugger("Changing product...")
    const index = db.products.indexOf(req.prod);
    db.products[index].product = req.body.product;
    controllerDebugger("Changed product details successfully...");

    res.send(db.products);
    next();
}

function sendProduct(req, res, next) {
    res.send(db.products);
    next();
}

function productExists(req, res, next) {
    // find product first
    controllerDebugger("Searching product...");
    const product = db.products.find(prod => prod.id === parseInt(req.params.id));
    controllerDebugger(product);
    if (!product) return res.status(400).send("Product not found");

    req.prod = product;

    next();
}

function removeProduct(req, res, next) {
    controllerDebugger("Removing product...");

    const index = db.products.indexOf(req.prod);
    db.products.splice(index, 1);

    res.send(db.products);

    next();
}

module.exports.changeProduct = changeProduct;
module.exports.sendProduct = sendProduct;
module.exports.productExists = productExists;
module.exports.removeProduct = removeProduct;