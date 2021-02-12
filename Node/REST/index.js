const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const logger = require('./logger')
const authenticator = require('./authenticator')
const Joi = require('joi');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // this is used when url has key=value&key=value, this will parse request body
app.use(express.static('public'));
app.use(helmet());

// Configuration
// console.log(`application name: ${config.get('name')}`);
// console.log(`Mail server name: ${config.get('mail.host')}`);
// console.log(`Mail password: ${config.get('mail.password')}`);

console.log(`application name: ${config.get('name')}`);
console.log(`Mail server name: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`);

if (app.get('env') === 'development'){
    console.log('morgan enabled...');
    app.use(morgan('tiny')); // for logging http requests
}
// logging - middleware
app.use(logger);

// authenticating - middleware
app.use(authenticator);

const courses=[
    { id:1, name:"course1" },
    { id:2, name:"course2" },
    { id:3, name:"course3" }
]

app.get('/', (req, res) => {
    res.send("Welcome!")
});

app.get('/api/courses',(req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req, res) =>{ // or we can use /api/courses/:year/:month to get two params

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`Course with the given id is not found`);

    res.send(course);

});

app.post('/api/courses', (req, res) => {

    // Validating manually
    // if (req.body.name || req.body.name.length < 3){
        // error here
    // }

    // validating using joi
    // const schema = {
    //     name: Joi.string.min(3).required()
    // }

    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(400).send(`course for id: ${req.params.id} not found`);

    const { error } = validateCourse(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);

})

app.delete('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`The customer for id: ${req.params.id} could not be found`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);

})

function validateCourse(course){
    // const schema = {
    //     name: Joi.string().min(3).required()
    // }

    const schema = Joi.object({
        name:Joi
        .string()
        .min(3)
        .required()
    })

    return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
