const express = require("express");
const api = express.Router();
const MovieController = require("../controllers/movie");

const connect = require("connect-multiparty");
const md_upload = connect({ uploadDir: "./uploads/movie" });

api.post("/movie", [md_upload], MovieController.createMovie);
api.get("/movies", MovieController.getMovies);
api.get("/movie/:id", MovieController.individualGetMovies);
api.put("/movie/:id", [md_upload], MovieController.uploadsMovie);
api.delete("/movie/:id", MovieController.delateMovie);


module.exports = api;