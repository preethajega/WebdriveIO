const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const team_path = require("../../PageObjects/Settings/Team.page");
const team_fn= require("../../CommonFunctions/settings/team")
var teamip= require("../../Inputs/settings/TeamIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Company Page', () => {
     it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  team_fn.open();
        await  actionsWrappers.urlValidation("/team/landing");
       });
      //  it('should Create a user with saving',async () => {
      //     await team_fn.AddUser(team_path.Email,teamip.email,team_path.Savebtn)
      //  });
      //  it('should Create a user with canceling',async () => {
      //    await team_fn.AddUser(team_path.Email,teamip.email1,team_path.CancelBtn)
      //    await actionsWrappers.Click(team_path.Closecard)
      //  });
      //  it('should validate a Name field',async() => {
      //     await team_fn.MandatoryFieldvalid(team_path.ErrormsgName,teamip.errmdsgName)
      //  });
      //  it('should validate a Email field',async() => {
      //    await team_fn.MandatoryFieldvalid(team_path.ErrormsgEmail,teamip.errmsgEmail)
      //  });
      // it('should validate a Role field',async() => {
      //    await team_fn.MandatoryFieldvalid(team_path.ErrormsgRole,teamip.errmsgRole)
      //  });
      //  it('should delete a user with canceling',async () => {
      //     await team_fn.DeleteUser(team_path.ConfcancelBtn)
      //  });
      //  it('should delete a user with canceling',async () => {
      //    await team_fn.DeleteUser(team_path.ConfYesBtn)
      // });
      // it('should edit the tags with saving',async () => {
      //    await team_fn.AddTags(team_path.Savebtn)
      // });
      // it('should edit the tags with saving',async () => {
      //    await team_fn.AddTags(team_path.CancelBtn)
      // });
      it('should add the Bu to the exisiting user with saving',async () => {
         await team_fn.AddBu(team_path.Savebtn)
      });
      it('should add the Bu to the exisiting user with canceling',async () => {
         await team_fn.AddBu(team_path.CancelBtn)
      });
});