const jwt = require("jsonwebtoken");
const debug = require("debug");
tokenDebugger = debug("app:token");

// list of blacklisted tokens when user has logged out
const tokenBlackList = [];

// this function is for authenticating token
function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"];
    // tokenDebugger("Headers:", req.headers);
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        tokenDebugger("Token is found null");
        return res.sendStatus(401);
    }

    //checking if token is in blacklist or not
    const isInBlackList = tokenBlackList.find(tok => tok === token);

    if (isInBlackList) {
        tokenDebugger("User is in black list");
        return res.sendStatus(401);
    }

    // verifying token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            tokenDebugger("Error for Token is :", err);
            return res.sendStatus(403);
        }

        req.user = user;
        tokenDebugger("User token is:", user);
        next();
    })

}

// Token will be added in black list when user logs out
function blakclistToken(req, res, next) {

    tokenDebugger("Blacklisting token...");
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        tokenDebugger("token is null");
        return res.sendStatus(401);
    }
    tokenBlackList.push(token);
    tokenDebugger(tokenBlackList);
    next();

}

// this is for generating token
function generateAccessToken(username) {

    // playload is kinda body of the token
    const tokenPayload = {
        user: username
    }

    // expires after half and hour (300 seconds = 5 minutes)
    const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET, { expiresIn: '300s' })

    tokenDebugger("generated token is: ", token);
    return token;
}

module.exports.authenticateToken = authenticateToken;
module.exports.generateAccessToken = generateAccessToken;
module.exports.blakclistToken = blakclistToken;