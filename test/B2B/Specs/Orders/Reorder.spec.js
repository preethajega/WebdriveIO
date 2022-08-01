const Login=require('../../PageObjects/Login.page')
const B2Bloginip=require('../../Inputs/B2B_login')
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
    //   await commonfun.OpenTheOrder(reorderpage.productid,reorderpage.MoreOption,"c")
    //   await browser.pause(4000)
    //   await commonfun.AddProduct(reorderpage.ScrollAddMoreProduct,reorderpage.Searchbox,"cricketbat",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
    //   await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
    //   await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.DateaddToasterIp)
    //   await actionsWrappers.scrollEle(reorderpage.BScrollToShip)
    //   await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
    //   await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
    //   await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.TagMsg)
    //   await actionsWrappers.scrollEle(reorderpage.tagsButton)
    //   await actionsWrappers.selectDrpdownusingKeyboard(reorderpage.tagsButton)
    //   await actionsWrappers.scrollEle(reorderpage.tagsButton)
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
      await commonfun.AddProduct(reorderpage.ScrollAddMoreProduct,reorderpage.Searchbox,Reorder_ip.search,reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await actionsWrappers.snackBarValidate(reorderpage.Toaster,Reorder_ip.DateaddToasterIp)
      await actionsWrappers.scrollEle(reorderpage.BScrollToShip)
      await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await commonfun.ValidationOfRequestPrice(reorderpage.Toaster,reorderpage.Searchbox,reorderpage.Searchbox,"Ten",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      // await actionsWrappers.Click(reorderpage.PlaceOrderBtn)

    })
      it('validation', async() => {
      await commonfun.AddProduct(reorderpage.Searchbox,reorderpage.Searchbox,"starbase",reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp)
      await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
      await commonfun.ValidationOfMOQ(reorderpage.Toaster,reorderpage.MOQErrorMsg)
    });
});