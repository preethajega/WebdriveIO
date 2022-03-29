const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const assert = require("assert");



class currencyCard extends Page{

    Addcurrency = async(currPath,currIp)=>{
        await browser.pause(1000)
        await actionWrapper.clearValue_selectDropdownvalue(currPath,currIp)
        await browser.pause(1000)
    }
    DeleCurrency = async()=>{
        await actionWrapper.Click(path.currencyClear)
        await browser.pause(1000)
    }
}
module.exports = new currencyCard();