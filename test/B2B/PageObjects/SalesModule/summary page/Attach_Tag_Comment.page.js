const Page = require("../../../PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");

class AttachTagComment extends Page {

    /* ************* ATTACHMENT CARD ************* */
    get SideNavAttach() {
        return super.pathByXpath('//label[@for="attachments-editSideNav"]//span[@role="button"]')
    }
    get QuoteOrderAttach() {
        return super.pathByXpath('//span[@role="button"]')
    }

    /* ************* TAG CARD ************* */
    get Tag() {
        return super.pathByXpath('//input[@id="tags-outlined"]')
    }

    /* ************* COMMENTS CARD ************* */


    /* ************* APPROVAL CARD ************* */
    get ApprovalGrp() {
        return super.pathById('ApprovalGroup')
    }

    /* ************* CURRENCY CARD ************* */
    get currency() {
        return super.pathById('currencyDashboard')
    }


}
module.exports = new(AttachTagComment);

class AttachTagCommentPage extends Page {

    Tag = async (Tagpath, TagIp) => {
        await actionWrapper.clearValueAndSetValueSelectDropdown(Tagpath, TagIp)
    }
    currency = async()=>{
        await actionWrapper.clearValueAndSetValueSelectDropdown(currPath,currIp)
    }
    AttachmentUplaod = async()=>{
        await browser.pause(2000);    
        await attchmentUpload.upload(Attachpath,AttachIp)
        await browser.pause(2000);  
    }


}
module.exports = new AttachTagCommentPage();