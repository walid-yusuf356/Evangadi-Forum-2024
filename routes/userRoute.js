const express = require("express");
const router = express.Router();

// import the auth middleware
const authMiddleware = require("../middleware/authMiddleware");

// import the user three controllers
const { register, login, checkUser } = require("../controller/user.Controller");

// register the reoute
router.post("/register", register);

// login the user
router.post("/login", login);

// check if the user is authenticated
router.get("/check", authMiddleware, checkUser);

module.exports = router;
