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
        await actionWrapper.Click(value)
        await console.log(typeof  "₹1,090.32");

        const text = value.getText()
        // const Text1 = console.log(Array.prototype.slice.call(text, 1));
       const Text1 = Object.fromEntries(Object.entries(text).slice(1));
        // // (/\/|-|:|/g,''
        // if ((await typeof text) === "string"){
        //     console.log("str is a string type");
        // }
        // if ((await typeof text) === "number"){
        //     console.log("num is a number type");
        // }
        // if ((await typeof text) === "undefined"){
        //     console.log("str is a undefined type");
        // }
        
        // const text1 = text.trim(1);
        await console.log(Text1);
        
        // if ((await value.getText()) === amount) {
        //     return true;
        // }
        // else{
        //     return false;
        // }
             
        
    }


}
module.exports = new ApplyDiscountCard();