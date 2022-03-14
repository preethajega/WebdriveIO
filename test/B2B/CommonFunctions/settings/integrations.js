const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const path = require("../../PageObjects/Settings/integrations.page");
var integrationIp= require("../../Inputs/settings/integrations.Ip");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class integration extends Page {

    async open() {
        super.open(integrationIp.IntegrationUrl); 
    }
    DirectBankCard = async(fieldPath,filedip,btn,snakpath,snakip)=>{
        await actionWrapper.clearAndsetValue(fieldPath,filedip)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    RazorPayFields = async(ApiKeyPath,ApiKeyIp,SecretKeyPath,secretKeyIp,btn)=>{
        await actionWrapper.Click(path.PaymentGateWayTab)
        await actionWrapper.Click(path.RazorPayExpand)
        await actionWrapper.Click(path.RazorEnable)
        await actionWrapper.clearAndsetValue(ApiKeyPath,ApiKeyIp)
        await actionWrapper.clearAndsetValue(SecretKeyPath,secretKeyIp)
        await actionWrapper.snackBarValidate(common.snackbar,integrationIp.saveAlert)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
    }
    StripeFields =async(pubKeyPath,pubkeyIp,secretKeyPath,secretKeyIp,pubKeyPath1,pubkeyIp1,secretKeyPath1,secretKeyIp1,btn)=>{
        await actionWrapper.Click(path.PaymentGateWayTab)
        await actionWrapper.Click(path.StripeExpand)
        await actionWrapper.Click(path.StripeEnable)
        await actionWrapper.clearAndsetValue(pubKeyPath,pubkeyIp)
        await actionWrapper.clearAndsetValue(secretKeyPath,secretKeyIp)
        await actionWrapper.clearAndsetValue(pubKeyPath1,pubkeyIp1)
        await actionWrapper.clearAndsetValue(secretKeyPath1,secretKeyIp1)
        await actionWrapper.snackBarValidate(common.snackbar,integrationIp.saveAlert)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
    }
    CCAvenueFields = async(MerchantIdPath,MerchantIdIp,AccessCodePath,AccessCodeIp,WorkingKeyPath,WorkingKeyIp,btn)=>{
        await actionWrapper.Click(path.PaymentGateWayTab)
        await actionWrapper.Click(path.CCAvenueExpand)
        await actionWrapper.Click(path.CCAvenuEnable)
        await actionWrapper.clearAndsetValue(MerchantIdPath,MerchantIdIp)
        await actionWrapper.clearAndsetValue(AccessCodePath,AccessCodeIp)
        await actionWrapper.clearAndsetValue(WorkingKeyPath,WorkingKeyIp)
        await actionWrapper.snackBarValidate(common.snackbar,integrationIp.saveAlert)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
    }
    CCAvenuMandatoryFieldValid = async(gateWayPath,EnablePath,Clpath,snakPth,snakip,)=>{
        await actionWrapper.Click(path.PaymentGateWayTab)
        await actionWrapper.Click(gateWayPath)
        
        await actionWrapper.Click(EnablePath)
        await actionWrapper.clearValues(Clpath)
        await actionWrapper.Click(common.SaveBtn)
        await actionWrapper.snackBarValidate(snakPth,snakip)
        await actionWrapper.Click(common.CancelBtn)
    }

}
module.exports = new integration();