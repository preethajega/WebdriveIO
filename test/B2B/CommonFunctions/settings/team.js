const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const teamip = require("../../Inputs/settings/TeamIP");
const path = require("../../PageObjects/Settings/Team.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Team extends Page {

    async open() {
        super.open(teamip.teamUrl); 
    }
    AddUser = async(codepath,codeip,elepath,eleip,btn) =>{
        await actionWrapper.Click(path.AddUserbtn)
        await actionWrapper.clickAndSetvalue(path.Name,teamip.name)
        await actionWrapper.clickAndSetvalue(codepath,codeip)
        await actionWrapper.clickAndSetvalue(path.MobileNo,teamip.phNum)
        await actionWrapper.clickAndSetvalue(elepath,eleip)
        await actionWrapper.clickAndSetvalue(path.JobTitle,teamip.jobtitle)
        await actionWrapper.clickAndSetvalue(path.Department,teamip.depart)
        await actionWrapper.clickSetvalueAndSelectSecondOption(path.Role,teamip.role)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
    }
    MandatoryFieldvalid = async(elepath,eleip) => {
        await actionWrapper.Click(path.AddUserbtn)
        await actionWrapper.clickAndSetvalue(path.MobileNo,teamip.phNum)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(elepath,eleip)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
    }
    AlredyExistsFieldValid = async(exitspath,existsip,errpath,errip) =>{
        await actionWrapper.Click(path.AddUserbtn)
        await actionWrapper.clickAndSetvalue(exitspath,existsip)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(errpath,errip)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
    }
    AddTags = async(btn) =>{
        await actionWrapper.clickSetvalueAndSelectoption(path.Tags,teamip.tag)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(3000)
        await actionWrapper.Click(common.Refresh)
    }
    DeleteTag = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Tags)
        await actionWrapper.Click(path.DeleteTag)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(3000)
        await actionWrapper.Click(common.Refresh)
    }
    AddBu = async(branchpath,branchip,bupath,BUip,btn) =>{
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await browser.pause(4000)
        await actionWrapper.clickSetvalueAndSelectoption(branchpath,branchip)
        await actionWrapper.clickSetvalueAndSelectoption(bupath,BUip)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(2000)
        await actionWrapper.Click(common.Refresh)
    }
    DeleteBu = async(btn)=>{
        await actionWrapper.scrollEleAndClick(path.DeleteBU)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(3000)
        await actionWrapper.Click(common.Refresh)
    }
    AddBranch = async() =>{
        await browser.pause(2000)
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await browser.pause(2000)
        await actionWrapper.clickSetvalueAndSelectoption(path.Branch,teamip.branch3)
        await browser.pause(2000)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(common.Refresh)
    }
    BranchValid = async() =>{
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await actionWrapper.Click(path.Branch)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(path.ErrormsgBU,teamip.errmsgBranch)
        await actionWrapper.Click(path.CancelBtn)
        await browser.pause(3000)
        await actionWrapper.Click(path.Closecard)
    }
    InviteUser =async() =>{
        await actionWrapper.Click(path.Editdata)
        await actionWrapper.Click(path.refershbtn)
        await actionWrapper.Click(path.UserInviteBtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.invitealert)
        await browser.pause(3000)
        await actionWrapper.Click(path.Closecard)
    }
    ReinvieUser = async() =>{
        await browser.pause(2000)
        await actionWrapper.Click(path.Editdata)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.Reinvitebtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.reinvitealert)
        await browser.pause(3000)
        await actionWrapper.Click(path.Closecard)
    }
    DeleteUser = async(btn) =>{
        await browser.pause(2000)
        await actionWrapper.Click(path.Editdata)
        await browser.pause(2000)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.Deletebtn)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.deletealert)
        await browser.pause(2000)
        // await actionWrapper.Click(path.Closecard)
    }
    statusUser = async(statusbtn,confbtn,snackpath,alertip)=>{
        await browser.pause(2000)
        await actionWrapper.Click(path.Editdata2)
        await browser.pause(2000)
        // await actionWrapper.Click(path.refershbtn)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(statusbtn)
        await actionWrapper.Click(confbtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(snackpath,alertip)
        await browser.pause(2000)
        await actionWrapper.Click(path.Closecard)
    }
    AddReportManager=async(reportpath,btn)=>{
        await actionWrapper.Click(path.Editdata)
        await actionWrapper.scrollEle(reportpath)
        await actionWrapper.selectDrpdownusingKeyboard(reportpath)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(2000)
        await actionWrapper.Click(common.closeCardQuote)
    }
    deleteReportManager=async(reportpath,btn)=>{
        await actionWrapper.Click(path.Editdata)
        await actionWrapper.scrollEle(reportpath)
        await actionWrapper.clearValues(reportpath)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await browser.pause(2000)
        await actionWrapper.Click(common.closeCardQuote)

    }


}
module.exports = new Team();