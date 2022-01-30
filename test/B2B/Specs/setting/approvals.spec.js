const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const approval_path = require("../../PageObjects/Settings/Approvals.page");
const approval_fn= require("../../CommonFunctions/settings/approvals")
var approvalip= require("../../Inputs/settings/AproveIP");
const common = require("../../PageObjects/Common/commonObjects");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe('Company Page', () => {
      it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  approval_fn.open();
        await  actionsWrappers.urlValidation("/approvals");
      });
      // it('shoud allow a user to create a Approver Group with cancel',async () => {
      //    await approval_fn.CreateApprGrp(approval_path.ConfcancelBtn)
      // });
      // it('shoud allow a user to create a Approver Group with save',async () => {
      //    await approval_fn.CreateApprGrp(approval_path.ConfSavelBtn)
      // });
      // it('should validate the appprover group name field in Create Approver Card',async () => {
      //    await approval_fn.ApproverGrpfieldValid()
      // });
      it('should edit the Approver Group Name Field with cancel',async () => {
         await approval_fn.Delete_Edit_ApprGrp(approval_path.EditAprgrp,approval_path.ConfcancelBtn,
                   common.snackbar,approvalip.deleAlert)
      });
      it('should edit the Approver Group Name Field with save',async () => {
         await approval_fn.Delete_Edit_ApprGrp(approval_path.EditAprgrp,approval_path.ConfcancelBtn,
                   common.snackbar,approvalip.deleAlert)
      });
      // it('should create a new User group with cancel',async () => {
      //    await browser.pause(1000)
      //    await actionsWrappers.Click(approval_path.DeleteAprTab)
      //    await browser.pause(1000)
      //    await approval_fn.AddUserGrp(approval_path.ConfcancelBtn)
      // });
      // it('should create a new User group with save',async () => {
      //    await actionsWrappers.Click(approval_path.DeleteAprTab)
      //    await approval_fn.AddUserGrp(approval_path.ConfSavelBtn)
      // });
      // it('should delete a creted User group with cancel',async () => {
      //    await actionsWrappers.Click(approval_path.DeleteAprTab)
      //    await approval_fn.DeleteUserGrp(approval_path.ConfcancelBtn)
      // });
      // it('should delete a creted User group with save',async () => {
      //    await approval_fn.DeleteUserGrp(approval_path.ConfSavelBtn)
      // });
      // it('should delete the Created Approver Group with Cancel',async () => {
      //    await approval_fn.Delete_Edit_ApprGrp(approval_path.DeleUserGrpbtn,approval_path.ConfcancelBtn,
      //       common.snackbar,approvalip.deleAlert)
      // });
      // it('should delete the Created Approver Group with save',async () => {
      //    await approval_fn.Delete_Edit_ApprGrp(approval_path.DeleUserGrpbtn,approval_path.ConfDeleBtn,
      //       common.snackbar,approvalip.deleAlert)
      // });
});