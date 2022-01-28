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
    AddUser = async(elepath,eleip,btn) =>{
        await actionWrapper.Click(path.AddUserbtn)
        await actionWrapper.clickAndSetvalue(path.Name,teamip.name)
        await actionWrapper.clickAndSetvalue(path.Code,teamip.code)
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
        await actionWrapper.clickAndSetvalue(path.Code,teamip.code)
        await actionWrapper.Click(path.CancelBtn)
        await actionWrapper.Click(path.Closecard)
        await actionWrapper.snackBarValidate(elepath,eleip)
    }
    DeleteUser = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.DeleteUser)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.Deletebtn)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.deletealert)
    }
    AddTags = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.clickSetvalueAndSelectoption(path.Tags,teamip.tag)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }
    AddBu = async(btn) =>{
        await actionWrapper.scrollEleAndClick(path.Editdata)
        await actionWrapper.scrollEleAndClick(path.BUAddBtn)
        await actionWrapper.clickSetvalueAndSelectSecondOption(path.Branch1,teamip.branch1)
        await actionWrapper.clickSetvalueAndSelectoption(path.BU1,teamip.bu1)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,teamip.alert)
        await actionWrapper.Click(path.Closecard)
    }

}
module.exports = new Team();