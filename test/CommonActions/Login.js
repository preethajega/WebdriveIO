var login = function() {
    var obj = require("./Path.js");
    var io = require("./input.js");
    
    var deferred = protractor.promise.defer();
    // var emailFormat = "Doesn't look like an email address";
   //  browser.driver.manage().deleteAllCookies();
    browser.url('https://dev.bcommerce.in/login');
    browser.maximizeWindow();
         
     this.loginaction = function(uid, pswd) {
   
      obj.uid.clearValue();
      obj.pswd.clearValue();
      obj.uid.setValue(uid);
      obj.pswd.setValue(pswd);
      obj.signup.click();
     };
   
    return deferred.promise;
   }
   module.exports = new login();
   