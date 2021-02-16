const debug = require('debug');
const startupDebugger = debug('app:startup');
const databaseDebugger = debug('app:database');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const logger = require('./middleware/logger')
const authenticator = require('./middleware/authenticator')
const course = require('./routes/courses');
const home = require('./routes/home')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // this is used when url has key=value&key=value, this will parse request body
app.use(express.static('public'));
app.use(helmet());

// printing configurations
console.log(`application name: ${config.get('name')}`);
console.log(`Mail server name: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`);

if (app.get('env') === 'development'){
    app.use(morgan('tiny')); // for logging http requests
    startupDebugger('morgan enabled...'); // using this from const debug = require('debug')
}

// some database activity
databaseDebugger('Connected to database succesfully...');

// logger and autheticator are middleware
app.use(logger);
app.use(authenticator);

// router
app.use("/api/courses", course);
app.use("/", home);

app.set('view engine', 'pug'); // this will automatically simuate the require statement so you do not need to import pug
app.set('views', './views') // ./views is the path to the folder which has templates

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
