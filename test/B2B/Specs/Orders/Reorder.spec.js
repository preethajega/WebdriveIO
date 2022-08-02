const Login=require('../../PageObjects/Login.page')
const B2Bloginip=require('../../Inputs/B2B_login')
const LogOut=require('../../PageObjects/logout.page')
const actionsWrappers=require('../../../CommonActions/ActionsWrappers')
const landing=require('../../CommonFunctions/salesModule/SalesCards/OrderFilterCard')
const commonfun=require('../../CommonFunctions/Orders/Reorder')
const reorderpage=require('../../PageObjects/Orders/Reorder')
const requiredate=require("../../CommonFunctions/salesModule/SalesCards/EndCustomerCard")
const requirepage=require("../../PageObjects/SalesModule/summarypage/EndCustomerCard.page")
const Reorder_ip = require('../../Inputs/Orders/Reorder_ip')



describe('Reorder the product', async() => {

    // it('Should allow to access login seller ',async () => {
        
    // await Login.open()
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
        
    await Login.open()
    await Login.login(B2Bloginip.Buyer6Email,B2Bloginip.Buyer6Password);
    await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    })

    it('Should allow the reorder the existing order',async()=>{
      await landing.open();
      await browser.pause(10000)
      await commonfun.OpenTheOrder(reorderpage.Bproductid,reorderpage.MoreOption,Reorder_ip.keyvalue)
      await browser.pause(2000)
      await commonfun.AddProduct(reorderpage.ScrollAttachment,reorderpage.Searchbox,Reorder_ip.search,reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.DateaddToasterIp)
      await actionsWrappers.scrollEle(reorderpage.BScrollToShip)
      await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await commonfun.ValidationOfRequestPrice(reorderpage.Toaster,reorderpage.ScrollAttachment,reorderpage.Searchbox,"starbase",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)

    })
      it('validation of MOQ', async() => {
      // await commonfun.AddProduct(reorderpage.ScrollAttachment,reorderpage.Searchbox,"starbase",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      // await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await commonfun.ValidationOfMOQ(reorderpage.Toaster,reorderpage.MOQErrorMsg)
      await actionsWrappers.Click(reorderpage.EditDialogeCancel)
      await browser.pause(7000)
    });
    it('Logout the Buyer Account',async () => {
      await LogOut.logout(LogOut.logouticon,LogOut.logoutBtn,reorderpage.Toaster,"Logged out successfully")
      await browser.pause(5000)
    });

     it('Should allow to access login seller ',async () => {
        
    await Login.open()
    await Login.login(B2Bloginip.OwnerEmail,B2Bloginip.OwnerPassword);
    await browser.pause(2000)
    await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    })
    it('check the Acknowledge status in Seller',async() => {
        await landing.open();
        await browser.pause(10000)
        await actionsWrappers.Click(reorderpage.ALLTab)
        await browser.pause(1000)
        await actionsWrappers.Click(reorderpage.Sproductid)
        await actionsWrappers.snackBarValidate(reorderpage.OrderAcknowledge,"ORDER ACKNOWLEDGED")

    });

    it('Should allow to access the logout seller',async () => {
      await LogOut.logout(LogOut.logouticon,LogOut.logoutBtn,reorderpage.Toaster,"Logged out successfully")
      await browser.pause(5000)
    });

    it('should allow to access the login buyer',async () => {
      await Login.open()
      await Login.login(B2Bloginip.Buyer6Email,B2Bloginip.Buyer6Password);
      await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    });

    it('check the Acknowledge status in Buyer',async() => {
      await landing.open();
      await browser.pause(10000)
      await actionsWrappers.Click(reorderpage.Bproductid)
      await actionsWrappers.snackBarValidate(reorderpage.OrderAcknowledge,"ORDER ACKNOWLEDGED")

  });
});