const assert = require("assert");
const path = require("path");
const Comp_path = require("../../PageObjects/Settings/company.page");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Comp_fn= require("../../CommonFunctions/settings/ComP");
var Compip= require("../../Inputs/settings/CompanyIP");


describe('Company Page', () => {
    it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  Comp_fn.open();
        await  actionsWrappers.urlValidation("/company");
        })
    it('should Validate a company details by updating a Logo with valid files',async () => {
       await Comp_fn.UploadLogo();
    });
});