const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const moduleAuth_path = require("../../PageObjects/Settings/ModuleAuthorization.page");
const moduleAuth_fn = require("../../CommonFunctions/settings/ModuleAuthorization")
var moduleAuthip = require("../../Inputs/settings/ModuleAuthorizationIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('ModuleAuthorization Page', () => {
    it("Should allow to access login into ModuleAuth page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await moduleAuth_fn.open();
        await actionsWrappers.urlValidation("/module_authorization");
    });
    /* ******************** ADD ROLE CARD *********************** */
    it('should add a role with save', async () => {
        await moduleAuth_fn.AddRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, common.snackbar, moduleAuthip.saveAlert)
        await browser.pause(3000)
    });
    it('should add a role with cancel', async () => {
        await moduleAuth_fn.AddRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.CancelBtn, common.snackbar, moduleAuthip.saveAlert)
    });
    it('should validate a Role Name field in Add Role Card', async () => {
        await moduleAuth_fn.AddFieldValid()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorRoleName, moduleAuthip.errRolename)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    it('should validate a Role Description field in Add Role Card', async () => {
        await moduleAuth_fn.AddFieldValid()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorRoleDsc, moduleAuthip.errRoleDesc)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    it('should validate a Account Type field in Add Role Card', async () => {
        await moduleAuth_fn.AddFieldValid()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorAccType, moduleAuthip.errAccType)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    it('should validate a Permission Acces clone from field in Add Role Card', async () => {
        await moduleAuth_fn.AddFieldValid()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorAccesClone, moduleAuthip.errAccesClone)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    /* ******************** EDIT ROLE CARD *********************** */
    it('should Edit the role with cancel', async () => {
        await moduleAuth_fn.EditRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.CancelBtn, common.snackbar, moduleAuthip.saveAlert)
    });
    it('should Edit the role with save', async () => {
        await moduleAuth_fn.EditRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, common.snackbar, moduleAuthip.saveAlert)
        await browser.pause(2000)
    });
    it('should validate a select Role to Update field in Edit Role Card', async () => {
        await moduleAuth_fn.EditDeleFieldValid(moduleAuth_path.Edit)
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.errRoleId, moduleAuthip.errRoleid)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    it('should validate a Role Name field in Edit Role Card', async () => {
        await moduleAuth_fn.EditDeleFieldValid(moduleAuth_path.Edit)
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorRoleName, moduleAuthip.errRolename)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });
    it('should validate a Role Description field in Edit Role Card', async () => {
        await moduleAuth_fn.EditDeleFieldValid(moduleAuth_path.Edit)
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrorRoleDsc, moduleAuthip.errRoleDesc)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });

    /* ******************** DELETE ROLE CARD *********************** */
    it('should Delete the Created Role with cancel', async () => {
        await moduleAuth_fn.DeleteRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.CancelBtn, common.snackbar, moduleAuthip.deleteAlert)
    });
    it('should Delete the Created Role with Delete', async () => {
        await moduleAuth_fn.DeleteRole()
        await moduleAuth_fn.snakvalid(moduleAuth_path.DeleteBtn, common.snackbar, moduleAuthip.deleteAlert)
        await browser.pause(3000)
    });
    it('should validate a Select Role To Edit field in Delete Role Card', async () => {
        await moduleAuth_fn.EditDeleFieldValid(moduleAuth_path.Delete)
        await moduleAuth_fn.snakvalid(moduleAuth_path.SaveBtn, moduleAuth_path.ErrDeleteRole, moduleAuthip.errDeleteRole)
        await actionsWrappers.Click(moduleAuth_path.CancelBtn)
    });

});