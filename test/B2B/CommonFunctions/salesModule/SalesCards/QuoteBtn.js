const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Quoteip = require("../../../Inputs/salesModule/summarypage/QuoteBTnsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/quoteBtn.pag");
const assert = require("assert");



class QuoteBtnCard extends Page {

    
    QuoteBtnIdentify = async(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn)=>{
        console.log(await sumbitBtn.getText());
        if ((await sumbitBtn.getText()) === sumbitIp) 
        {
            await actionWrapper.Click(CreateQuoteBtn)
            await browser.pause(2000)
        }
        else
        {
            await actionWrapper.Click(ReqApprovalBtn)
            await browser.pause(2000)
        }
    }
    QuotePopUP = async(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn,QuoteEle,quoteip,quoteName,
        quoteIp,ConfBtn,quoteName1,quoteIp1,commentName,commentIp,ConfBtn1)=>{
        this.QuoteBtnIdentify(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn)
        if ((await QuoteEle.getText()) === quoteip) {
            await this.createQuote(quoteName,quoteIp,ConfBtn)
        }
        else{
            await this.createApprovalQuote(quoteName1,quoteIp1,commentName,commentIp,ConfBtn1)
        }
    }
    createQuote = async(quoteName,quoteIp,ConfBtn)=>{
        await actionWrapper.clickAndSetvalue(quoteName,quoteIp)
        await actionWrapper.Click(ConfBtn)
    }
    createApprovalQuote =async(quoteName,quoteIp,commentName,commentIp,ConfBtn)=>{
        await actionWrapper.clickAndSetvalue(quoteName,quoteIp)
        await actionWrapper.clickAndSetvalue(commentName,commentIp)
        await actionWrapper.Click(ConfBtn)
    }
}
module.exports = new QuoteBtnCard();