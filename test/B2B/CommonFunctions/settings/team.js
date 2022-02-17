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
        await actionWrapper.Click(path.Name)
        await actionWrapper.Click(path.Email)
        await actionWrapper.Click(path.Role)
        await actionWrapper.clickAndSetvalue(path.MobileNo,teamip.phNum)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
        await actionWrapper.snackBarValidate(elepath,eleip)
    }
    AlredyExistsFieldValid = async() =>{
        await actionWrapper.Click(path.AddUserbtn)
        await actionWrapper.clickAndSetvalue(path.Code,teamip.code)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.codeexitsAlert)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
    }
    DeleteUser = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.Deletebtn)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.deletealert)
    }
    AddTags = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.clickSetvalueAndSelectoption(path.Tags,teamip.tag)
        await actionWrapper.Click(btn)
        await browser.pause(3000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }
    DeleteTag = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.Tags)
        await actionWrapper.Click(path.DeleteTag)
        //await browser.pause(1000)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
    }
    AddBu = async(branchpath,branchip,bupath,BUip,btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await actionWrapper.clickSetvalueAndSelectSecondOption(branchpath,branchip)
        await actionWrapper.clickSetvalueAndSelectoption(bupath,BUip)
        await actionWrapper.Click(btn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }
    DeleteBu = async(btn)=>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.DeleteBU)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }
    AddBranch = async() =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await actionWrapper.clickSetvalueAndSelectoption(path.Branch3,teamip.branch2)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }
    BranchValid = async() =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await actionWrapper.Click(path.Branch3)
        await actionWrapper.Click(path.Savebtn)
        await actionWrapper.snackBarValidate(path.ErrormsgBU,teamip.errmsgBranch)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
    }
    InviteUser =async() =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.Click(path.UserInviteBtn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.invitealert)
        await actionWrapper.Click(path.Closecard)
    }
    ReinvieUser = async() =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.Reinvitebtn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.reinvitealert)
        await actionWrapper.Click(path.Closecard)
    }
    statusUser = async(statusbtn,confbtn,snackpath,alertip)=>{
        await actionWrapper.scrollEleAndClick(path.Editdata1)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(statusbtn)
        await actionWrapper.Click(confbtn)
        await actionWrapper.snackBarValidate(snackpath,alertip)
        await actionWrapper.Click(path.Closecard)
    }


}
module.exports = new Team();