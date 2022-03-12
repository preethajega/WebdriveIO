const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const integration_path = require("../../PageObjects/Settings/integrations.page");
const integrtion_fn = require("../../CommonFunctions/settings/integrations");
var integrtionip = require("../../Inputs/settings/integrations.Ip");
const imageUpload = path.join(__dirname, '../../../FileUtils/profilepic.png');
const common = require("../../PageObjects/Common/commonObjects");

describe('Company Page', () => {
    it("Should allow to access login into company page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await integrtion_fn.open();
        await actionsWrappers.urlValidation("/integration_settings");
    });
});