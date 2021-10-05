const assert = require("assert");
const path = require("path");
const payment = require("../../PageObjects/Invoice/Payment");
const shippment = require("../../PageObjects/Invoice/shippment");
const commonObjects =require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
var B2B_loginIp = require("../../Inputs/B2B_login");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
var shippmentIp = require("../../Inputs/shippmentIp");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const B2C_Landing = require("../../PageObjects/B2C_Orders/B2C_LandingPage");
const B2C_Detail = require("../../PageObjects/B2C_Orders/B2C_OrderDetailPage");





describe("B2C DetailPage", () => {
    
    it("Should allow to access login ",async () => {
     await  browser.maximizeWindow();
     await  LoginPage.open();
     await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
     await  actionsWrappers.urlValidation("/dashboard");
     await  B2C_Landing.open();
     
        
     })

     it("Accept order ",async () => {
         await B2C_Landing.viewOrder(B2C_Landing.orderPlaced);   
         await B2C_Detail.acceptOrder(B2C_OrdersIp.warehouse,B2C_OrdersIp.tax);
         await actionsWrappers.checkClickableAndClick(commonObjects.close);
   
    })

    it("Download pdf for accepted order", async() =>{
        await B2C_Detail.pdfDownload(B2C_Landing.orderAccepted);

    })

    it("cancel placed order ",async () => {
        await B2C_Landing.viewOrder(B2C_Landing.orderPlaced);   
        await B2C_Detail.cancelOrder(B2C_OrdersIp.cancelMsg);
     })
 
     it("cancel Accepted order ",async () => {
         await B2C_Landing.viewOrder(B2C_Landing.orderAccepted);   
         await B2C_Detail.cancelOrder(B2C_OrdersIp.cancelMsg);
      })

    it("Book order" , async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.orderAccepted);   
        await B2C_Detail.bookOrder(B2C_OrdersIp.erpId);
        await actionsWrappers.checkClickableAndClick(commonObjects.close);
    })

    it("Download pdf for Booked order", async() =>{
        await B2C_Detail.pdfDownload(B2C_Landing.orderBooked);

    })
    
    it("cancel the Booked order",async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.orderBooked);  
        await B2C_Detail.cancelOrderScenarios(B2C_OrdersIp.notAllowed); 
    })

    it("payment alert" , async() =>{
        await B2C_Landing.viewOrder(B2C_Detail.odrBked_PaymtPendg);   
        await B2C_Detail.CheckPaymentAlert();

    })

       it("cancel the already canceled order",async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.canceled);  
        await B2C_Detail.cancelOrderScenarios(B2C_OrdersIp.alreadyCanceled); 
    }) 
    
    it("Invoice the Booked order",async () =>{
            await B2C_Landing.viewOrder(B2C_Landing.orderBooked);  
            await browser.pause(3000);
            await B2C_Detail.fullfill_Invoice();          
        })

    it("Download pdf for Invoiced order", async() =>{
        await B2C_Detail.pdfDownload(B2C_Landing.invoiced);

    })
    it("cancel the Invoiced order",async () =>{
           await B2C_Landing.viewOrder(B2C_Landing.invoiced);  
           await B2C_Detail.cancelOrderScenarios(B2C_OrdersIp.notAllowed); 
    })

    
    it("Shippment the Order",async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.invoiced);  
        await shippment.ShippmentFn(B2C_Detail.createShippment);
 })


       it("Download pdf for shipped order", async() =>{
        await B2C_Detail.pdfDownload(B2C_Landing.shipped);

     })

      it("Mark as delivered for invoiced order",async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.invoiced);
        await B2C_Detail.markAsdeliveredFn();  
      })
    
      it("Mark as delivered for shipped order",async () =>{
        await B2C_Landing.viewOrder(B2C_Landing.shipped);
        await B2C_Detail.markAsdeliveredFn();  
      })

    it("Download pdf for delivered order", async() =>{
        await B2C_Detail.pdfDownload(B2C_Landing.delivered);

     })


    
})   