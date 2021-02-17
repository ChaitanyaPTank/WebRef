const express = require("express");
const dotenv = require("dotenv"); // this is for reading environment variables from .env file
const morgan = require("morgan"); // logging the HTTP/s requests
const debug = require("debug");
const startupDebugger = debug("app:startup");
const helmet = require("helmet");

dotenv.config();

// routes
const publicApi = require("./routes/publicApi")
const privateApi = require("./routes/privateApi");
const login = require("./routes/login");
const logout = require("./routes/logout");
const app = express();

startupDebugger("Reading env variables...");

// Middlewares
startupDebugger("going through middlewares...");
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());

// routes middleware
startupDebugger("reached to routes...");
app.use("/api/public", publicApi);
app.use("/api/private", privateApi);
app.use("/api/login", login);
app.use("/api/logout", logout);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
