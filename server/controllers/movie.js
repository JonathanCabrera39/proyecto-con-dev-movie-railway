const movie = require("../models/movie");
const Movie = require("../models/movie");

const image = require("../utils/getFileName");
// crear
async function createMovie(req, res) {
  // crear la pelicula
  const newMovie = new Movie(req.body);

  //obtener la imagen

  const imageParth = image.getFileName(req.files.image);

  newMovie.image = imageParth;
  // guardar la pelicula
  try {
    await newMovie.save();
    res.status(200).send({ msg: "pelicula creada" });
  } catch (err) {
    res.status(500).send({ msg: "error en el servidor" });
  }
  console.log(newMovie);
}

async function getMovies(req, res) {
  try {
    const movies = await Movie.find();
    //if(!movie) return res.status(404).send({ msg: "no hay peliculas" });
    return res.status(200).send({ movies });
  } catch (err) {
    res.status(500).send({ msg: "error en el servidor" });
  }
}

async function individualGetMovies(req, res) {
  const { id } = req.params;

  const MovieUne = await Movie.findById(id);

  if (!MovieUne) {
    res.status(400).send({ msg: "no se ha encontrado la pelicula" });
  } else {
    res.status(200).send(MovieUne);
  }
}

async function uploadsMovie(req, res) {
  const { id } = req.params;

  const movieNewData = req.body;

  const imageParth = image.getFileName(req.files.image);
  movieNewData.image = imageParth;

  // actualizar la pelicula
  try {
    await Movie.findByIdAndUpdate({ _id: id }, movieNewData);
    res.status(200).send({ msg: "pelicula actualizada" });
    console.log(movieNewData);
  } catch (err) {
    res.status(500).send({ msg: "error en el servidor" });
    console.log(err);
  }
}

async function delateMovie(req, res) {
  const { id } = req.params;
  const {movieNewData} = req.params.image;

  // actualizar la pelicula
  try {
    await Movie.findByIdAndDelete({ _id: id, image: movieNewData });
    res.status(200).send({ msg: "pelicula borrada" });
    //console.log(movieNewData);
  } catch (err) {
    res.status(500).send({ msg: "error en el servidor" });
    console.log(err);
  }
}

module.exports = {
  createMovie,
  getMovies,
  uploadsMovie,
  individualGetMovies,
  delateMovie,
};
