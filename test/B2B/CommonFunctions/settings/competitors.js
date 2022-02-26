const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const compitieip = require("../../Inputs/settings/competitorsIP");
const path = require("../../PageObjects/Settings/competitors.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Compitite extends Page {

    async open() {
        super.open(compitieip.compitieUrl); 
    }
    AddComp = async(snakpath,snakip)=>{
        await actionWrapper.Click(path.AddCompbtn)
        await actionWrapper.clickAndSetvalue(path.compfield,compitieip.name)
        await browser.pause(2000)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    DeleComp = async(btn)=>{
        await actionWrapper.Click(path.DeleCompti)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,compitieip.saveAlert)
    }
    emptyAlert = async()=>{
        await actionWrapper.Click(path.AddCompbtn)
        await actionWrapper.Click(path.AddCompbtn)
        await actionWrapper.snackBarValidate(common.snackbar,compitieip.errname)

    }
}
module.exports = new Compitite();