const express = require("express");
const router = express.Router();
const genreController = require("../controller/genre.controller");

const genres = [
    {id: 1, name: "comedy"},
    {id: 2, name: "horror"},
    {id: 3, name: "action"}
];

router.get("/", genreController.getAllGenre)

router.get("/:id", genreController.getGenre);

router.put("/:id", genreController.modifyGenre);

router.post("/", genreController.validateGenre, genreController.createGenre);

router.delete("/:id", genreController.deleteGenre);

module.exports = router;
