// db connection
const dbConnection = require("../db/dbConfig");

function register(req, res) {
  res.send("Register user");
    }

function login(req, res) {
    res.send("Login user");
    }

function checkUser(req, res) {
    res.send("Check user");
    }

module.exports = { register, login, checkUser };