const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const assert = require("assert");



class TagCard extends Page {

    Tag = async (Tagpath, TagIp,tagpath) => {
        await actionWrapper.clearValueAndSetValueSelectDropdown(Tagpath, TagIp)
        await actionWrapper.Click(tagpath)
    }
    // TagValidation=async(sumbitBtn,snakpath,snakip)=>{
    //     // await actionWrapper.Click(sumbitBtn)
    //     await actionWrapper.snackBarValidate(snakpath,snakip)
    // } 
    AddTagDetailsPage =async(tagpath,tagip,btn,snakpath,snakip)=>{
        await actionWrapper.Click(path.TagEdit)
        await actionWrapper.clickSetvalueAndSelectoption(tagpath,tagip)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    TagDele = async()=>{
        await actionWrapper.Click(path.Tag)
        await actionWrapper.Click(path.clearAllTag)
    }
    DeleTagDetailsPage = async(btn,snakpath,snakip)=>{
        await actionWrapper.Click(path.TagEdit)
        await actionWrapper.Click(path.clearAllTag)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }

}
module.exports = new TagCard();