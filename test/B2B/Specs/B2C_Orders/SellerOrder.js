const assert = require("assert");
const path = require("path");
const sellerB2C = require("../../PageObjects/B2C_Orders/SellerB2COrder");
const payment = require("../../PageObjects/Invoice/Payment");
const commonObjects =require("../../PageObjects/Common/commonObjects");
const TestActionWrapper = require("../../../CommonActions/ActionsWrappers");
const LoginPage = require("../../PageObjects/Login.page");
var B2B_loginIp = require("../../Inputs/B2B_login");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");




describe("Login and Navigate to b2c Orders ", () => {
    
    it("Should allow to access login ",async () => {
     await  browser.maximizeWindow();
     await  LoginPage.open();
     await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
     await  TestActionWrapper.urlValidation("/dashboard");
     await  sellerB2C.open();
     await  sellerB2C.frstcreateB2cOrder();
     await  sellerB2C.open();
     await sellerB2C.createB2Corder();
   
     })

      it("place order without customername",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.setCustName_MobNo("",B2C_OrdersIp.validMobile);
        await sellerB2C.placeOrder();
        await ActionsWrappers.displayValidation(sellerB2C.alertCusName);
     })

     it("place order without mobileNo",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.setCustName_MobNo(B2C_OrdersIp.customer,"");
        await sellerB2C.placeOrder();
        await ActionsWrappers.displayValidation(sellerB2C.alertMobile);
     })



     it("place order without customerdetails",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchProduct();
        await sellerB2C.placeOrder();
        await ActionsWrappers.displayValidation(sellerB2C.alertCusName);
     })

     it("place order without product",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchCustomer();
        await sellerB2C.placeOrder();
        await ActionsWrappers.displayValidation(payment.alertRecvAmount);
     })

     it("place order with empty price",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchCustomer();
        await sellerB2C.searchProduct();
        await ActionsWrappers.clearValues(payment.receivedAmount);
        await sellerB2C.placeOrder();
        await ActionsWrappers.displayValidation(payment.alertpaymentEmpty);
     })

     it("place order with empty qty",async()=>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchCustomer();
        await sellerB2C.searchProduct();
        await ActionsWrappers.clearValues(sellerB2C.prodQty);
        await sellerB2C.placeOrder();
        await ActionsWrappers.scrollEle(payment.receivedAmount);
        await ActionsWrappers.eleDisplayed(payment.alertpayment);
     })




     it("Change buyer address & place order",async() =>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchCustomer();
        await sellerB2C.changeAddress(sellerB2C.changeBuyerAddress);
        await sellerB2C.searchProduct();
        await sellerB2C.placeOrder();

     })

     it("Change seller address & place order",async() =>{
        await  sellerB2C.open();
        await sellerB2C.createB2Corder();
        await sellerB2C.searchCustomer();
        await sellerB2C.changeAddress(sellerB2C.changeSellerAddress);
        await sellerB2C.searchProduct();
        await sellerB2C.placeOrder();

     })

     it("Create b2c order without Payment", async() =>{
         await sellerB2C.open();
         await sellerB2C.createB2Corder();
         await sellerB2C.searchCustomer();
         await sellerB2C.searchProduct();
         await ActionsWrappers.scrollEle(payment.receivedAmount);
         await ActionsWrappers.checkClickableAndClick(payment.withoutpaymentRadio);
         await sellerB2C.placeOrder();
     })



     it("Create b2c order", async() =>{
         await  sellerB2C.open();
         await sellerB2C.createB2Corder();
         await sellerB2C.searchCustomer();
         await sellerB2C.searchProduct();
         await sellerB2C.placeOrder();
     })
    })