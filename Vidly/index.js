const express = require("express");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const logger = require("./middleware/logger");
const genre = require("./routes/genre");
const home = require("./routes/home");

const app = express();

app.use(express.json());
// app.use(express.static("public")) // we do not have static file yet
app.use(logger);

if (app.get("env") === "development"){
    app.use(morgan("tiny"));
    startupDebugger("startupDebugger is started...");
}

app.use("/api/genre", genre);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
