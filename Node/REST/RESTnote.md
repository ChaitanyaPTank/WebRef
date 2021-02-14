REST = Representational state transfer


CRUD = {
    Creade,
    Read,
    Update,
    Delete
}

REST URL : https://vidly.com/api/customers => customers is endpoint of URL

HTTP Methods:
    GET
    POST
    PUT
    DELETE

Examples: 
    GET /api/customers => Should bring all customers from server.
    GET /api/customers/1 => Should bring customer with ID 1 from server.
    PUT /api/customer/1 => will update customer on ID 1 with given body.
    DELETE /api/customers/1 => will delete customer having id as 1.
    POST /api/customers => will add new customer in server customers list.


Installed express

Install nodemon

set PORT value by
    set PORT=5000

// port 3000 is hard coded and this will decided by environment while deployment
// and value 3000 should not work in while deployment to solve this and get the 
// value of port from the runtime we have to get by the method shown below
const port = process.env.PORT || 3000;

Route Parameters

// When the url is like https://url.com/customers?sotBy=Name
// we can use req.query to get query parameeters
// res.send(req.query);

Handling get requests

Handling Post requests

Handling Put requests

Handling deleting requests

Using middleware

Create custom middleware

Built in middleware
    - json
    - urlencoded
    - static

Third party middleware
    - helment
    - morgan

Environments
    - Development
    - Production
    - Testing

process.env.NODE_ENV => returns the type of current env wiz => testing / dev / prod.
to set NODE_ENV variable in current process you may need to use
    : $env:variable_name="variable_value" in powershell.
    : set variable_name=variable_value in command prompt.
app.get(`env`)

configuration settings for different environment

do not store passwords in this config files

debugging
    - install debug module from npm
    - const startupDebugger = require('debug')('app:startup'); will call function and store debug info in startup namespace.
        - startupDebugger('debug messages') to log the info in the console.
        - while starting node app set variable named DEBUG=app:startup to start the debugger in startup namespace

templating engine
    - Examples of template engines
        - pug // we are using this in the course
        - mustache
        - EJS
    - set view engine
    - use res.render() not res.send()

Database integration
    - working with different db options in Express as like SQLite, MongoDB etc...

Authentication
    - Express does not have any opinion on authentication so you need to use another framework or library may be

Structure course
    - make separate file in .\routes\courses.js to move all api/s related api/courses in courses.js
    - import express in courses.js and use
        - const router = express.Router();
        - replace app.get with route.get
        - export route : module.exports = route;
    - in index.js : const courses = require("./routes/courses");
    - add app.use("/api/courses", courses) // courses is Route function
    - remove /api/courses from courses.js and replace that with a "/"
        as we have told to use courses route when /api/courses is called
    - put all middle ware in a separate middleware folder