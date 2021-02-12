function log (req, res, next) {
    console.log('logging...');
    next(); // necessary for forwarding the control to next pipeline
}

module.exports = log;