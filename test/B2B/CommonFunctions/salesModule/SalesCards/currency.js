const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summary page/Attach_Tag_Comment.page");
const assert = require("assert");



class currencyCard extends Page {

    Addcurrency = async(currPath,currIp)=>{
        await browser.pause(1000)
        await actionWrapper.clearValueAndSetValueSelectDropdown(currPath,currIp)
        await browser.pause(1000)
    }
    DeleCurrency = async()=>{
        await actionWrapper.Click(path.currencyClear)
        await browser.pause(1000)
    }
}
module.exports = new currencyCard();