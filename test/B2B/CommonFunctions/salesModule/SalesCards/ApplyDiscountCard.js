const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Applydiscountip = require("../../../Inputs/salesModule/summarypage/ApprovalsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page");
const assert = require("assert");



class ApplyDiscountCard extends Page {
    ApplyDiscBYAmount = async(AmountBtn,inputPath,inputIp,ApplyOrResetBtn)=>{
        await actionWrapper.Click(AmountBtn)
        await actionWrapper.clickAndSetvalue(inputPath,inputIp)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    ApplyDiscBYDiscount = async(DiscountBtn,inputPath,inputIp,ApplyOrResetBtn)=>{
        await actionWrapper.Click(DiscountBtn)
        await actionWrapper.clearAndsetValue(inputPath,inputIp)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    ResetDiscount = async(AmountOrDiscountBtn,RestBtn)=>{
        await actionWrapper.Click(AmountOrDiscountBtn)
        await actionWrapper.Click(RestBtn)
    }
    RoundUp = async(RoundUpBtn,ApplyOrResetBtn)=>{
        await actionWrapper.Click(RoundUpBtn)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    ApplyDiscountAmountValid = async(value)=>{
        const text = value.getText()
        console.log(text)

        // if ((await value.getText()) === amount) {
        //     return true;
        // }
        // else{
        //     return false;
        // }
             
        
    }


}
module.exports = new ApplyDiscountCard();