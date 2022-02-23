const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const zone_path = require("../../PageObjects/Settings/zone.page");
const zone_fn = require("../../CommonFunctions/settings/zone")
var zoneip = require("../../Inputs/settings/zoneIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Zone Page', () => {
    it("Should allow to access login into zone page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await zone_fn.open();
        await actionsWrappers.urlValidation("/zones");
    });
});