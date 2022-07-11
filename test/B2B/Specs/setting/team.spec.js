const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const team_path = require("../../PageObjects/Settings/Team.page");
const team_fn = require("../../CommonFunctions/settings/team")
var teamip = require("../../Inputs/settings/TeamIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Team Page', () => {
  it("Should allow to access login into Team page ", async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dashboard");
    await team_fn.open();
    await actionsWrappers.urlValidation("/team/landing");
    await browser.pause(5000)
  });
  it('should Create a user with saving', async () => {
    await team_fn.AddUser(team_path.Code, teamip.code1, team_path.Email, teamip.email1, team_path.CancelBtn)
    await actionsWrappers.Click(team_path.Closecard)
  });
  it('should Create a user with canceling', async () => {
    await team_fn.AddUser(team_path.Code, teamip.code, team_path.Email, teamip.email, team_path.Savebtn)
    await browser.pause(3000)
  });
  it('should validate a Name field', async () => {
    await team_fn.MandatoryFieldvalid(team_path.ErrormsgName, teamip.errmdsgName)
  });
  it('should validate a Email field', async () => {
    await team_fn.MandatoryFieldvalid(team_path.ErrormsgEmail, teamip.errmsgEmail)
  });
  it('should validate a Role field', async () => {
    await team_fn.MandatoryFieldvalid(team_path.ErrormsgRole, teamip.errmsgRole)
  });
  it('should not allow a user to enter the same mail in the Add user card ', async () => {
    await team_fn.AlredyExistsFieldValid(team_path.Email, teamip.emails, team_path.errMail, teamip.mailexitsAlert)
  });
  it('should not allow a user to enter the same code in the Add user card ', async () => {
    await team_fn.AlredyExistsFieldValid(team_path.Code, teamip.code1, common.snackbar, teamip.errcodeAlert)
  });
  it('should not allow a user to enter the invalid mail in the Add user card ', async () => {
    await team_fn.AlredyExistsFieldValid(team_path.Email, teamip.invalidmail, team_path.InvaliMail, teamip.invalidmailAlert)
  });
  it('should add a Reporting to Manager with save', async () => {
    await browser.pause(8000);
    await team_fn.AddReportManager(team_path.ReportingToManger,team_path.Savebtn)
  });
  it('should add a Reporting to Manager with save', async () => {
    await browser.pause(2000);
    await team_fn.deleteReportManager(team_path.ReportingToManger,team_path.Savebtn)
  });
  it('should add a DotedReporting To  Manager with save', async () => {
    await browser.pause(2000);
    await team_fn.AddReportManager(team_path.DotedReportingToManger,team_path.Savebtn)
  });
 
  it('should add a DotedReporting To  Manager with save', async () => {
    await browser.pause(2000);
    await team_fn.deleteReportManager(team_path.DotedReportingToManger,team_path.Savebtn)
  });

  it('should Add the tags to the exisiting user with cancel', async () => {
    await browser.pause(6000);
    await actionsWrappers.Click(team_path.Editdata)
    await browser.pause(3000);
    await team_fn.AddTags(team_path.CancelBtn)
  });
  it('should Add the tags to the exisiting user with saving', async () => {
    await browser.pause(3000);
    await team_fn.AddTags(team_path.Savebtn)
  });
  it('should add the Bu to the exisiting user with canceling', async () => {
    await actionsWrappers.Click(common.closeCardQuote)
    await browser.pause(4000);
    await actionsWrappers.Click(team_path.Editdata)
    await browser.pause(6000);
    await team_fn.AddBu(team_path.Branch, teamip.branch1, team_path.BU, teamip.bu1, team_path.CancelBtn)
  });
  it('should add the Bu to the exisiting user with saving', async () => {
    await browser.pause(3000);
    await team_fn.AddBu(team_path.Branch, teamip.branch1, team_path.BU, teamip.bu1, team_path.Savebtn)
  });
  it('should delete the Tag with cancel', async () => {
    await browser.pause(4000);
    await team_fn.DeleteTag(team_path.CancelBtn)
  });
  it('should delete the Tag with save', async () => {
    await browser.pause(3000);
    await team_fn.DeleteTag(team_path.Savebtn)
  });
  it('should delete a Branch & BU with cancel', async () => {
    await browser.pause(3000);
    await team_fn.DeleteBu(team_path.CancelBtn)
  });
  it('should delete a Branch & BU with saving', async () => {
    await browser.pause(2000);
    await actionsWrappers.scrollEleAndClick(team_path.BUAddBtn) //temp
    await team_fn.AddBu(team_path.Branch, teamip.branch2, team_path.BU, teamip.bu2, team_path.Savebtn)
    await browser.pause(2000);
    await team_fn.DeleteBu(team_path.Savebtn)
  });
  it('should add only Branch in Branch & Bu', async () => {
    await browser.pause(2000);
    await actionsWrappers.scrollEleAndClick(team_path.BUAddBtn) //temp
    await team_fn.AddBranch()
  });
  it('should not allow a user to save the Branch field without entering inputs', async () => {
    await browser.pause(3000);
    await actionsWrappers.scrollEleAndClick(team_path.BUAddBtn) //temp
    await team_fn.BranchValid()
  });
  it('should invite a user', async () => {
    await browser.pause(3000);
    await team_fn.InviteUser()
  });
  it('should Reinvite a user with save', async () => {
    await browser.pause(4000);
    await team_fn.ReinvieUser()
  });
  it('should Inactive the user with cancel', async () => {
    await browser.pause(2000);
    await team_fn.statusUser(team_path.Inactivebtn, team_path.ConfcancelBtn, common.snackbar, teamip.inactivealert)
  });
  it('should Inactive the user with save', async () => {
    await browser.pause(3000);
    await team_fn.statusUser(team_path.Inactivebtn, team_path.ConfYesBtn, common.snackbar, teamip.inactivealert)
  });

  it('should activate the user with cancel', async () => {
    await browser.pause(3000);
    await team_fn.statusUser(team_path.Activatebtn, team_path.ConfcancelBtn, common.snackbar, teamip.activatealert)
  });
  it('should activate the user with ', async () => {
    await browser.pause(3000);
    await team_fn.statusUser(team_path.Activatebtn, team_path.ConfYesBtn, common.snackbar, teamip.activatealert)
  });

  it('should delete a user with save', async () => {
    await browser.pause(3000);
    await team_fn.DeleteUser(team_path.ConfYesBtn)
  });
  it('should swap the owner role with cancel', async () => {
    await browser.pause(3000);
    await team_fn.statusUser(team_path.SwapRolebtn, team_path.ConfcancelBtn, common.snackbar, teamip.swaprolealert)
  });
  it('should swap the owner role with save', async () => {
    await browser.pause(3000);
    await team_fn.statusUser(team_path.SwapRolebtn, team_path.ConfYesBtn, common.snackbar, teamip.swaprolealert)
  });

});