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
const assert = require("assert");

describe("Profile  page", () => {

  let otp;
  let test;

  it("Opening and clicking login button", async () => {
    await LoginPage.open();
    await LoginPage.wait();
  });

  it("Valid Login Scenario", async () => {
    await LoginPage.signInIconClick();
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      ""
    );
    await LoginPage.login(loginInput.validMobile);
  });

  it("DB Connection", async () => {
    await browser.pause(3000);
    var sql = "SELECT otp FROM Users where ID=90;";
        test = await LoginPage.dbConnection(sql).then((res) => {
      otp = res ? res[0].otp : null;
      return otp;
    });
    dbConnectionB2C.end();
  });

  it("one time passcode", async () => {
    await browser.pause(1000);
    await LoginPage.inputOTP(otp);
    await browser.pause(1000);
    
  });



it("Profile navigation", async () => {
  
  await menuNavigation.Navigation( menuPage.profileIcon,menuPage.profile);
  await actionwrappers.urlValidation("profile");
     
});

it("profile image size validation", async () =>{
  let appIconExist = await profilePage.appIcon.isExisting();

  if(appIconExist){
  await  uploadAttchment.upload(profilePage.appIcon,ProfileInput.profileImage);
 // assert.strictEqual(await profilePage.snackbar.getText(),"Maximum file size of 200KB allowed");
  }

  else {
    await  actionwrappers.checkVisibleClickableAndClick(profilePage.removeAppicon);
    await  actionwrappers.checkVisibleClickableAndClick(profilePage.save);
    assert.strictEqual(await profilePage.snackbar.getText(),"Profile updated successfully");
    await  uploadAttchment.upload(profilePage.appIcon,ProfileInput.profileImage);
    
  }  
     
});
  

it("upload profile image", async () =>{
  await  uploadAttchment.upload(profilePage.appIcon,ProfileInput.profilepath);
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.save);
  assert.strictEqual(await profilePage.snackbar.getText(),"Profile updated successfully");
    
    
});

it("Remove the app icon", async () =>{
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.removeAppicon);
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.save);
  assert.strictEqual(await profilePage.snackbar.getText(),"Profile updated successfully");

});

it("Update the name & Email",async () =>{
  await  actionwrappers.clearAndsetValue(profilePage.fullName,ProfileInput.name);
  await  actionwrappers.clearAndsetValue(profilePage.emailId,ProfileInput.mail);
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.save);
  assert.strictEqual(await profilePage.snackbar.getText(),"Profile updated successfully");
    
});

it("save with empty name",async () =>{
  await  actionwrappers.clearValues(profilePage.fullName);
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.save);
  assert.strictEqual(await profilePage.nameAlert.getText(),"Name required");
    
});


it("Add Address", async ()=>{
  await  actionwrappers.checkVisibleClickableAndClick(profilePage.addAddress);
  await  addAddress.addAddressValid()
});

it("Edit Address", async () =>{
  await actionwrappers.scrollEle(profilePage.lastAddress);
  await actionwrappers.checkVisibleClickableAndClick(profilePage.lastAddress);
  await actionwrappers.checkVisibleClickableAndClick(profilePage.editAddress);
  await addAddress.addAddressValid();

});

it("Remove the Address", async () =>{
  await actionwrappers.scrollEle(profilePage.lastAddress);
  await actionwrappers.checkVisibleClickableAndClick(profilePage.lastAddress);
  await actionwrappers.checkVisibleClickableAndClick(profilePage.removeAddress);
  await actionwrappers.checkVisibleClickableAndClick(profilePage.deleteAddress);
  

});

it("Logout ", async () => {
  await LoginPage.open();
  await menuNavigation.Navigation(menuPage.profileIcon,menuPage.logoutBtn);
          
   });




});
