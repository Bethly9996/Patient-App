const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "PatientDB",
  user: "root",
  password: "Bejann@9996.",
});

module.exports = pool;
pool.getConnection(function (err) {
  if (err) throw err;
  console.log("Database connected");
});
