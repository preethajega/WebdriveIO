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
    // await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    // await landing.open();
    // await browser.pause(10000)
    // await commonfun.OpenTheOrder(reorderpage.productid,reorderpage.MoreOption,"c")
    // await browser.pause(4000)
    // })
    
    // it('add a product seller', async() => {
    //     await commonfun.AddProduct(reorderpage.scrollFinancial,reorderpage.Searchbox,"sak",reorderpage.clicksearch,reorderpage.PlaceOrderBtn)
    //    
    // });


  //buyer//

  it('Should allow to access login Buyer  ',async () => {
        
    await Login.open()
    await Login.login(B2Bloginip.Buyer6Email,B2Bloginip.Buyer6Password);
    await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    await landing.open();
    await browser.pause(10000)
    await commonfun.OpenTheOrder(reorderpage.Bproductid,reorderpage.MoreOption,Reorder_ip.keyvalue)
    await browser.pause(2000)
    })
    

    it('add a product buyer', async() => {
        await commonfun.AddProduct(reorderpage.Searchbox,reorderpage.Searchbox,Reorder_ip.search,reorderpage.clicksearch,reorderpage.Toaster,Reorder_ip.ProductAddSuccToasterIp,reorderpage.PlaceOrderBtn,Reorder_ip.DateaddToasterIp)
        await actionsWrappers.scrollEle(reorderpage.BScrollToShip)
        await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
        await actionsWrappers.Click(reorderpage.PlaceOrderBtn)
        await commonfun.validation(reorderpage.Toaster)
    });


 
    

    
});