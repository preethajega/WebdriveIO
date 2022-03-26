const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summary page/SellerInformation.page");
const assert = require("assert");



class SellerINfoCard extends Page {

    EditSellerInfo = async(editbtn,inputPath,InputIp,Confbtn)=>{
        await browser.pause(1000)
        await actionWrapper.Click(editbtn)
        await actionWrapper.clearValueAndSetValueSelectDropdown(inputPath,InputIp)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    RemoveSellerInfo = async(editbtn,clearBtn,Confbtn)=>{
        await browser.pause(1000)
        await actionWrapper.Click(editbtn)
        await actionWrapper.Click(clearBtn)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    EditSellerInfo1 = async(editbtn,clearbtn,inputPath,InputIp,Confbtn)=>{
        await browser.pause(1000)
        await actionWrapper.Click(editbtn)
        await actionWrapper.Click(clearbtn)
        await actionWrapper.clickSetvalueAndSelectoption(inputPath,InputIp)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
}
module.exports = new SellerINfoCard();