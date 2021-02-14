function logger (req, res, next){
    console.log("logger middleware");
    next();
}

module.exports = logger
