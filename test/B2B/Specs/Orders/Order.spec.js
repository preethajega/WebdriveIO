const LoginPage = require("../../PageObjects/Login.page")
const LogoutPage= require("../../PageObjects/logout.page")
const B2B_loginIP = require("../../Inputs/B2B_login")
const path = require("../../PageObjects/Orders/Order.path")
const OrderIP = require("../../Inputs/Orders/Order_ip")
const OrderCF = require("../../CommonFunctions/Orders/Order.CF")
const ActionWrappers = require("../../../CommonActions/ActionsWrappers")
const DateSelector = require("../../CommonFunctions/salesModule/SalesCards/EndCustomerCard")
const pathOfDate = require("../../PageObjects/SalesModule/summarypage/EndCustomerCard.page")
//const CommonObjects= require("../../PageObjects/Common/commonObjects")
const pathcart= require("../../PageObjects/Quotes/CustomProductCard")

describe("Place the order, download the product as a excel and download order pdf", async ()=>{

    it('Should allow to access login' , async () => {
        await LoginPage.open();
      //  await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await LoginPage.login(B2B_loginIP.Buyer7Email, B2B_loginIP.OwnerPassword);
        await ActionWrappers.urlValidation("/dev3.myapptino.com/");
        await browser.pause(5000)
    })
    it('Should click the cart icon button', async ()=>{
        await OrderCF.ClickCartIcon1(pathcart.ClickCartIcon)
        await browser.pause(5000)
    });
     it('Place the order', async()=>{
        await OrderCF.Place_Order(path.CreateOrderbtn,path.Searchbox,OrderIP.search,path.selectproduct,path.Toaster,OrderIP.Unknown_Price,path.PlaceOrderBtn,path.Toaster,OrderIP.daterequire)
        await DateSelector.DateSelecter(pathOfDate.RequiredDeliveryDateBuyer,pathOfDate.NextMonthBtn,pathOfDate.DatePath)
        await browser.pause(3000)
        await OrderCF.PlaceOrder_NameDialog(path.PlaceOrderBtn,path.placeOrderDilogBtn,path.PONamemadatory,OrderIP.PODNameReq,path.PODialogCancelbtn,path.PlaceOrderBtn,path.placeOrderName,OrderIP.NewOrder_Buyer,path.placeOrderDilogBtn)

    })
    it('Logout the Buyer Account',async () => {
        await LogoutPage.logout(LogoutPage.logouticon,LogoutPage.logoutBtn,path.Toaster,B2B_loginIP.logoutAlertMsg)
        await browser.pause(5000)
      });

    it('Login to the seller Account and Go to Order details page and check the status',async ()=>{
        await LoginPage.open();
         await LoginPage.login(B2B_loginIP.OwnerEmail, B2B_loginIP.OwnerPassword);
          await ActionWrappers.urlValidation("/dev3.myapptino.com/");
          await browser.pause(5000)
          await OrderCF.OrderDetailsPage(path.logicon,path.Salespath,path.OrdersDetailsPage,path.OrderDetailsPage_Order,path.statusOfOrderpath,OrderIP.statusOfOrder)
        //  await OrderCF.Download_OrderAndExportProd(path.ExportBtn_OrderProd,path.ThreeDot,path.downloadOrderPDF)
          await LogoutPage.logout(LogoutPage.logouticon,LogoutPage.logoutBtn,path.Toaster,B2B_loginIP.logoutAlertMsg)
          await browser.pause(5000)
    })
    it('Login to buyer Account and Go to Order details page and check the status, export Product and download PDF', async ()=>{
        await LoginPage.open();
          await LoginPage.login(B2B_loginIP.Buyer7Email, B2B_loginIP.OwnerPassword);
          await ActionWrappers.urlValidation("/dev3.myapptino.com/");
          await browser.pause(5000)
          await OrderCF.OrderDetailsPage(path.logicon,path.Salespath,path.OrdersDetailsPage,path.OrderDetailsPage_Order,path.statusOfOrderpath,OrderIP.statusOfOrder)
          await OrderCF.Download_OrderAndExportProd(path.ExportBtn_OrderProd,path.ThreeDot,path.downloadOrderPDF)
          await LogoutPage.logout(LogoutPage.logouticon,LogoutPage.logoutBtn,path.Toaster,B2B_loginIP.logoutAlertMsg)
          await browser.pause(5000)
    })
})
