const assert = require("assert");
const path = require("../../PageObjects/Quotes/CustomProductCard");
const ActionWrappers = require("../../../CommonActions/ActionsWrappers");
const AddCustomProductIP = require("../../Inputs/salesModule/AddCustomProducts");
const Page = require("../../PageObjects/page");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Common_Fn = require("../../PageObjects/Common/commonObjects")
class CustomProduct extends Page{
    async open() {
        super.open(path);
    }

    ClickCartIcon1 = async (toclickcart) => {
        await ActionWrappers.Click(toclickcart)
       // await browser.pause(3000)
    }
    AddCustomProduct = async (AddcustomPBtn,productIDfield,productIP,ProductVariantfiled,productvarientIP,
        productnamefield,productnameIP,primarycategoryfield,primarycategoryIP,HSDcode,HSDcodIP,unitLP,unitLPIP,
        productcost,productcostIP,unitQuantity,unitQuantityIp,PackQuantity,PackQuantityIP,Divisionpath,DivisionIP,
        BU,BUip,unitmeasure,unitmeasureIP,SaveBtn,/*toasterpath,savedmessage*/)=>{

        await ActionWrappers.Click(AddcustomPBtn)
        await browser.pause(3000)
        await ActionWrappers.clickAndSetvalue(productIDfield,productIP)
        await browser.pause(3000)
        await ActionWrappers.clickAndSetvalue(ProductVariantfiled,productvarientIP)
        await browser.pause(5000)
        await ActionWrappers.clickSetvalueAndSelectoption1(productnamefield,productnameIP)
        await browser.pause(5000)
        await ActionWrappers.clickSetvalueAndSelectoption1(primarycategoryfield,primarycategoryIP)

        await ActionWrappers.clickSetvalueAndSelectoption1(HSDcode,HSDcodIP)       
        await ActionWrappers.clearAndsetValue(unitLP,unitLPIP)
        await ActionWrappers.clearAndsetValue(productcost,productcostIP)
        await ActionWrappers.clearAndsetValue(unitQuantity,unitQuantityIp)
        await ActionWrappers.clearAndsetValue(PackQuantity,PackQuantityIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(Divisionpath,DivisionIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(BU,BUip)
        await ActionWrappers.clearAndsetValue(unitmeasure,unitmeasureIP)
        await ActionWrappers.Click1(SaveBtn)
        await browser.pause(5000)
        // await ActionWrappers.snackBarValidate(toasterpath,savedmessage)        
    }
    MandatoryFieldCheck = async (AddcustomPBtn,ProductidReq,ProductVariantReq,ProductNameReq,PrimaryCategoryReq,HSNCodeReq,save,Cancel) =>{
        await ActionWrappers.Click(AddcustomPBtn)
        await ActionWrappers.Click(ProductidReq)
        await ActionWrappers.Click(ProductVariantReq)
        await ActionWrappers.Click(ProductNameReq)
        await ProductNameReq.keys('\ue00c')
        await ActionWrappers.Click(PrimaryCategoryReq)
        await PrimaryCategoryReq.keys('\ue00c')
        await ActionWrappers.Click(HSNCodeReq)
        await HSNCodeReq.keys('\ue00c')
        await ActionWrappers.Click(save)
        await ActionWrappers.Click(Cancel)

    }
    CP_Card_Behaviors = async (QuantityINC,remove1,Cancelcp,remove2,remove3)=>{
        await ActionWrappers.Click(QuantityINC)
        QuantityINC.keys('\ue013')
        await browser.pause(2000)
        await ActionWrappers.Click(remove1)
        await ActionWrappers.Click(Cancelcp)
        await ActionWrappers.Click(remove2)
        await ActionWrappers.Click(remove3)
        await browser.pause(5000)
    }
    cancel_Btn = async(btn)=>{
        await ActionWrappers.Click(btn)
    }
    Create_Quote_CP =async(buyerpath,buyerIP,createquotepath)=>{
        await ActionWrappers.clickSetvalueAndSelectoption(buyerpath,buyerIP)
        await browser.pause(2000)
        await ActionWrappers.Click(createquotepath)
    }
    Unselect_CP_Mark_setting = async()=>{
    
    }
    
    // ClickAddCustomProductBtn1 = async (toclickcustombtn) =>{
    //     await ActionWrappers.Click(toclickcustombtn)
    //     await browser.pause(3000)
    // }
    // EnterProductID = async (selectpath,tofillproductID) =>{
        
    // }
    // EnterProductVariant = async(selectpath, tofillproductvariant) =>{
     
    // }

    // EnterProductNameUsingDrpdwn = async(selectpath, productnamevalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,productnamevalue)
    // }
    // EnterProductNameUsingclickfield = async(selectpath, productnamevalue) =>{
        
    // }
    // EnterPrimaryCategoryusingDrpdwn = async (selectpath,Primarycategoryvalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,Primarycategoryvalue)
    // }
    // EnterPrimaryCategoryusingclickField = async (selectpath,Primarycategoryvalue)=>{
        
    // }
    // ClickClosebtnforPrimaryCategory = async (selectpath) =>{
    //     await ActionWrappers.Click(selectpath)
    // }
    // EnterHSNCodeUsingclickField = async (selectpath,HSNcodevalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,HSNcodevalue)
    // }
    // EnterHSNCodeUsingDrpdwn = async (selectpath,HSNcodevalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,HSNcodevalue)
    // }
    // EnterUnitPrice = async (selectpath,unitpricevalue) =>{
    //     await ActionWrappers.clearAndsetValue(selectpath,unitpricevalue)
    // }
    // EnterProductCost = async (selectpath,productcostvalue) =>{
    //     await ActionWrappers.clearAndsetValue(selectpath,productcostvalue)
    // }
    // EnterUnitQuantity = async (selectpath,unitqualityvalue) =>{
    //     await ActionWrappers.clearAndsetValue(selectpath,unitqualityvalue)
    // }
    // EnterPackQuantity = async (selectpath,packquantityvalue) =>{
    //     await ActionWrappers.clearAndsetValue(selectpath,packquantityvalue)
    // }
    // EnterDivisionUsingClickfiled = async (selectpath,divisionvalue) =>{
    //     await ActionWrappers.clickAndSetvalue(selectpath,divisionvalue)
    // }
    // EnterDivisionUsingdrpdwn = async (selectpath,divisionvalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,divisionvalue)
    // }
    // EnterBUusingClickfield = async (selectpath,BUvalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,BUvalue)
    // }
    // EnterBUusingdrpdwn = async (selectpath,BUvalue) =>{
    //     await ActionWrappers.clickSetvalueAndSelectoption1(selectpath,BUvalue)
    // }
    // EnterUnitMeasure = async (selectpath,UnitOfMeasurevalue) =>{
    //     await ActionWrappers.clearAndsetValue(selectpath,UnitOfMeasurevalue)
    // }
    // SaveBtn = async(selectpath) =>{
    //     await ActionWrappers.Click(selectpath)
    // }
    // CancelBtn = async (selectpath) =>{
    //     await ActionWrappers.Click(selectpath)
    // }
    // saveCP= async ()=>{
    
}
module.exports = new CustomProduct();