const LoginPage = require("../../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../../CommonActions/ActionsWrappers");
const path = require("../../../../PageObjects/Quotes/CustomProductCard");
const AddCustomProductIP = require("../../../../Inputs/salesModule/AddCustomProducts");
const CustomProduct = require("../../../../CommonFunctions/Quotes/CustomProductCards");
const CommonObjects= require("../../../../PageObjects/Common/commonObjects")
describe("Add the new custom Product from cart page", async () =>{

    it('Should allow to access login' , async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        // await LoginPage.login(B2B_loginIp.Buyer5Email, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dev3.myapptino.com/");
        await browser.pause(5000)
    })
    it('Should click the cart icon button', async ()=>{
        await CustomProduct.ClickCartIcon1(path.ClickCartIcon)
    });
    it('Should add new custom product and save it ', async ()=>{
        await CustomProduct.AddCustomProduct( path.AddCustomProductBtn,path.ProductIDField,AddCustomProductIP.ProductID1,path.ProductVariantField,AddCustomProductIP.ProductVariantname,
            path.ProductNameField,AddCustomProductIP.Productname,path.PrimaryCategoryField,AddCustomProductIP.Primarycategory,path.HSNCodeField,AddCustomProductIP.HSDcode,
            path.UnitPriceListField,AddCustomProductIP.UnitListprice,path.ProductCostField,AddCustomProductIP.Productcost,path.UnitQuantityField,AddCustomProductIP.Unitquantity,
            path.PackQuantityField,AddCustomProductIP.Packquantity,path.DivisionField,AddCustomProductIP.Division,path.BUField,AddCustomProductIP.Businessunit,path.UnitOfMeasure,AddCustomProductIP.Unitofmearsure)  
            await CustomProduct.snakbar(path.SaveBtn,path.Toaster,AddCustomProductIP.SaveAlert)   

    })

    it('Unselect CP mark', async ()=>{
        await CustomProduct.Unselect_CP_Mark_setting(path.TextOfCp,path.Click_prodGetTxt,path.PenBtnProductPage,path.scrollToCP,path.CPOff,path.saveAndpublish)
        await CustomProduct.ClickCartIcon1(path.ClickCartIcon);
        
     })

     it('check if CP present again ', async ()=>{
        //TODO: Remove refresh if the bug is fixed
        await browser.refresh();
        await browser.pause(5000);;
        const isCPTextExist = await path.TextOfCp.isExisting()
        expect(isCPTextExist).toBeFalsy();
      })    
    it('Should show all the required field in red color with message once clicks the save button', async()=> {
        await CustomProduct.MandatoryFieldCheck(path.AddCustomProductBtn,path.ProductIDField,path.ProductVariantField,
            path.ProductNameField,path.PrimaryCategoryField,path.HSNCodeField,path.SaveBtn,path.CancelBtn)
    })
    it('Should ensure productID is already exists', async ()=>{
        await CustomProduct.AddCustomProduct(
            path.AddCustomProductBtn,path.ProductIDField,AddCustomProductIP.ProductID1,path.ProductVariantField,AddCustomProductIP.ProductVariantname, 
            path.ProductNameField,AddCustomProductIP.Productname,path.PrimaryCategoryField,AddCustomProductIP.Primarycategory,path.HSNCodeField,AddCustomProductIP.HSDcode, 
            path.UnitPriceListField,AddCustomProductIP.UnitListprice,path.ProductCostField,AddCustomProductIP.Productcost,path.UnitQuantityField,AddCustomProductIP.Unitquantity, 
            path.PackQuantityField,AddCustomProductIP.Packquantity, path.DivisionField,AddCustomProductIP.Division,path.BUField,AddCustomProductIP.Businessunit,path.UnitOfMeasure,AddCustomProductIP.Unitofmearsure,path.SaveBtn)
           await CustomProduct.cancel_Btn(CommonObjects.cancelDailog)  

    })
    it('Should Increase one quantity,Checks the cancel button and remove the CP', async ()=>{
        await CustomProduct.CP_Card_Behaviors(path.QuantityfieldInCP,path.removeCPBtn,path.CancelCPBtn,path.removeCPBtn)
        await CustomProduct.snakbar(path.RemoveAlertCPbtn,path.Toaster,AddCustomProductIP.snackRemoveMsg)
    })
    it('create quote and click Add the custom product ',async()=>{
        await CustomProduct.Create_Quote_CP(path.SelectBuyerCom,AddCustomProductIP.SelectBuyIP,path.Create_Quote)
        await CustomProduct.AddCustomProduct(path.Quote_AddCustomProductBtn1,path.ProductIDField,AddCustomProductIP.ProductID2,path.ProductVariantField,AddCustomProductIP.ProductVariantname,path.ProductNameField,AddCustomProductIP.Productname,
        path.PrimaryCategoryField,AddCustomProductIP.Primarycategory, path.HSNCodeField,AddCustomProductIP.HSDcode,path.UnitPriceListField,AddCustomProductIP.UnitListprice,path.ProductCostField,AddCustomProductIP.Productcost,
        path.UnitQuantityField,AddCustomProductIP.Unitquantity,path.PackQuantityField,AddCustomProductIP.Packquantity,path.DivisionField,AddCustomProductIP.Division,path.BUField,AddCustomProductIP.Businessunit,path.UnitOfMeasure,AddCustomProductIP.Unitofmearsure)
        await CustomProduct.snakbar(path.SaveBtn,path.Toaster,AddCustomProductIP.SaveAlert)   
   })
    


})
