// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Tranvansu661002@",
//   database: "managestudent",
// });

// module.exports = db;

const { createPool } = require("mysql");

const db = createPool({
  host: "localhost",
  user: "root",
  password: "Tranvansu661002@",
  database: "managestudent",
});

module.exports = db;
