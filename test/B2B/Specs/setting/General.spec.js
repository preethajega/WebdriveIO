const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Gen_fn= require("../../PageObjects/Settings/General.page");
var gen_path= require("../../Inputs/settings/GeneralIP");


describe('Company Page', () => {
    it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  Gen_fn.open();
        await  actionsWrappers.urlValidation("/company");
        });
    });