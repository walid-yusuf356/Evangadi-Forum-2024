const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "evangadi-admin",
  database: "evangady-db",
  host: "localhost",
  password: "Melodeen4033!4",
  connectionLimit: 10,
});

// dbConnection.query("SELECT 'test'", (err, result) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(result);
//     }
// });

module.exports = dbConnection.promise();
