require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiVersion = process.env.API_VERSION;

const app = express();

// import rutas
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const movieRoutes = require("./router/movie");

//configuration body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure static dalter
app.use(express.static('uploads'));

//configuration haader http -cors
app.use(cors());

//configuration rutas
app.use(`/api/${apiVersion}`, authRoutes);
app.use(`/api/${apiVersion}`, userRoutes);
app.use(`/api/${apiVersion}`, movieRoutes);



module.exports = app;
