const express = require("express");
const app = express();
const port = 5500;

// db.connection
const dbConnection = require("./db/dbConfig");

// user routes middleware file
const userRoutes = require("./routes/userRoute");

// middleware to parse the request body
app.use(express.json());

// middleware to parse the request body
app.use("/api/users", userRoutes);

// question routes middleware ??

// answer routes middleware ??

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
