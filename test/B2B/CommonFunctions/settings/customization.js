const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const customip = require("../../Inputs/settings/customizationIP");
const path = require("../../PageObjects/Settings/customization.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");

class Custom extends Page {
    async open() {
        super.open(customip.customUrl); 
    }
    snakBarValid= async(btn)=>{
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,customip.saveAlert)
        await browser.pause(2000)
    }
    labelCheck = async(btn,textpath,textip,clearPath)=>{
        await browser.pause(1000)
        // await actionWrapper.scrollEleAndClick(path.CompTab)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(textpath,textip)
        await actionWrapper.Click(path.CancelBtn)
        await browser.pause(2000)
        await actionWrapper.scrollEleAndClick(path.CustomTab)
        await actionWrapper.clearValues(clearPath)
        await actionWrapper.Click(path.SavelBtn)
        await browser.pause(2000)
    }
    Status = async(branchpath,addresspath,loalitypath,citypath,districtpath,
        statepath,pincodepath,countrypath,primContactpath,contactpath,taxpath)=>{
        await actionWrapper.Click(branchpath)
        await actionWrapper.Click(addresspath)
        await actionWrapper.Click(loalitypath)
        await actionWrapper.Click(citypath)
        await actionWrapper.Click(districtpath)
        await actionWrapper.Click(statepath)
        await actionWrapper.Click(pincodepath)
        await actionWrapper.Click(countrypath)
        await actionWrapper.Click(primContactpath)
        await actionWrapper.Click(contactpath)
        await actionWrapper.Click(taxpath)
    }
    customBtnValidation= async(confbtn)=>{
        if ((await confbtn.isDisplayed()) === true) {
            await actionWrapper.Click(confbtn)
            await actionWrapper.snackBarValidate(common.snackbar,customip.saveAlert)
            await browser.pause(2000)
        }
    }

}
module.exports = new Custom();