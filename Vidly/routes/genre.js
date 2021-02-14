const express = require("express");
const Joi = require("joi");
const router = express.Router();

const genres = [
    {id: 1, name: "comedy"},
    {id: 2, name: "horror"},
    {id: 3, name: "action"}
]

router.get("/", (req, res) => {
    res.send(genres);
});

router.get("/:id", (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(400).send("Error: ID is invalid");
    res.send(genre);
})

router.put("/:id", (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    genre.name = req.body.name;
    res.send(genre);
});

router.post("/", (req, res) => {
    const { error } = validateGenre(req.body);
    if (!error) return res.status(400).send(error.details[0].message);
    genre = { id: genres.length+1, genre: req.body};
    genres.push(genre);
});

router.delete("/:id", (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(400).send("Error: Invalid ID");

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});

function validateGenre (genre){
    const schema = Joi.object({
        name: Joi
        .string()
        .min(3)
        .required()
    });

    return schema.validate(genre);
}

module.exports = router;
