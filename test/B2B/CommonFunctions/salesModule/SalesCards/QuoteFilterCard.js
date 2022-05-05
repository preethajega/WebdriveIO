const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/QuoteFilterCard.page");
const QuoteFIlterip = require("../../../Inputs/salesModule/summarypage/QuoteFilterCardIp");
const assert = require("assert");

class QuoteFilter extends Page {
    AddFilter=async(selectTab,filterBtn,fieldpath,filedIp,confbtns)=>{
        await actionWrapper.Click(selectTab)
        await browser.pause(3000)
        await actionWrapper.Click(filterBtn)
        await browser.pause(3000)
        await actionWrapper.clickSetvalueAndSelectoption(fieldpath,filedIp)
        await actionWrapper.Click(confbtns)
    }
    AddFilterTemp=async(filterBtn,fieldpath,filedIp)=>{
        await actionWrapper.Click(filterBtn)
        await browser.pause(3000)
        await actionWrapper.clickSetvalueAndSelectoption(fieldpath,filedIp)
        // await browser.pause(3000)
        // await actionWrapper.Click(confbtns)
    }
    ClearFilter = async(filterBtn,clearallBtn,confbtn)=>{
        await actionWrapper.Click(filterBtn)
        await browser.pause(3000)
        await actionWrapper.Click(clearallBtn)
        await actionWrapper.Click(confbtn)

    }
}
module.exports = new QuoteFilter();