const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const gen_path = require("../../PageObjects/Settings/General.page");
const gen_fn= require("../../CommonFunctions/settings/general")
var genip= require("../../Inputs/settings/GeneralIP");


describe('Company Page', () => {
    it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  gen_fn.open();
        await  actionsWrappers.urlValidation("/general");
       });
     it('should create a new currency with saving ',async () => {
         await gen_fn.Addcur(gen_path.Code,genip.code,gen_path.SaveBtn)
     });
     it('should not allow a user to enter Exisiting currency',async () => {
         await gen_fn.AlreadyExistCur()
     });
     it('should create a new currency with cancel ',async () => {
         await gen_fn.Addcur(gen_path.Code,genip.code1,gen_path.CancelBtn)
     });
     it('should edit a Exisiting Currency with saving',async () => {
         await gen_fn.EditCurr(gen_path.EditCode,genip.editcode,gen_path.EditSavebtn)
     });
     it('should edit a Exisiting Currency with saving',async () => {
         await gen_fn.EditCurr(gen_path.EditCode,genip.editcode1,gen_path.EditCancelbtn)
     });
     it('should validate code field',async () => {
         await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgCode,genip.errorCodeMsg)
     });
     it('should validate Name field',async () => {
         await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgName,genip.errorNamemsg)
     });
    it('should validate a Symbol field',async () => {
        await gen_fn.Fieldvalidate(gen_path.EditSymbol,gen_path.ErrormsgSymbol,genip.errormsgSymbol)
    });
    it('should validate a Symbol field',async () => {
        await gen_fn.Fieldvalidate(gen_path.EditFactor,gen_path.ErrormsgFactor,genip.errormsgFactor)
    });
    it('should delete a currency',async () => {
        await gen_fn.DeleteCurr()
    });
    it('should validate a Company Identifier field',async () => {
        await gen_fn.Fieldvalidate(gen_path.CompIdentifier,gen_path.ErrormsgCompId,genip.errormsgCompIdenti)
    });
    it('should validate a Default MailId field',async () => {
        await gen_fn.Fieldvalidate(gen_path.DefaultMailId,gen_path.ErrormsgMailId,genip.errormsgMail)
    });
    it('should validate a Decimal Roundoff field',async () => {
        await gen_fn.Fieldvalidate(gen_path.RoundOff,gen_path.ErrorRoundOff,genip.errormsgRoundoff)
    });

    });