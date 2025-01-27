const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const approval_path = require("../../PageObjects/Settings/Approvals.page");
const approval_fn = require("../../CommonFunctions/settings/approvals")
var approvalip = require("../../Inputs/settings/AprovalIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Approval Page', () => {
  it("Should allow to access login into Approval page ", async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dashboard");
    await approval_fn.open();
    await actionsWrappers.urlValidation("/approvals");
  });
  /* ***************** create Group Name card ***************************   */
  it('shoud allow a user to create a Approver Group with cancel', async () => {
    await approval_fn.CreateApprGrp(approvalip.approvName, approval_path.ConfcancelBtn)
  });
  it('shoud allow a user to create a Approver Group with save', async () => {
    await approval_fn.CreateApprGrp(approvalip.approvName, approval_path.ConfSavelBtn)
  });

  it('should validate the appprover group name field in Create Approver Card', async () => {
    await approval_fn.ApproverGrpfieldValid()
  });
  it('should edit the Approver Group Name Field with cancel', async () => {
    await approval_fn.EditApprGrp(approval_path.EditAprgrp, approval_path.ConfcancelBtn,
      common.snackbar, approvalip.saveAlert)
  });
  it('should edit the Approver Group Name Field with save', async () => {
    await approval_fn.EditApprGrp(approval_path.EditAprgrp, approval_path.ConfSavelBtn,
      common.snackbar, approvalip.saveAlert)
  });
  it('should delete the Created Approver Group with Cancel', async () => {
    await browser.pause(2000)
    await approval_fn.Delete_Edit_ApprGrp(approval_path.DeleteApr, approval_path.ConfcancelBtn,
      common.snackbar, approvalip.deleAlert)
  });
  it('should delete the Created Approver Group with save', async () => {
    await approval_fn.Delete_Edit_ApprGrp(approval_path.DeleteApr, approval_path.ConfDeleBtn,
      common.snackbar, approvalip.deleAlert)
  });
  it('shoud allow a user to create a Approver Group with save', async () => {
    await browser.pause(2000)
    await approval_fn.CreateApprGrp(approvalip.approvName, approval_path.ConfSavelBtn)
  });

  /* ************** Approver User Group Card ********************************* */
  it('should create a new User group with cancel', async () => {
    await browser.refresh()
    await browser.pause(2000)
    await approval_fn.AddUserGrp(approvalip.grpName, approvalip.precedence, approvalip.approver1, approval_path.ConfcancelBtn)
  });
  it('should create a new User group with save', async () => {
    await approval_fn.AddUserGrp(approvalip.grpName, approvalip.precedence, approvalip.approver1, approval_path.ConfSavelBtn)
  });
  it('should edit the user group', async () => {
    await browser.pause(2000)
    await approval_fn.EditUserGrp(approval_path.ConfSavelBtn)
  });
  it('should edit the precednce in approval process ', async () => {
    await actionsWrappers.clearAndsetValue(approval_path.Precedencebtn, approvalip.approPrecedence)
    await actionsWrappers.Click(approval_path.ConfSavelBtn)
  });
  it('should delete a creted User group with cancel', async () => {
    await browser.pause(2000)
    await approval_fn.DeleteUserGrp(approval_path.ConfcancelBtn, common.snackbar, approvalip.changalert)
  });
  it('should delete a creted User group with save', async () => {
    await approval_fn.DeleteUserGrp(approval_path.ConfSavelBtn, common.snackbar, approvalip.changalert)
  });
  it('should validate a user group optional approver field', async () => {
    await browser.pause(1000)
    await approval_fn.UserGrpFieldValid(approval_path.ErrOptiApproval, approvalip.erropptionalAppro)
  });
  it('should validate a usergroup Group Name field', async () => {
    await browser.pause(1000)
    await approval_fn.UserGrpFieldValid(approval_path.ErrGrpName, approvalip.errgrpname)
  });
  it('should validate a user group Precedence field', async () => {
    await browser.pause(1000)
    await approval_fn.UserGrpFieldValid(approval_path.ErrPrecednce, approvalip.errPrecednce)
  });
  it('should validate a user group approver field', async () => {
    await browser.pause(1000)
    await approval_fn.UserGrpFieldValid(approval_path.ErrApprover, approvalip.errApprover)
  });
  it('should create a new User group with save', async () => {
    await browser.pause(1000)
    await approval_fn.AddUserGrp(approvalip.grpName, approvalip.precedence, approvalip.approver1, approval_path.ConfSavelBtn)
  });

  /* ************** Range Card ***************************  */
  it('should create a new Range with cancel ', async () => {
    await actionsWrappers.Click(approval_path.DeleteAprTab)
    await approval_fn.AddRange(approvalip.endRange, approvalip.grpName, approval_path.ConfcancelBtn)
  });
  it('should create a new Range with save ', async () => {
    await approval_fn.AddRange(approvalip.endRange, approvalip.grpName, approval_path.ConfSavelBtn)
  });
  it('should edit the range with save', async () => {
    await approval_fn.EditRange(approval_path.ConfSavelBtn)
  });
  it('should validate a ApproverGroup field in range card', async () => {
    await approval_fn.Rangefieldvalid(approval_path.ErrRangegrpname, approvalip.errRangeApprovGrp)
  });
  it('should delete a created range with cancel', async () => {
    await approval_fn.DeleteRange(approval_path.ConfcancelBtn)
  });
  it('should delete a created range with save', async () => {
    await approval_fn.DeleteRange(approval_path.ConfSavelBtn)
  });
  it('should create a new Range with save ', async () => {
    await approval_fn.AddRange(approvalip.endRange, approvalip.grpName, approval_path.ConfSavelBtn)
  });
  it('should try to delete a mapped User group', async () => {
    await actionsWrappers.Click(approval_path.GrpTab)
    await approval_fn.DeleMapedUserGrp(common.snackbar, approvalip.errmapedGrp)
  });
  it('should delete the created range & user group & approver group', async () => {
    await approval_fn.deleteAll()
  });
  it('should create a approval & delete the approvalgrp', async () => {
    await approval_fn.open();
    await approval_fn.CreateApprGrp(approvalip.approvName2, approvals_path.ConfSavelBtn)
    await browser.pause(2000)
    await approval_fn.AddUserGrp(approvalip.grpName1, approvalip.precedence, approvalip.approver1, approvals_path.ConfSavelBtn)
    await approval_fn.AddUserGrp(approvalip.grpName2, approvalip.precedence1, approvalip.approver3, approvals_path.ConfSavelBtn)
    await approval_fn.AddUserGrp(approvalip.grpName3, approvalip.precedence2, approvalip.approver5, approvals_path.ConfSavelBtn)
    await approval_fn.AddRange1(approvalip.endRange2, approvals_path.ApprGrpName, approvalip.grpName2, approvals_path.ApprGrpName, approvalip.grpName3, approvals_path.ConfSavelBtn)
    await approval_fn.AddRange(approvalip.endRange2, approvalip.grpName2, approvals_path.ConfSavelBtn)
    await browser.pause(3000)
    await approval_fn.open();
    await actionsWrappers.Click(common.Refresh)
    await actionsWrappers.Click(approval_path.DeleteAprTab)
    await approvals_fn.deleteAll2()


  });


});