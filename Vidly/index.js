const express = require("express");
const morgan = require("morgan");
const debug = require("debug");
const startupDebugger = debug("app:startup");
const databaseDebugger = debug("app:database");
const genre = require("./routes/genre");
const mongoose = require("mongoose");
const home = require("./routes/home");

const app = express();

async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost/Vidly", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
    catch(err){
        databaseDebugger("Failed to connect to Database : ", err.message);
    }
}

connectDB();

app.use(express.json());
// app.use(express.static("public")) // we do not have static file yet

if (app.get("env") === "development"){
    app.use(morgan("tiny"));
    startupDebugger("startupDebugger is started...");
}

app.use("/api/genre", genre);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
