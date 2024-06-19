const mysql = require("mysql");

// DB Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "deep@1234",
  database: "pet_adoption",
});

connection.connect((error) => {
  if (error) {
    // console.log("Error");
    console.log(error.message);
  } else {
    console.log("DB Connected");
  }
});

module.exports = connection;
