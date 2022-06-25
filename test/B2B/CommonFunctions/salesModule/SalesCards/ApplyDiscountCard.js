const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Applydiscountip = require("../../../Inputs/salesModule/summarypage/ApprovalsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page");
const Sidnav_path = require("../../../PageObjects/SalesModule/summarypage/sidNavQuote.page");



class ApplyDiscountCard extends Page {
    ApplyDiscBYAmount = async(AmountBtn,inputPath,inputIp,ApplyOrResetBtn)=>{
        await actionWrapper.Click(AmountBtn)
        await actionWrapper.clickAndSetvalue(inputPath,inputIp)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    ApplyDiscBYAddOnOverAllDis = async(DiscountBtn,disTypeBtn,inputPath,inputIp,ApplyOrResetBtn)=>{
        await actionWrapper.Click(DiscountBtn)
        await actionWrapper.Click(disTypeBtn)
        await actionWrapper.clearAndsetValue(inputPath,inputIp)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    ApplyDiscBYTaregetDis = async(DiscountBtn,disTypeBtn,ApplyOrResetBtn)=>{
        await actionWrapper.Click(DiscountBtn)
        await actionWrapper.Click(disTypeBtn)
        await actionWrapper.Click(ApplyOrResetBtn)
    }
    IncreseDecreseDis = async(IncreseDecreseBtn,ApplyOrResetBtn)=>{
        await actionWrapper.Click(IncreseDecreseBtn)
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
    ApplyTargetPriceOrDisc = async(TargetPriceDiscountPath1,TargetPriceDiscountPath,TagetPriceDiscountIp)=>{
        await actionWrapper.MoveTo(TargetPriceDiscountPath1)
        await actionWrapper.clearAndsetValue(TargetPriceDiscountPath,TagetPriceDiscountIp)
    }
    DateSelecter = async (validFromPath, NextMonBtn, datepath) => {
        await actionWrapper.MoveTo(validFromPath)
        await browser.pause(2000)
        await actionWrapper.Click(NextMonBtn)
        await browser.pause(1000)
        await actionWrapper.Click(datepath)
    }

    respondQuoteWithApplyDis = async(selectdata,DiscountBtn,disTypeBtn,ApplyOrResetBtn,
        DiscountBtn1,disTypeBtn1,inputPath1,inputIp1,ApplyOrResetBtn1,
        IncreseDecreseBtn,ApplyOrResetBtn2,validFromPath, NextMonBtn, datepath,confbtn)=>{
        await actionWrapper.Click(selectdata)
        await browser.pause(2000)
        await actionWrapper.Click(Sidnav_path.RespondBtn)
        await actionWrapper.scrollEle(DiscountBtn)
        await this.ApplyDiscBYTaregetDis(DiscountBtn,disTypeBtn,ApplyOrResetBtn)
        await this.ApplyDiscBYAddOnOverAllDis(DiscountBtn1,disTypeBtn1,inputPath1,inputIp1,ApplyOrResetBtn1)
        await this.IncreseDecreseDis(IncreseDecreseBtn,ApplyOrResetBtn2)
        await actionWrapper.Click(Sidnav_path.SumbitToCustomer)
        if ((await common.snackbar.isDisplayed()) === true) {
            if (await common.snackbar.getText() === "Select future date") {
                await this.DateSelecter(validFromPath, NextMonBtn, datepath)
                await actionWrapper.Click(confbtn)
            }
        } else {
            await actionWrapper.Click(confbtn)
        }

    }



}
module.exports = new ApplyDiscountCard();