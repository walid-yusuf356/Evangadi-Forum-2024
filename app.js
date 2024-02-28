const express = require("express");
const app = express();
const port = 5500;

// db.connection
const dbConnection = require("./db/dbConfig");

// user routes middleware file
const userRoutes = require("./routes/userRoute");
// question routes middleware file
const questionRoutes = require("./routes/questionRoute");
// answer routes middleware file
const answerRoutes = require("./routes/answerRoute");
// auth middleware
const authMiddleware = require("./middleware/authMiddleware");

// middleware to parse the request body
app.use(express.json());

// middleware to parse the request body
app.use("/api/users", userRoutes);

// question routes middleware ??
app.use("/api/questions", authMiddleware, questionRoutes);

// answer routes middleware ??
app.use("/api/answers", authMiddleware, answerRoutes);

async function start() {
  try {
    const result = await dbConnection.execute("SELECT 'test' ");
    await app.listen(port);
    console.log("Database connection successful");
    console.log(`Server is running on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
