const express = require("express");
// db connection
const dbConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const StatusCodes = require("http-status-codes");

const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { userName, firstName, lastName, email, password } = req.body;

  if (!userName || !firstName || !lastName || !email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please provide all required information",
    });
  }
  try {
    const [existingUser] = await dbConnection.query(
      "SELECT username, email FROM users WHERE username = ? OR email = ?",
      [userName, email]
    );
    // return res.json({ existingUser: existingUser });
    if (existingUser.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User already exists",
      });
    }

    if (password.length < 6) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Password must be at least 6 characters",
      });
    }
    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await dbConnection.query(
      "INSERT INTO users (userName, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)",
      [userName, firstName, lastName, email, hashedPassword]
    );

    return res.status(StatusCodes.CREATED).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong, try again later",
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please enter all required fields",
    });
  }

  try {
    const [user] = await dbConnection.query(
      "select username, userid, password from users where email = ?",
      [email]
    );
    // return res.json({ user: user });
    if (user.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid credentials",
      });
    }
    // compare the password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Invalid credentials",
      });
    }
    const username = user[0].username;
    const userid = user[0].userid;
    const token = jwt.sign({ username, userid }, "secret", { expiresIn: "1d" });

    return res.status(StatusCodes.OK).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong, try again later",
    });
  }
}

async function checkUser(req, res) {
  const username = req.user.username;
  const userid = req.user.userid;
  res.status(StatusCodes.OK).json({ msg: "valid user", username, userid });
  res.send("check user");
}

module.exports = { register, login, checkUser };
