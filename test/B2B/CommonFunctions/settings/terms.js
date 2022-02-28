const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const termip = require("../../Inputs/settings/TermsIP");
const path = require("../../PageObjects/Settings/terms.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Term extends Page {

    async open() {
        super.open(termip.termUrl); 
    }
    AddTerm = async(tab,ele,eleip,codepath,codeip)=>{
        await browser.refresh()
        await actionWrapper.Click(tab)
        await browser.pause(1000);
        await actionWrapper.Click(path.AddBtn)
        await browser.pause(2000);
        await actionWrapper.clickAndSetvalue(ele,eleip)
        await actionWrapper.clickAndSetvalue(codepath,codeip)
        await actionWrapper.Click(path.NeedApproval)
        // await browser.pause(2000)
        // await actionWrapper.Click(path.Default)
    }
    termSnakBarValid= async(btn)=>{
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,termip.saveAlert)
    }
    InsTerms = async(valpath,valip,percepath,percentip) =>{
        await actionWrapper.clearAndsetValue(valpath,valip)
        await actionWrapper.clearAndsetValue(percepath,percentip)
    }

    FieldVallid = async(btn,snakpath,snakip) =>{
        await actionWrapper.scrollEle(btn)
        await actionWrapper.Click(btn)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.Click(path.CancelBtn)
    }
    AllreadyExistOption = async(tab,ele,eleip,snakpath1,snakip1) =>{
        await browser.refresh()
        await actionWrapper.Click(tab)
        await actionWrapper.Click(path.AddBtn)
        await actionWrapper.clickAndSetvalue(ele,eleip)
        await actionWrapper.Click(path.NeedApproval)
        await actionWrapper.snackBarValidate(snakpath1,snakip1)
        await actionWrapper.Click(path.CancelBtn)
    }
    emptyTermVaid = async()=>{
        await actionWrapper.Click(path.AddBtn)
        await actionWrapper.Click(path.AddBtn)
        await actionWrapper.snackBarValidate(common.snackbar,termip.errAlert)
        await actionWrapper.Click(path.CancelBtn)
    }
    DeletTerm = async(btn,snakpath2,snakip2) =>{
        await actionWrapper.Click(path.DeletelastTerm)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath2,snakip2)
    }
    MapedDeletTerm = async(btn,snakpath2,snakip2) =>{
        await actionWrapper.Click(path.DeleteFirstTerm)
        await actionWrapper.Click(btn)
        await browser.pause(6000)
        await actionWrapper.snackBarValidate(snakpath2,snakip2)
    }
    AddpayTerm = async(ele,eleip,btn) =>{
        await browser.refresh()
        await browser.pause(2000)
        await actionWrapper.Click(path.Payment)
        await actionWrapper.scrollEleAndClick(path.AddPayTermBtn)
        await actionWrapper.clickAndSetvalue(ele,eleip)
        await actionWrapper.clickAndSetvalue(path.PaymentCode,termip.paycode)
        await actionWrapper.clickSetvalueAndSelectoption(path.OrderStatus,termip.orderStatus)
        await actionWrapper.clickAndSetvalue(path.DueDays,termip.dueDays)
        await actionWrapper.clickAndSetvalue(path.Percentage,termip.percentage)
        await actionWrapper.Click(path.NeedAppro)
        await actionWrapper.Click(path.Paymentgateway)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,termip.saveAlert)
    }
    DeletPayTerm = async(btn,snakpath2,snakip2) =>{
        await actionWrapper.scrollEleAndClick(path.DeleteastPayterm)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath2,snakip2)
    }
    MapedDeletPayTerm = async(btn,snakpath2,snakip2) =>{
        await actionWrapper.Click(path.DeleteFirstPayTerm)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath2,snakip2)
    }
    emptyPayTermVaid = async()=>{
        await actionWrapper.scrollEleAndClick(path.AddPayTermBtn)
        await actionWrapper.scrollEleAndClick(path.AddPayTermBtn)
        await actionWrapper.snackBarValidate(common.snackbar,termip.emptyPayAlert)
        await actionWrapper.Click(path.CancelBtn)
    }
    AllreadyExistPayOption = async(tab,ele,eleip,snakpath1,snakip1) =>{
        await browser.refresh()
        await actionWrapper.Click(tab)
        await actionWrapper.scrollEleAndClick(path.AddPayTermBtn)
        await actionWrapper.clickAndSetvalue(ele,eleip)
        await actionWrapper.Click(path.NeedAppro)
        await actionWrapper.snackBarValidate(snakpath1,snakip1)
        await browser.pause(2000);
        await actionWrapper.Click(path.CancelBtn)
    }


}
module.exports = new Term();