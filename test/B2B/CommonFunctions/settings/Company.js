const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const compIp = require("../../Inputs/settings/CompanyIP");
const path = require("../../PageObjects/Settings/company.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Company extends Page {
 async open() {
    super.open(compIp.CompUrl); 
  }
UploadLogo = async(btn) =>{
    await browser.pause(2000);    
    await attchmentUpload.upload(path.logoupload,compIp.uploadimg)
    await browser.pause(2000);  
    await actionWrapper.Click(btn);
}
Updatevalue = async(ele,input,btn,snakpath,snakip) =>{
    await actionWrapper.clearAndsetValue(ele,input)
    await actionWrapper.Click(btn);
    await actionWrapper.snackBarValidate(snakpath,snakip)
  }
WebsiteFieldValid = async () =>{
  await actionWrapper.clearAndsetValue(path.website,compIp.website2)
  await actionWrapper.Click(path.savebtn)
  await actionWrapper.snackBarValidate(path.errWebsite,compIp.websiteErrormsg)
  await actionWrapper.Click(path.cancelbtn)
}
fieldValid = async(ele,errpath,Errormsg)=>{
  await actionWrapper.clearValues(ele)
  await actionWrapper.Click(path.savebtn)
  await actionWrapper.snackBarValidate(errpath,Errormsg)
  await actionWrapper.Click(path.cancelbtn)
}
Updatedropdown = async(subIndPath,SubIndustrypath,subindustryIP,btn) =>{
    await actionWrapper.clearValues(subIndPath)
    await actionWrapper.clickSetvalueAndSelectSecondOption(SubIndustrypath,subindustryIP)
    await actionWrapper.Click(btn)
    await actionWrapper.snackBarValidate(common.snackbar,compIp.saveAlert)
  }
UpdateDisabled= async(ele,input) =>{
    await actionWrapper.Click(ele)
    if ((await ele.setValue(input)) === false) {
      return true
    }
   }
Acctypeinertxt = async(ele) =>{
  await actionWrapper.Click(ele)
  await actionWrapper.snackBarValidate(path.RefelectTxt,compIp.refelecttxt)
}

}
module.exports = new Company();