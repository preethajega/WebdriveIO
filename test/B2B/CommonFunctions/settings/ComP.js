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
UploadLogo = async() =>{
    await actionWrapper.Click(path.logoupload);
    await attchmentUpload.upload(path.logoupload,compIp.uploadimg)
    await actionWrapper.checkVisibleClickableAndClick(path.savebtn)
}
Updatevalue = async(path,ele,input,btn) =>{
    await actionWrapper.Click(path)
    await actionWrapper.clearAndsetValue(ele,input);
    await actionWrapper.Click(btn);
    await actionWrapper.snackBarValidate(common.snackbar,compIp.saveAlert)
    if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),compIp.saveAlert );
    }
  }
WebsiteFieldValid = async () =>{
  await actionWrapper.Click(path)
  await actionWrapper.clearAndsetValue(path.website,compIp.website2)
  await actionWrapper.Click(path.savebtn)
  await actionWrapper.snackBarValidate(path.errWebsite,compIp.websiteErrormsg)
  await actionWrapper.Click(path.cancelbtn)

}
Updatedropdown = async(btn) =>{
    await actionWrapper.clearValue_selectDropdownvalue(path.SubIndustry,compIp.subindustry);
    await actionWrapper.Click(btn)
    await actionWrapper.snackBarValidate(common.snackbar,compIp.saveAlert)
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
  await actionWrapper.snackBarValidate(path.RefelectTxt,compIp.refelecttxt)
}

}
module.exports = new Company();