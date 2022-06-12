const mysql = require('mysql');
const util = require('util');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "stucom",
  // password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database !");
});

const executeQuery = util.promisify(con.query).bind(con);

module.exports = {con, executeQuery}