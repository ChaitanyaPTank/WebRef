const express = require("express");
const dotenv = require("dotenv"); // this is for reading environment variables from .env file
const morgan = require("morgan"); // logging the HTTP/s requests
const helmet = require("helmet");

// routes
const publicApi = require("./routes/publicApi")
const privateApi = require("./routes/privateApi");
const login = require("./routes/login");
const app = express();

dotenv.config();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());

// routes middleware
app.use("/api/public", publicApi);
app.use("/api/private", privateApi);
app.use("/api/login", login);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
