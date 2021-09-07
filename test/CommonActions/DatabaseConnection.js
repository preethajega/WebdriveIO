var mysql = require("mysql");
var dbConnectionB2C = mysql.createConnection({
  host: "ildbdev.ceb6ff1ld1fj.ap-northeast-1.rds.amazonaws.com",
  user: "ildbdev",
  password: "Password",
  database: "b2cdevdb",
  multipleStatements: true

});

module.exports = dbConnectionB2C;
