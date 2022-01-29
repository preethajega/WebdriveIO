const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const term_path = require("../../PageObjects/Settings/terms.page");
const term_fn= require("../../CommonFunctions/settings/terms")
var termip= require("../../Inputs/settings/TermsIP");
const common = require("../../PageObjects/Common/commonObjects");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe('Company Page', () => {
     it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  term_fn.open();
        await  actionsWrappers.urlValidation("/terms");
       });
});