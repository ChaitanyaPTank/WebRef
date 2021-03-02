const Joi = require("joi");
const databaseDebugger = require("debug")("app:database");
const Genre = require("../model/genreSchema");


exports.validateGenre = function validateGenre(req, res, next) {
    try {
        const schema = Joi.object({
            name: Joi
                .string()
                .min(3)
                .required()
        });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send();
        next();
    }
    catch (err) {
        return res.send(err.message);
    }
};

exports.createGenre = async function createGenre(req, res, next) {
    try {
        const genre = new Genre({ name: req.body.name });
        const newGenre = await genre.save();
        databaseDebugger("Successfully created a DB...");
        return res.status(200).send(`new genre has been created...${newGenre}`);
    }
    catch (err) {
        databaseDebugger("loggin error...");
        return res.status(401).send(err.message);
    }
};

exports.deleteGenre = async function deleteGenre(req, res, next) {
    try {
        const genreId = req.params.id;
        databaseDebugger(genreId);
        const delObj = await Genre.findByIdAndRemove({ _id: genreId });
        databaseDebugger("Deleted entry succesfully...", delObj);
        return res.status(200).send("Operation successfull...");
    }
    catch (error) {
        databaseDebugger("error:", error.message);
        return res.status(404).send(error.message);
    }
};

exports.modifyGenre = async function modifyGenre(req, res, next) {
    try {
        const genreId = req.params.id;
        const newName = req.body.name;
        if (!newName) return res.status(400).send("Name was not provided...");
        await Genre.findByIdAndUpdate(genreId, { name: newName });
        return res.status(200).send("Modification successfull...");
    }
    catch (error) {
        databaseDebugger(error.message);
        return res.status(401).send(error.message);
    }
};

exports.getGenre = async function (req, res, next) {
    try {
        const genreId = req.params.id;
        const genre = await Genre.find({ _id: genreId }).select({ name: 1 });
        return res.status(200).send(genre);
    }
    catch (error) {
        databaseDebugger(error.message);
        return res.status(400).send(error.message);
    }
};

exports.getAllGenre = async function (req, res, next) {
    try {
        const genres = await Genre.find();
        return res.status(200).send(genres);
    }
    catch(error){
        return res.status(400).send(error.message);
    }
}