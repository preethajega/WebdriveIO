var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var LoginPage = require("../PageObjects/Login.page");
const ProdInput = require("../Input/Product.io");
const loginInput = require("../Input/Login.io");
var path = require("./../PageObjects/Checkout.page");
var checkoutPath=require("./../PageObjects/Direct_checkout.page");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var addAddress = require("./../CommonFunctions/AddAddress");
var  searchProdTocart= require("../CommonFunctions/AddProductCart");
var  checkout= require("../CommonFunctions/Checkout");
const assert = require("assert");

describe("Checkout  page", () => {
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

    it("Buy Product", async () => {
        await  searchProdTocart.searchProd(ProdInput.productName,ProdInput.qty,path.cartIcon);
        await  actionwrappers.urlValidation("checkout/cart");
        await  searchProdTocart.cartChanges(path.placeOrderCart);
        await actionwrappers.urlValidation("address");
     });

     it("Add Address", async ()=>{
        await  actionwrappers.checkVisibleClickableAndClick(checkoutPath.addAddress);
        await  addAddress.addAddressValid();
        await actionwrappers.urlValidation("address");
      });

     it("Change buyer location", async () =>{
         await checkout.changeDeliveryAddress();
         await actionwrappers.urlValidation("address");
         await actionwrappers.checkClickableAndClick(path.logo);
      });

      it("Change seller  location", async () =>{
        await  searchProdTocart.cartChanges(path.placeOrderCart);
        await checkout.changeDeliveryAddress();
        await actionwrappers.urlValidation("address");
        await checkout.changePickUpAddress();
        await actionwrappers.checkClickableAndClick(path.logo);
     });

     it("place order and pay on delivery", async() =>{
      await searchProdTocart.buyProd(ProdInput.ItemName);
      await checkout.selectPODAndPlaceOrder();
      await actionwrappers.urlValidation("ordersuccess");
      await actionwrappers.checkClickableAndClick(path.logo);
      await actionwrappers.displayValidation(path.searchButtonHeader);
   });
       

     it("place order using BankTransfer" , async() =>{
        await searchProdTocart.buyProd(ProdInput.product2);
        await checkout.selectOnlinePaymentAndPlaceOrder("BankTransfer");
        await actionwrappers.checkClickableAndClick(path.continueShopping);
        await actionwrappers.displayValidation(path.searchButtonHeader);

     });

     it("place order using othernetworks" , async() =>{
        await searchProdTocart.buyProd(ProdInput.product3);
        await checkout.selectOnlinePaymentAndPlaceOrder("otherNetwork");
        await actionwrappers.urlValidation("ordersuccess");
        await actionwrappers.checkClickableAndClick(path.logo);
        await actionwrappers.displayValidation(path.searchButtonHeader);

     });

     it("place order using MTNMoMoPay" , async() =>{
        await searchProdTocart.buyProd(ProdInput.productName);
        await checkout.selectOnlinePaymentAndPlaceOrder("MTNMoMoPay");
        await actionwrappers.urlValidation("ordersuccess");
        await actionwrappers.checkClickableAndClick(path.logo);
        await actionwrappers.displayValidation(path.searchButtonHeader);


    
     });



});

