const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/SellerInformation.page");
const assert = require("assert");



class SellerInfoCard extends Page {

    EditSellerInfo = async(hoverEleclick,editbtn,inputPath,InputIp,Confbtn)=>{
        // await actionWrapper.scrollEle(ele)
        await actionWrapper.hoverElement(hoverEleclick,editbtn)
        await browser.pause(1000)
        await actionWrapper.clearValue_selectDropdownvalue(inputPath,InputIp)
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
    EditSellerInfo1 = async(ele,hoverEleclick,editbtn,clearbtn,inputPath,InputIp,Confbtn)=>{
        await browser.pause(1000)
        await actionWrapper.scrollEle(ele)
        await actionWrapper.hoverElement(hoverEleclick,editbtn)
        await actionWrapper.Click(clearbtn)
        await actionWrapper.clickSetvalueAndSelectoption(inputPath,InputIp)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    checkingValue =async(ele)=>{
        if (ele.getText() == true) {
            
            
        }
    }
    changeBillToShipTo =async(BillShipBtn,selectData,btn)=>{
        await actionWrapper.Click(BillShipBtn)
        await browser.pause(3000)
        await actionWrapper.Click(selectData)
        await actionWrapper.Click(btn)
    }
}
module.exports = new SellerInfoCard();