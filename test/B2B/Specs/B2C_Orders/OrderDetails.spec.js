const assert = require("assert");
const path = require("path");
const shippment_path = require("../../PageObjects/Invoice/shippment");
const common_path =require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
var B2B_loginIp = require("../../Inputs/B2B_login");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
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

     it("Accept order ",async () => {
         await landing_path.viewOrder(landing_path.orderPlaced);   
         await detail_path.acceptOrder(B2C_OrdersIp.warehouse,B2C_OrdersIp.tax);
         await actionsWrappers.checkClickableAndClick(common_path.close);
   
    })

    it("Download pdf for accepted order", async() =>{
        await detail_path.pdfDownload(landing_path.orderAccepted);

    })

    it("cancel placed order ",async () => {
        await landing_path.viewOrder(landing_path.orderPlaced);   
        await detail_path.cancelOrder(B2C_OrdersIp.cancelMsg);
     })
 
     it("cancel Accepted order ",async () => {
         await landing_path.viewOrder(landing_path.orderAccepted);   
         await detail_path.cancelOrder(B2C_OrdersIp.cancelMsg);
      })

    it("Book order" , async () =>{
        await landing_path.viewOrder(landing_path.orderAccepted);   
        await detail_path.bookOrder(B2C_OrdersIp.erpId);
        await actionsWrappers.checkClickableAndClick(common_path.close);
    })

    it("Download pdf for Booked order", async() =>{
        await detail_path.pdfDownload(landing_path.orderBooked);

    })
    
    it("cancel the Booked order",async () =>{
        await landing_path.viewOrder(landing_path.orderBooked);  
        await detail_path.moreOptionScenarios(detail_path.orderCancel,B2C_OrdersIp.notAllowed); 
    })

    it("payment alert" , async() =>{
        await landing_path.viewOrder(landing_path.odrBK_PayPen);   
        await detail_path.CheckPaymentAlert();

    })

       it("cancel the already canceled order",async () =>{
        await landing_path.viewOrder(landing_path.canceled);  
        await detail_path.moreOptionScenarios(detail_path.orderCancel,B2C_OrdersIp.alreadyCanceled); 
    }) 
    
    it("Invoice the Booked order",async () =>{
            await landing_path.viewOrder(landing_path.orderBooked);  
            await browser.pause(3000);
            await detail_path.fullfill_Invoice();          
        })

    it("Download pdf for Invoiced order", async() =>{
        await detail_path.pdfDownload(landing_path.invoiced);

    })
    it("cancel the Invoiced order",async () =>{
           await landing_path.viewOrder(landing_path.invoiced);  
           await detail_path.moreOptionScenarios(detail_path.orderCancel,B2C_OrdersIp.notAllowed); 
    })

    
    it("Shippment the Order",async () =>{
        await landing_path.viewOrder(landing_path.invoiced);  
        await shippment_path.ShippmentFn(detail_path.createShippment);
 })

 it("cancel the Invoiced order",async () =>{
    await landing_path.viewOrder(landing_path.shipped);  
    await detail_path.moreOptionScenarios(detail_path.orderCancel,B2C_OrdersIp.notAllowed); 
})


       it("Download pdf for shipped order", async() =>{
        await detail_path.pdfDownload(landing_path.shipped);

     })

      it("Mark as delivered for invoiced order",async () =>{
        await landing_path.viewOrder(landing_path.invoiced);
        await detail_path.markAsdeliveredFn();  
      })
    
      it("Mark as delivered for shipped order",async () =>{
        await landing_path.viewOrder(landing_path.shipped);
        await detail_path.markAsdeliveredFn();  
      })

    it("Download pdf for delivered order", async() =>{
        await detail_path.pdfDownload(landing_path.delivered);

     })

     it("cancel the Invoiced order",async () =>{
        await landing_path.viewOrder(landing_path.delivered);  
        await detail_path.moreOptionScenarios(detail_path.orderCancel,B2C_OrdersIp.notAllowed); 
    })

    
})   