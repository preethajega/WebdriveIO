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
        BU,BUip,unitmeasure,unitmeasureIP)=>{

        await ActionWrappers.Click(AddcustomPBtn)
        await ActionWrappers.clickAndSetvalue(productIDfield,productIP)
        await ActionWrappers.clickAndSetvalue(ProductVariantfiled,productvarientIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(productnamefield,productnameIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(primarycategoryfield,primarycategoryIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(HSDcode,HSDcodIP)       
        await ActionWrappers.clearAndsetValue(unitLP,unitLPIP)
        await ActionWrappers.clearAndsetValue(productcost,productcostIP)
        await ActionWrappers.clearAndsetValue(unitQuantity,unitQuantityIp)
        await ActionWrappers.clearAndsetValue(PackQuantity,PackQuantityIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(Divisionpath,DivisionIP)
        await ActionWrappers.clickSetvalueAndSelectoption1(BU,BUip)
        await ActionWrappers.clearAndsetValue(unitmeasure,unitmeasureIP)    
    }
    snakbar = async(btn,snakpath,snakip)=>{
        await ActionWrappers.Click(btn)
        await ActionWrappers.snackBarValidate(snakpath,snakip)
        await browser.pause(2000)
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
    CP_Card_Behaviors = async (QuantityINC,remove1,Cancelcp,remove2)=>{
        await ActionWrappers.Click(QuantityINC)
        QuantityINC.keys('\ue013')
        await browser.pause(2000)
        await ActionWrappers.Click(remove1)
        await ActionWrappers.Click(Cancelcp)
        await ActionWrappers.Click(remove2)
        await browser.pause(2000)
    }
    cancel_Btn = async(btn)=>{
        await ActionWrappers.Click(btn)
    }
    Unselect_CP_Mark_setting = async(pathofCP,prdt,editpen,scolele,switchbtn,saveandpublish)=>{
        console.log(pathofCP);
        if(await pathofCP.isExisting())
        {
            console.log("value of prdt",await prdt.getText());
            await ActionWrappers.Click1(prdt)
            await browser.pause(2000)
            await ActionWrappers.Click(editpen)
            await browser.pause(2000)
            await ActionWrappers.scrollEle(scolele)
            await browser.pause(5000)
            await ActionWrappers.Click1(switchbtn)
            await ActionWrappers.Click(saveandpublish)
            
        }
        else
        {
            console.log("It is not a custom product")
        }
    }
    Create_Quote_CP =async(buyerpath,buyerIP,createquotepath)=>{
        await ActionWrappers.clickSetvalueAndSelectoption(buyerpath,buyerIP)
        await browser.pause(2000)
        await ActionWrappers.Click(createquotepath)
    }
    
}
module.exports = new CustomProduct();