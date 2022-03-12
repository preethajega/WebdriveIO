const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const profile_path = require("../../PageObjects/Settings/profile.page");
const profile_fn = require("../../CommonFunctions/settings/profile");
var profileip = require("../../Inputs/settings/profileIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('API Page', () => {
    it("Should allow to access login into API settings page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await profile_fn.open1();
        await actionsWrappers.urlValidation("/api_key");
    });
    it('should validate a copying Api Key ',async () => {
        await actionsWrappers.Click(profile_path.Copy)
        await actionsWrappers.snackBarValidate(common.snackbar,profileip.copyTxt)
    });
});