var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var LoginPage = require("../PageObjects/Login.page");
var menuPage = require("../PageObjects/Menu.page");
const ProdInput = require("../Input/Product.io");
const loginInput = require("../Input/Login.io");
var path = require("../PageObjects/Checkout.page");
var actionwrappers = require("../../CommonActions/ActionsWrappers");
var  searchProdTocart= require("../CommonFunctions/AddProductCart");
var  checkout= require("../CommonFunctions/Checkout");
var  menuNavigation= require("../CommonFunctions/MenuNavigation");
const assert = require("assert");

describe("select product and loginpage", () => {
    let otp;
    let test;

it("Opening b2cwebsite", async () => {
      await LoginPage.open();
      await LoginPage.wait();
    });

it("addtocart and login" ,  async() =>{
    await searchProdTocart.buyProd(ProdInput.productName);
    await browser.pause(2000);
    await actionwrappers.urlValidation("login");
    
});

it("Valid Login Scenario", async () => {
    await actionwrappers.checkVisibleClickableAndClick(path.loginORsignup);
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(LoginPage.mobileNumber,"");
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

it("Placeorder after login",async () =>{
    await checkout.selectPODAndPlaceOrder();
    await actionwrappers.urlValidation("ordersuccess");
    await actionwrappers.checkClickableAndClick(path.orderDetails);
    await actionwrappers.urlValidation("order-details");


});


it("Logout ", async () => {
  
  await menuNavigation.Navigation(menuPage.profileIcon,menuPage.logoutBtn);
          
   });


});
