const assert = require("assert");
const path = require("path");
const BU_path = require("../../PageObjects/Settings/Businessunit.page");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const BU_fn= require("../../CommonFunctions/settings/Bu");
var BUip= require("../../Inputs/settings/BuIp");


describe("BusinessUnit Page", () => {
        it("Should allow to access login ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  BU_fn.open();
        await  actionsWrappers.urlValidation("/businessunit");
        })
        it('should valiadte add business unit by valid options & priority',async () => {
           await BU_fn.Addbusinessunit();
        });
        it('should valiadte add business unit by valid options & priority with canceling',async () => {
          await BU_fn.Addbusinessunitcancel();
        });
        it('should validate add business unit by valid options & invalid priority',async () => {
           await BU_fn.Invaidpriority();
        });
        it('should validate add business unt by valid options & exisiting priority',async () => {
          await BU_fn.Exisitingpriority();
        });
        it('should Validate add business unit by exisiting options &  valid priority by saving',async () => {
          await BU_fn.Exisitingoption();
        });   
        it('should validate add businessunit by without options',async () => {
          await BU_fn.Withoutoption();
        });
        it('should validate add businessunit by without priority',async () => {
          await BU_fn.Withoutpriority();
        });
        it('should validate update businessunit',async () => {
          await BU_fn.UpdateBU(await BU_path.savebtn);
        });
        it('should validate update businessunit by cancel',async () => {
          await BU_fn.UpdateBU(await BU_path.cancelbtn);
        });
        it('should validate delete businessunit',async () => {
          await BU_fn.DeleteBU();
        });
        it('should vaalidate delete businessunit by cancel',async () => {
          await BU_fn.DeleteBUCancel();
        });


    })