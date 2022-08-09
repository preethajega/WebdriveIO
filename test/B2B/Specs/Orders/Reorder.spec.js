const Login=require('../../PageObjects/Login.page')
const B2Bloginip=require('../../Inputs/B2B_login')
const LogOut=require('../../PageObjects/logout.page')
const actionsWrappers=require('../../../CommonActions/ActionsWrappers')
const landing=require('../../CommonFunctions/salesModule/SalesCards/OrderFilterCard')
const commonfun=require('../../CommonFunctions/Orders/Reorder')
const reorderpage=require('../../PageObjects/Orders/Order.path')
const Reorder_ip = require('../../Inputs/Orders/Order_ip')




describe('Reorder the product', async() => {

    // it('Should allow to access login seller ',async () => {
        
    //  Login.open()
    // await Login.login(B2Bloginip.OwnerEmail,B2Bloginip.OwnerPassword);
    // await browser.pause(2000)
    // await actionsWrappers.urlValidation("/dev3.myapptino.com/");
   
    // })
    
    // it('Reorder the existing order', async() => {
    //   await landing.open();
    //   await browser.pause(10000)
    //   await commonfun.OpenTheOrder(reorderpage.Sproductid,reorderpage.MoreOption,"c")
    //   await browser.pause(4000)
    //   await commonfun.AddProduct(reorderpage.ScrollAddMoreProduct,reorderpage.Searchbox,"chair",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
    //   await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
    //   await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.DateaddToasterIp)
    //   await actionsWrappers.scrollEle(reorderpage.BScrollToShip)
    //   await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
    //   await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
    //   await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.TagMsg)
    //   await actionsWrappers.scrollEle(reorderpage.tagsButton)
    //   await actionsWrappers.selectDrpdownusingKeyboard(reorderpage.tagsButton)
    //   await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
    //   await actionsWrappers.click(reorderpage.EditDialogeCancel)
    //   await browser.pause(3000)
    // });

    // it('Check the Acknowledge status in seller',async () => {
    //   await actionsWrappers.click(reorderpage.ALLTab)
    //   await actionsWrappers.Click(reorderpage.Sproductid)
    //   await actionsWrappers.snackBarValidate(reorderpage.OrderAcknowledge,"ORDER ACKNOWLEDGED")
    // });
    // it('Validation of Request price product',async()=>{
    //   await commonfun.ValidationOfRequestPrice(reorderpage.CheckRequestPrice,reorderpage.Searchbox,reorderpage.Searchbox,"Ten",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
    //   await actionsWrappers.Click1(reorderpage.PlaceOrderBtn)
    
    // })


  //buyer//

    it('Should allow to access login Buyer',async () => {    

      await commonfun.LoginPage(B2Bloginip.Buyer6Email,B2Bloginip.Buyer6Password)
      await browser.pause(3000)
      
    })

    it('Should allow the reorder the existing order',async () => {
      await landing.open();
      await browser.pause(5000)
      await commonfun.OpenTheOrder(reorderpage.Bproductid,reorderpage.MoreOption,Reorder_ip.keyvalue)
      await browser.pause(1000)
      await commonfun.AddProduct(reorderpage.ScrollAttachment,reorderpage.Searchbox,Reorder_ip.search,reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp,reorderpage.PlaceOrderBtn)
      await commonfun.RequiredDate(reorderpage.Toaster,Reorder_ip.DateaddToasterIp,reorderpage.BScrollToShip,reorderpage.PlaceOrderBtn)
      await commonfun.ValidationOfRequestPrice(reorderpage.Toaster,reorderpage.ScrollAttachment,reorderpage.Searchbox,Reorder_ip.search1,reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp,reorderpage.PlaceOrderBtn)
    })
      it('validation of MOQ',async() => {
      await commonfun.ValidationOfMOQ(reorderpage.PackOfQTY,reorderpage.MOQErrorMsg)
      await commonfun.EmptyInputValidate(reorderpage.PlaceOrderName,reorderpage.EditDialogePlaceOrder,reorderpage.EditDialogePlaceOrderERMsg,Reorder_ip.PODNameReq,Reorder_ip.FilterName)
      await browser.pause(4000)
    })
    it('Logout the Buyer Account',async () => {
      await LogOut.logout(LogOut.logouticon,LogOut.logoutBtn,reorderpage.Toaster,Reorder_ip.LogOutMsg)
      await browser.pause(5000)
    });

     it('Should allow to access login seller',async () => {
    
      await commonfun.LoginPage(B2Bloginip.OwnerEmail,B2Bloginip.OwnerPassword)
      await browser.pause(3000)
        
    });
    it('check the Acknowledge status in Seller',async() => {
       await commonfun.LandingAndValidationOfStatus(reorderpage.ALLTab,reorderpage.NameOfFilter,Reorder_ip.FilterName,reorderpage.ApplyBtnOfFilter,reorderpage.Sproductid,reorderpage.OrderStatus,Reorder_ip.statusOfOrder)

    });

    it('Should allow to access the logout seller',async () => {
       await LogOut.logout(LogOut.logouticon,LogOut.logoutBtn,reorderpage.Toaster,Reorder_ip.LogOutMsg)
       await browser.pause(5000)
    });

    it('should allow to access the login buyer',async () => {
     
      await commonfun.LoginPage(B2Bloginip.Buyer6Email,B2Bloginip.Buyer6Password)
      await browser.pause(3000)

    });

    it('check the Acknowledge status in Buyer',async() => {
      await commonfun.LandingAndValidationOfStatus(reorderpage.ALLTab,reorderpage.NameOfFilter,Reorder_ip.FilterName,reorderpage.ApplyBtnOfFilter,reorderpage.Bproductid,reorderpage.OrderStatus,Reorder_ip.statusOfOrder)

  });
  
    it ('Cancel the Acknowledge status order in Buyer',async()=>{
      await landing.open();
      await browser.pause(5000)
      await commonfun.OpenTheOrder(reorderpage.Bproductid,reorderpage.MoreOption,Reorder_ip.CancelKey)
      await commonfun.EmptyInputValidate(reorderpage.CancelDialogeBoxInput,reorderpage.CancelDialogeBoxCancelOrderBtn,reorderpage.CancelDialogeBoxERMsg,Reorder_ip.CancelInputERMsg,Reorder_ip.ReasonOfCancelValue)
      await commonfun.CancelValidationOfBuyer(reorderpage.OrderStatus,Reorder_ip.CancelStatus,reorderpage.ReasonOfCancel,Reorder_ip.ReasonOfCancelValue,reorderpage.RequestEditBtn,reorderpage.Toaster,Reorder_ip.CancelOrderErorrMsg,reorderpage.MoreOption,Reorder_ip.CancelKey)
  })
   
    it('Logout the Buyer Account',async () => {
        await LogOut.logout(LogOut.logouticon,LogOut.logoutBtn,reorderpage.Toaster,Reorder_ip.LogOutMsg)
        await browser.pause(5000)
      });
  
    it('Should allow to access login seller ',async () => {

      await commonfun.LoginPage(B2Bloginip.OwnerEmail,B2Bloginip.OwnerPassword)
      await browser.pause(3000)

      
      })
    it('check the Order Cancelled status in Seller',async() => {
          await commonfun.LandingAndValidationOfStatus(reorderpage.ALLTab,reorderpage.NameOfFilter,Reorder_ip.FilterName,reorderpage.ApplyBtnOfFilter,reorderpage.Sproductid,reorderpage.OrderStatus,Reorder_ip.CancelStatus)
          await commonfun.CancelValidationOfSeller(reorderpage.ReasonOfCancel,Reorder_ip.ReasonOfCancelValue,reorderpage.SEditOrderBtn,reorderpage.Toaster,Reorder_ip.CancelOrderErorrMsg,reorderpage.SCreateInvoiceBtn,reorderpage.MoreOption,Reorder_ip.CancelKey)
    });



});