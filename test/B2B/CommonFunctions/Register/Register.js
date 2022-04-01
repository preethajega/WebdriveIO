const Page = require("../../../B2B/PageObjects/page");
const path = require("../../../B2B/PageObjects/Register/Register.page");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const common = require("../../PageObjects/Common/commonObjects");
var input= require("../../Inputs/settings/RegisterIP");
const assert = require("assert");

class Register extends page {

    open () {
        return super.open('auth/register');
    }

    regsiterwithAutofill = async(UserName,Email,CompanyTax,ComapnyName)=>{

        await actionsWrappers.checkEnabledAndSetValue(path.ContactName,UserName);
        await actionsWrappers.checkEnabledAndSetValue(path.emailId,Email);
        await actionsWrappers.checkEnabledAndSetValue(path.tax,CompanyTax);
        await actionsWrappers.clickSetvalueAndSelectoption(path.companyName,ComapnyName);
    }

    regsiterAddress = async(UserName,Email,CompanyTax,Address,
        locality,Country,state,District,pincode,City)=>{

        await actionsWrappers.checkEnabledAndSetValue(path.ContactName,UserName);
        await actionsWrappers.checkEnabledAndSetValue(path.emailId,Email);
        await actionsWrappers.checkEnabledAndSetValue(path.tax,CompanyTax);
        await actionsWrappers.checkEnabledAndSetValue(path.addressLine,Address);
        await actionsWrappers.checkEnabledAndSetValue(path.locality,locality);
        await actionsWrappers.clickSetvalueAndSelectSecondOption(path.country,Country)
        await actionsWrappers.clickSetvalueAndSelectoption(path.state,state)
        await actionsWrappers.clickSetvalueAndSelectoption(path.district,District)
        await actionsWrappers.checkEnabledAndSetValue(path.pincode,pincode);
        await actionsWrappers.checkEnabledAndSetValue(path.city,City);

        }

    regsiterValidation = async ()=>{
        await actionsWrappers.scrollEle(path.regButton);
        await actionsWrappers.Click(path.regButton);
        brower.pause(2000);
        await actionsWrappers.displayValidation(path.sucess);
    }

    loginpageNavigation = async()=>{
        await actionsWrappers.Click(path.alreadyCustomer);
        brower.pause(2000);
        await actionsWrappers.urlValidation(/auth/login);
    }

    FieldValid = async(Elepath,eleIp) =>{
        await actionsWrappers.scrollEle(path.regButton);
        await actionsWrappers.Click(path.regButton)
        await actionsWrappers.snackBarValidate(Elepath,eleIp)
    }

    mailValidation = async()=>{
        if((await path.mailExists.isDisplayed())|| (await path.invaildMail.isDisplayed())){
            await actionsWrappers.scrollEleAndDoubleClick(path.emailId);
            await actionsWrappers.clearAndsetValue(path.emailId,input.newMail);
        }
    }

     localityReq =async()=>{
         if(await path.localityReq.isDisplayed()){
            await actionsWrappers.checkEnabledAndSetValue(path.locality,locality);
         }
     

    
    }
 
}
module.exports = new Regsiter();




