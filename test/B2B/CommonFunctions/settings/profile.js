const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const path = require("../../PageObjects/Settings/profile.page");
var profileip= require("../../Inputs/settings/profileIP");
const common = require("../../PageObjects/Common/commonObjects");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const assert = require("assert");



class profile extends Page {

    async open() {
        super.open(profileip.ProfileUrl); 
    }
    async open1(){
        super.open(profileip.APIUrl)
    }
    async open2(){
        super.open(profileip.AppSetUp)
    }
    UploadLogo = async(btn) =>{
        await browser.pause(2000);    
        await attchmentUpload.upload(path.logoupload,compIp.uploadimg)
        await browser.pause(4000);  
        await actionWrapper.Click(btn);
    }
    UploadLogo1 = async(btn)=>{
        await browser.pause(2000);    
        await attchmentUpload.upload(path.LogoUplaodProfile,compIp.uploadimg)
        await browser.pause(4000);  
        await actionWrapper.Click(btn);
    }
}
module.exports = new profile();