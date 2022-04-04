const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/SellerInformation.page");
const assert = require("assert");
const { BU } = require("../../../Inputs/salesModule/summarypage/SellerInfoCardIP");



class SellerInfoCard extends Page {

    EditSellerInfo = async(hoverEleclick,editbtn,inputPath,InputIp,Confbtn)=>{
        await actionWrapper.hoverElement(hoverEleclick,editbtn)
        await browser.pause(1000)
        await actionWrapper.clearValue_selectDropdownvalue(inputPath,InputIp)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    RemoveSellerInfo = async(hoverEleclick,editbtn,inputBtn,clearBtn,Confbtn)=>{
        await browser.pause(1000)
        await actionWrapper.hoverElement(hoverEleclick,editbtn)
        await actionWrapper.Click(inputBtn)
        await actionWrapper.Click(clearBtn)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    EditSellerInfo1 = async(hoverEleclick,editbtn,inputPath,InputIp,Confbtn)=>{
        await actionWrapper.hoverElement(hoverEleclick,editbtn)
        await actionWrapper.clickSetvalueAndSelectoption(inputPath,InputIp)
        await actionWrapper.Click(Confbtn)
        await browser.pause(1000)
    }
    checkingValue =async(BU,ele,ele1ip,hoverEleclick,editbtn,inputPath,InputIp,Confbtn,
        hoverEleclick1,editbtn1,inputPath1,InputIp1,Confbtn1)=>{
        if ((await BU.isDisplayed())=== true) {
        if ((await ele.getText()) === ele1ip) {
           await this.EditSellerInfo1(hoverEleclick,editbtn,inputPath,InputIp,Confbtn)
           await browser.pause(2000)
        }
        else
        {
            await this.EditSellerInfo(hoverEleclick1,editbtn1,inputPath1,InputIp1,Confbtn1)
            await browser.pause(2000)
        }
    }
    }
    changeBillToShipTo =async(BillShipBtn,selectData,btn)=>{
        await actionWrapper.Click(BillShipBtn)
        await browser.pause(3000)
        await actionWrapper.Click(selectData)
        await actionWrapper.Click(btn)
    }
    UpadateBuAlert = async(update,Updateip)=>{
        if ((await path.PopupBU.isDisplayed())=== true) {
            await browser.pause(2000)
            // if ($(".ui-page-active .ui-popup-active").length > 0) {
            if ((await update.getText()) === Updateip) {
                await browser.pause(1000)
                await actionWrapper.Click(path.ConfYes)
            }
        }
        else{
            return true;
        }
    } 

    
}
module.exports = new SellerInfoCard();