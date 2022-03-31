const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const assert = require("assert");


class AttachCard extends Page {

    AttachmentUplaod = async(Attachpath,AttachIp)=>{
        // await actionWrapper.scrollEle(ele)
        // await ele.moveTo({x:0,down:10});
        // await actionWrapper.scrollEle(attach)
        await browser.pause(2000);    
        await attchmentUpload.upload(Attachpath,AttachIp)
        await browser.pause(2000);  
    }
    AttachUplaodSideNav = async(snakip,snakpath)=>{
        this.AttachmentUplaod();
        await actionWrapper.snackBarValidate(snakip,snakpath)
    }
    AttachDele = async()=>{
        await actionWrapper.Click(attachDele)
    }
    AttachDeleSidNav = async(attachDele,confOkOrDelePath,snakip,snakpath)=>{
        await actionWrapper.Click(attachDele)
        await actionWrapper.Click(confOkOrDelePath)
        await actionWrapper.snackBarValidate(snakip,snakpath)
    }
}
module.exports = new AttachCard();