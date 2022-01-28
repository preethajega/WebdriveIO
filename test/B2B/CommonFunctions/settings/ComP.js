const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const compIp = require("../../Inputs/settings/CompanyIP");
const path = require("../../PageObjects/Settings/company.page");
var CompIP= require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Company extends Page {
 async open() {
    super.open(CompIP.CompUrl); 
  }
UploadLogo = async() =>{
    await actionWrapper.Click(path.logoupload);
    await attchmentUpload.upload(
        await path.logoupload,compIp.uploadimg);
    await actionWrapper.checkVisibleClickableAndClick(path.savebtn)
}
Updatevalue = async(path,ele,input,btn) =>{
    await actionWrapper.Click(path)
    await actionWrapper.clearAndsetValue(ele,input);
    await actionWrapper.Click(btn);
    if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),CompIP.saveAlert );
    }
  }
Updatedropdown = async(btn) =>{
    await actionWrapper.clickSetvalueAndSelectoption(path.SubIndustry,compIp.subindustry);
    await actionWrapper.Click(btn)
    if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),CompIP.saveAlert );
    }
}
UpdateDisabled= async(ele,input) =>{
    await actionWrapper.Click(ele)
    if ((await ele.setValue(input)) == false) {
      return true
    }
   
    //await expect(elem).toBeEnabled()
}
Acctypeinertxt = async(ele) =>{
  await actionWrapper.Click(ele)
  await path.RefelectTxt.getText()
}

}
module.exports = new Company();