const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const approvip = require("../../Inputs/settings/AprovalIP");
const path = require("../../PageObjects/Settings/Approvals.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Approval extends Page {

    async open() {
        super.open(approvip.approvUrl); 
    }
    CreateApprGrp = async(approvip1,btn) =>{
        await actionWrapper.Click(path.CreateApprBtn)
        await actionWrapper.clickAndSetvalue(path.ApprName,approvip1)
        await actionWrapper.Click(btn)
        await browser.pause(3000)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.saveAlert)
    }
    CreateApprGrp1 = async(approvip1,btn) =>{
        await actionWrapper.Click(path.CreateApprBtn)
        await actionWrapper.clickAndSetvalue(path.ApprName,approvip1)
        await actionWrapper.Click(path.DiscountBtn)
        await actionWrapper.Click(btn)
        await browser.pause(3000)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.saveAlert)
    }
    ApproverGrpfieldValid = async()=>{
        await actionWrapper.Click(path.CreateApprBtn)
        await actionWrapper.Click(path.ApprName)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.snackBarValidate(path.ErrApprName,approvip.errmsgApprName)
        await actionWrapper.Click(path.ConfcancelBtn)  
    } 
    Delete_Edit_ApprGrp = async(ele,btn,snakpath,alertip) =>{
        await actionWrapper.Click(path.DeleteAprTab)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(ele)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,alertip)
    }
    EditApprGrp = async(ele,btn,snakpath,alertip)=>{
        await actionWrapper.Click(path.DeleteAprTab)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(ele)
        await actionWrapper.clearAndsetValue(path.ApprName,approvip.approvName2)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,alertip)
    }
    
    AddUserGrp = async(grpName,precedence,approver1,btn) =>{
        await actionWrapper.Click(path.DeleteAprTab)
        await actionWrapper.Click(path.AddGrpbtn)
        await actionWrapper.Click(path.ReviewerBtn)
        await actionWrapper.Click(path.ApproverBtn)
        await browser.pause(1000)
        await actionWrapper.clickSetvalueAndSelectoption(path.OptionalAppro,approvip.optionalAppr)
        await actionWrapper.clickAndSetvalue(path.GrpName,grpName)
        await actionWrapper.clickSetvalueAndSelectoption(path.Precedence,precedence)
        await actionWrapper.clickSetvalueAndSelectoption(path.Approvers,approver1)
        await actionWrapper.selectDrpdownusingKeyboard(path.DefaultAppr)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.changalert)
    }
    DeleteUserGrp = async(btn,errmesg,alertip) =>{
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(errmesg,alertip)
    }
    DeleMapedUserGrp=async(errmesg,alertip)=>{
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.snackBarValidate(errmesg,alertip)
    }
    UserGrpFieldValid = async(errmesg,alertip) =>{
        await actionWrapper.Click(path.AddGrpbtn)
        await actionWrapper.Click(path.ApproverBtn)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.snackBarValidate(errmesg,alertip)
        await actionWrapper.Click(path.ConfcancelBtn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.saveAlert)
    }
    AddRange = async(endRange,rangeip,btn)=>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.Click(path.AddRangebtn)
        await actionWrapper.clearAndsetValue(path.Endrange,endRange)
        await browser.pause(2000)
        await actionWrapper.clickSetvalueAndSelectoption(path.ApprGrpName,rangeip)
        await actionWrapper.Click(btn)
    }
    AddRange1 = async(endRange,ApprGrpName,rangeip,ApprGrpName1,rangeip1,btn)=>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.Click(path.AddRangebtn)
        await actionWrapper.clearAndsetValue(path.Endrange,endRange)
        await browser.pause(2000)
        await actionWrapper.clicksetvalueAndSelectOptionTwoTimes(ApprGrpName,rangeip,ApprGrpName1,rangeip1)
        await actionWrapper.Click(btn)
    }
        DeleteRange = async(btn)=>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.Click(path.DeleRannge)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.changalert)
    }
    EditRange = async(btn) =>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.clearAndsetValue(path.Endrange,approvip.editrange)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.changalert)
    }
    Rangefieldvalid =async(errmesg,alertip)=>{
        await actionWrapper.Click(path.AddRangebtn)
        await actionWrapper.clearAndsetValue(path.Endrange,approvip.editrange)
        await browser.pause(2000)
        await actionWrapper.Click(path.ConfSavelBtn)
        await browser.pause(2000)
        await actionWrapper.snackBarValidate(errmesg,alertip)
       // await actionWrapper.Click(path.ConfcancelBtn)
    }
    EditUserGrp =async(btn) =>{
        await actionWrapper.Click(path.EditUserGrp)
        await actionWrapper.clearAndsetValue(path.GrpName,approvip.editgrpName)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.changalert)
    }
    deleteAll = async() =>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.Click(path.DeleRannge)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.Click(path.GrpTab)
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.DeleteApr)
        await actionWrapper.Click(path.ConfDeleBtn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.deleAlert)    
    }
    deleteAll2 = async() =>{
        await actionWrapper.Click(path.RangTab)
        await actionWrapper.Click(path.DeleRannge)
        await actionWrapper.Click(path.DeleRannge)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.Click(path.GrpTab)
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.Click(path.DeleUserGrpbtn)
        await actionWrapper.Click(path.ConfSavelBtn)
        await actionWrapper.Click(path.MoreOptionbtn)
        await actionWrapper.Click(path.DeleteApr)
        await actionWrapper.Click(path.ConfDeleBtn)
        await actionWrapper.snackBarValidate(common.snackbar,approvip.deleAlert)    
    }


}
module.exports = new Approval();