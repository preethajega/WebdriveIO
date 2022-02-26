const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const custom_path = require("../../PageObjects/Settings/custom.page");
const custom_fn= require("../../CommonFunctions/settings/custom")
var customip= require("../../Inputs/settings/customIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Customization Page', () => {
     it("Should allow to access login into Customization page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  custom_fn.open();
        await  actionsWrappers.urlValidation("/customization");
       });
});