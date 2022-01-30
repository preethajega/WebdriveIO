const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const approvip = require("../../Inputs/settings/AproveIP");
const path = require("../../PageObjects/Settings/Approvals.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Approval extends Page {

    async open() {
        super.open(approvip.approvUrl); 
    }
    CreateApprGrp = async(btn) =>{
        await actionWrapper.Click(path.CreateApprBtn)
        await actionWrapper.clickAndSetvalue(path.ApprName,approvip.approvName)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.saveAlert)
    }
    ApproverGrpfieldValid = async()=>{
        await actionWrapper.Click(path.CreateApprBtn)
        await actionWrapper.Click(path.ApprName)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.snackBarValidate(path.ErrApprName,approvip.errmsgApprName)  
    } 
    Delete_Edit_ApprGrp = async(ele,btn,snakpath,alertip) =>{
        await actionWrapper.Click(path.DeleteAprTab)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(ele)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,alertip)
    }
    AddUserGrp = async(btn) =>{
        await actionWrapper.Click(path.AddGrpbtn)
        await actionWrapper.Click(path.ReviewerBtn)
        await actionWrapper.Click(path.ApproverBtn)
        await actionWrapper.clickSetvalueAndSelectoption(path.OptionalAppro,approvip.optionalAppr)
        await actionWrapper.clickAndSetvalue(path.GrpName,approvip.grpName)
        await actionWrapper.clickSetvalueAndSelectoption(path.Precedence,approvip.precedence)
        await actionWrapper.clickSetvalueAndSelectoption(path.Approvers,approvip.approver1)
        await actionWrapper.clickSetvalueAndSelectoption(path.DefaultAppr,approvip.approver1)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.saveAlert)
    }
    DeleteUserGrp = async(btn) =>{
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.deleAlert)
    }
}
module.exports = new Approval();