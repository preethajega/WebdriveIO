// import _ from "lodash";

var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
describe('MYSQL Test', function() {

 let otp;
  it('Getting values from DB', function() {

    
    var sql = "SELECT otp FROM Users where ID=9;"
    dbConnectionB2C.connect();
      dbConnectionB2C.query(sql, function (error, result) {
        if (error) throw error;
        console.log(result);
        if(!error){
          console.log("if");
          otp = result?result[0].otp :null;
        }
        console.log(otp);
        

      }); 
   });

   it('Test', function(){
    browser.url(`https://new.bcommerce.in/auth/login`);
    let email = $('[name="Username"]');
    let pswd = $('[name="Password"]')
    email.setValue(otp);
    pswd.click()
    browser.pause(8000);
    pswd.setValue("Admin@123");

   })
});