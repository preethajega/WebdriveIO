
const assert = require("assert")
const ActionWrappers = require("../../../CommonActions/ActionsWrappers");
const Path =require("../../PageObjects/page")

class order extends Path {
    async open() {
        super.open(path);
    }
    ClickCartIcon1 = async (toclickcart) => {
        await ActionWrappers.Click(toclickcart)
    }

 //   Buyer placing the order
    Place_Order = async(createorderbtn,searchpath,searchvalue,pathofvalue,pathofsnackbar,toastmsgRP,placeorderbtn,pathofsnackbar1,toastmsgRD) => {
        await ActionWrappers.Click1(createorderbtn)
        await browser.pause(8000)
        await ActionWrappers.clickAndSetvalue(searchpath,searchvalue)
        await browser.pause(3000)
        await ActionWrappers.Click(pathofvalue)
        await browser.pause(3000)
        await ActionWrappers.snackBarValidate(pathofsnackbar,toastmsgRP)
        await browser.pause(3000)
        await ActionWrappers.Click1(placeorderbtn)
        await ActionWrappers.snackBarValidate(pathofsnackbar1,toastmsgRD)
    }
    Select_Tag = async(tagpath)=>{
        await ActionWrappers.Click1(tagpath)
        await tagpath.keys('\ue015')
        await tagpath.keys('\ue007')
    }
    // Buyer naming the order
    PlaceOrder_NameDialog =async(pathofPO,PODbtn,pathofvalidation,vali_value,cancelPOD,pathofPO1,pathPO,POvalue,PODbtn1)=>{
        await ActionWrappers.Click(pathofPO)
        await ActionWrappers.Click1(PODbtn)
        await ActionWrappers.Validate(pathofvalidation,vali_value)
        await ActionWrappers.Click1(cancelPOD)
        await ActionWrappers.Click(pathofPO1)
        await ActionWrappers.clickAndSetvalue(pathPO,POvalue)
        await ActionWrappers.Click(PODbtn1)

    }
    OrderDetailsPage = async (logicon1,salesbtn,Orderbtn,orderdetailspageclmn,statuspath,statusvalue)=>{
        await ActionWrappers.Click(logicon1)
        await ActionWrappers.Click1(salesbtn)
        await ActionWrappers.Click1(Orderbtn)
        await ActionWrappers.Click1(orderdetailspageclmn)
        await browser.pause(5000)
        await ActionWrappers.Validate(statuspath,statusvalue)
        await browser.pause(5000)
    }
    Download_OrderAndExportProd = async (exportprod,threedotmenu,downloadpdf)=>{
        await ActionWrappers.Click1(exportprod)
        await browser.pause(5000)
        await ActionWrappers.Click1(threedotmenu)
        await ActionWrappers.Click(downloadpdf)
        await browser.pause(5000)

    }

}
module.exports = new order();

