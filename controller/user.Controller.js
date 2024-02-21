// db connection
const dbConnection = require("../db/dbConfig");

async function register(req, res) {
  const { userName, firstName, lastName, email, password } = req.body;
  if (!userName || !firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "Please provide all required information",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  try {
    const [existingUser] = await dbConnection.query(
      "SELECT username, userid FROM users WHERE username = ? OR email = ?",
      [userName, email]
    );
    // return res.json({ existingUser: existingUser });

    await dbConnection.query(
      "INSERT INTO users (userName, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)",
      [userName, firstName, lastName, email, password]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Something went wrong, try again later",
    });
  }
}

function login(res) {
  res.send("Login user");
  return res.status(500).json({
    message: "Something went wrong, try again later",
  });
}

function checkUser(res) {
  res.send("Check user");
}

module.exports = { register, login, checkUser };
