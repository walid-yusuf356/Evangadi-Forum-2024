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
        const [user] = await dbConnection.query("Select username, userid from users where username = ?, email = ?, ", [userName, email]);
        return res.json({ user });
        await dbConnection.query(
            "INSERT INTO users (userName, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)",
            [userName, firstName, lastName, email, password]
        );
        return res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.log(error.message);
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

