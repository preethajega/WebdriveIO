var DBConnection = function() {
  var mysql = require("mysql");
  this.ConnectDatabase = mysql.createConnection({
    host: "ildbdev.ceb6ff1ld1fj.ap-northeast-1.rds.amazonaws.com",
    user: "ildbdev",
    password: "Password",
    database: "OboDevDB"
  });
};

module.exports = new DBConnection();
