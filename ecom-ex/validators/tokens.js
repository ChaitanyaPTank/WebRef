const jwt = require("jsonwebtoken");

// this function is for authenticating token
function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"];
    console.log("Headers:", req.headers);
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log("Error for Token is :", err);
        if (err) return sendStatus(403);
        req.user = user;
        console.log(user);
        next();
    })

}

// this is for generating token
function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    const token = jwt.sign({user:username}, process.env.TOKEN_SECRET, { expiresIn: '10s' })
    console.log(token);
    return token;
}

module.exports.authenticateToken = authenticateToken;
module.exports.generateAccessToken = generateAccessToken;