var menuPage = require("../PageObjects/Menu.page");
var LoginPage = require("../PageObjects/Login.page");
const loginInput = require("../Input/Login.io");
var profilePage=require("../PageObjects/Profile.page");
const ProfileInput= require("../Input/profile.io");
var uploadAttchment = require("../../CommonActions/attchmentUpload");
var  menuNavigation= require("../CommonFunctions/MenuNavigation");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var addAddress = require("./../CommonFunctions/AddAddress");

describe("Profile  page", () => {
    let otp;
    let test;

    it("Valid Login Scenario", () => {
        LoginPage.open();
        LoginPage.wait();
    
        LoginPage.signInIcon.waitForDisplayed(8000);
        LoginPage.login(loginInput.validMobile);
      });

      it("DBConnect", function () {
        browser.pause(5000);
        var sql = "SELECT otp FROM Users where ID=90;";
        dbConnectionB2C.connect();
        test = dbConnectionB2C.query(sql, function (error, result) {
          if (error) throw error;
          if (!error) {
            otp = result ? result[0].otp : null;
          }
        });
        console.log(otp)
      });

      it("one time passcode", function () {
        browser.pause(3000)
        LoginPage.inputOTP(otp);
        browser.pause(3000);
        // LoginPage.image.click();
      });


it("Profile navigation", () => {
  
 menuNavigation.Navigation(menuPage.profileIcon,menuPage.profile);

 actionwrappers.urlValidation("profile");
     
});

it("upload prfile image",() =>{
    uploadAttchment.upload(profilePage.appIcon,ProfileInput.profilepath);
    actionwrappers.checkVisibleClickableAndClick(profilePage.save);
    
    
});


it("Update the name & Email",() =>{
    actionwrappers.clearAndsetValue(profilePage.fullName,ProfileInput.name);
    actionwrappers.clearAndsetValue(profilePage.emailId,ProfileInput.mail);
    actionwrappers.checkVisibleClickableAndClick(profilePage.save);
   
    
});


// it("Add Address",()=>{
//     actionwrappers.checkVisibleClickableAndClick(profilePage.addAddress);
//     addAddress.addAddressValid();
// });



it("Remove the Address", () =>{
    actionwrappers.scroll(profilePage.lastAddress);
    actionwrappers.checkVisibleClickableAndClick(profilePage.lastAddress);
    actionwrappers.checkVisibleClickableAndClick(profilePage.removeAddress);
    actionwrappers.checkVisibleClickableAndClick(profilePage.deleteAddress);


});

it("Remove the app icon",() =>{
    actionwrappers.checkVisibleClickableAndClick(profilePage.removeAppicon);
    actionwrappers.checkVisibleClickableAndClick(profilePage.save);

});

it("Logout ", () => {
  
    menuNavigation.Navigation(menuPage.profileIcon,menuPage.logoutBtn);
          
   });




});
