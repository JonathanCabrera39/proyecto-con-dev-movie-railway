const express = require("express");

const UserController = require("../controllers/user");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.get("/user/me",[md_auth.verifyToken], UserController.getMe);
api.get("/users", UserController.getUsers);


module.exports = api;
