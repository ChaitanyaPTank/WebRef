const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

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

app.post('api/courses', (req, res) => {

    // Validating manually
    // if (req.body.name || req.body.name.length < 3){
        // error here
    // }

    // validating using joi
    const schema = {
        name: Joi.string.min(3).required()
    }

    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);
    

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id',(req, res) =>{ // or we can use /api/courses/:year/:month to get two params

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`Course with the given id is not found`);

    res.send(course);

});

app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(400).send(`course for id: ${id} not found`);

    const { error } = validateUser(req.body);
    if (error) return res.status(404).send(error.details[0].message);

})

app.delete('api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`The customer for id: ${id} could not be found`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    req.send(course);

})

function validateUser(customer){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Jio.validate(customer, schema); // we hav used object destructuring
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
