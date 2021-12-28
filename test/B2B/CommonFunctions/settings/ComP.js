const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const compIp = require("../../Inputs/settings/CompanyIP");
const path = require("../../PageObjects/Settings/company.page");
var CompIP= require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");

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
}
module.exports = new Company();