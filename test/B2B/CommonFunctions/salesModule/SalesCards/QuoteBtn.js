const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Quoteip = require("../../../Inputs/salesModule/summarypage/QuoteBTnsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/quoteBtn.pag");
const EndCustomer_path = require("../../../PageObjects/SalesModule/summarypage/EndCustomerCard.page");

const assert = require("assert");



class QuoteBtnCard extends Page {

    async open() {
        super.open(Quoteip.QuoteDetailsPageUrl); 
    }

    
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
    createQuote = async(quoteName,quoteIp,ConfBtn)=>{
        await actionWrapper.clickAndSetvalue(quoteName,quoteIp)
        await actionWrapper.Click(ConfBtn)
    }
    createApprovalQuote =async(quoteName,quoteIp,commentName,commentIp,ConfBtn)=>{
        await actionWrapper.clickAndSetvalue(quoteName,quoteIp)
        await actionWrapper.clickAndSetvalue(commentName,commentIp)
        await actionWrapper.Click(ConfBtn)
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
/* this method first check whether the Quote summary page has which Button (like Create Quote or RequestFor Approval)
    next it will check which pop upwindow ,then check the field validation based on Window showed
    it will check whether the one or Two Approver is present  based on that it will validate the Fields*/
    PopUPFieldValidation = async(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn,QuoteEle,quoteip,btn,snakpath,snakip,CancelBtn,
        approvalCheckEle,approvalInput1,btns1,snakpaths1,snakips1,approvalInput2,btns2,snakpaths2,snakips2,
        approvalInput3,btns3,snakpaths3,snakips3,btn1,snakpath1,snakip1,commentpath,commentIp,CancelBtn1)=>{

        await this.QuoteBtnIdentify(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn)
        if ((await QuoteEle.getText()) === quoteip) {
            await this.PopUpWindowFieldValidation(btn,snakpath,snakip)
            await actionWrapper.Click(CancelBtn)
        }
        else{
            await this.ApproverCheck(approvalCheckEle,approvalInput1,btns1,snakpaths1,snakips1,approvalInput2,btns2,snakpaths2,snakips2,
                approvalInput3,btns3,snakpaths3,snakips3)
            await this.PopUpWindowFieldValidation(btn1,snakpath1,snakip1)
            await actionWrapper.snackBarValidate(commentpath,commentIp)
            await actionWrapper.Click(CancelBtn1)
        }
    }
    ApproverCheck = async(approvalCheckEle,approvalInput1,btn1,snakpath1,snakip1,approvalInput2,btn2,snakpath2,snakip2,
        approvalInput3,btn3,snakpath3,snakip3)=>{
        if ((await approvalCheckEle.isDisplayed())=== true) {
            await this.ApprovalFieldValid(approvalInput1,btn1,snakpath1,snakip1)
            await this.ApprovalFieldValid(approvalInput2,btn2,snakpath2,snakip2)
        }
        else{
            await this.ApprovalFieldValid(approvalInput3,btn3,snakpath3,snakip3)
        }
    }
    PopUpWindowFieldValidation = async(btn,snakpath,snakip)=>{
        await actionWrapper.Click(btn)
        await browser.pause(1000)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await browser.pause(2000)
    } 
    ApprovalFieldValid = async(approvalInput,btn,snakpath,snakip)=>{
        await actionWrapper.clearValues(approvalInput)
        await browser.pause(2000)
        await actionWrapper.Click(btn)
        await browser.pause(1000)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await browser.pause(2000)
    }
    saveAsDraft = async(saveAsBtn,quotepath,quoteip,confbtns)=>{
        await actionWrapper.Click(saveAsBtn)
        await actionWrapper.clickAndSetvalue(quotepath,quoteip)
        await actionWrapper.Click(confbtns)
    }
    QuoteNameValidation = async(selectData,QuoteOrderNameInputs,names)=>{
        await browser.pause(4000)
        await actionWrapper.checkClickableAnddoubleClick(selectData)
        await actionWrapper.Click(path.QuoteOrderNameEditIcon)
        if ((await QuoteOrderNameInputs.getValue() === names)) {
            await actionWrapper.Click(path.QuoteOrderConfyesBtn)
            return true;
        }
        else{
            await actionWrapper.Click(path.QuoteOrderConfCancelBtn)
            return false;
        }

    }
   

   
   
}
module.exports = new QuoteBtnCard();