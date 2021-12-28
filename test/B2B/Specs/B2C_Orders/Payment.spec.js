const assert = require("assert");
const path = require("path");
const payment_path = require("../../PageObjects/Invoice/Payment");
const shippment_path = require("../../PageObjects/Invoice/shippment");
const common_path =require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
var B2B_loginIp = require("../../Inputs/B2B_login");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
var shippmentIp = require("../../Inputs/Orders/shippmentIp");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const landing_path = require("../../PageObjects/B2C_Orders/B2C_LandingPage");
const detail_path = require("../../PageObjects/B2C_Orders/B2C_OrderDetailPage");





describe("B2C DetailPage", () => {
    
    it("Should allow to access login ",async () => {
     await  browser.maximizeWindow();
     await  LoginPage.open();
     await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
     await  actionsWrappers.urlValidation("/dashboard");
     await  landing_path.open();
        
     })

     it("payment vaidation for placed orders ",async () =>{
        await landing_path.viewOrder(landing_path.odrPL_PayPen);
        await detail_path.moreOptionScenarios(detail_path.addPayment,B2C_OrdersIp.acceptAndPay)
      })

      it("payment vaidation for already paid orders ",async () =>{
        await landing_path.viewOrder(landing_path.canceled);
        await detail_path.moreOptionScenarios(detail_path.addPayment,B2C_OrdersIp.alreadyCanceled)
      })
      
      it("payment vaidation for already paid orders ",async () =>{
        await landing_path.viewOrder(landing_path.paid);
        await detail_path.moreOptionScenarios(detail_path.addPayment,B2C_OrdersIp.alreadyPaid)
      })


})   