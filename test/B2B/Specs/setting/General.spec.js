const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const gen_path = require("../../PageObjects/Settings/General.page");
const gen_fn= require("../../CommonFunctions/settings/general")
var genip= require("../../Inputs/settings/GeneralIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Company Page', () => {
     it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  gen_fn.open();
        await  actionsWrappers.urlValidation("/general");
       });
    
     it('should Edit the Company identifier field with save',async () => {
         await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier,genip.compid,gen_path.EditSavebtn,
            common.snackbar,genip.alert)
     });
     it('should Edit the Company identifier field with save',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier,genip.compid,gen_path.EditCancelbtn,
           common.snackbar,genip.alert)
     });
     it('should Edit the Email field with save',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId,genip.mail,gen_path.EditSavebtn,
           common.snackbar,genip.alert)
     });
     it('should Edit the Email field with save',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier,genip.compid,gen_path.EditCancelbtn,
           common.snackbar,genip.alert)
     });
     it('should not allow a user to edit the field',async () => {
        await actionsWrappers.clickAndSetvalue(gen_path.Finicalyear,genip.code)
     });
     it('should validate a Company Identifier field',async () => {
        await gen_fn.Fieldvalidate(gen_path.CompIdentifier,gen_path.ErrormsgCompId,genip.errormsgCompIdenti)
     });
     it('should validate a Default MailId field',async () => {
        await gen_fn.Fieldvalidate(gen_path.DefaultMailId,gen_path.ErrormsgMailId,genip.errormsgMail)
     });
     it('should validate a user not able to enter invalid EmailId',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId,genip.invalidmail,gen_path.EditSavebtn,
            gen_path.Invalidmailid,genip.errormsgInvalidmail)
        await gen_path.EditCancelbtn
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
     it('should not allow a user to delete a mapped currency',async () => {
         await gen_fn.DeleteCurr(gen_path.MapedDeleteBtn,common.snackbar,genip.mappedDeleteAlert)
     });
      it('should delete a currency',async () => {
        await gen_fn.DeleteCurr(gen_path.Deletebtn,common.snackbar,genip.alert)
     });
     it('should validate a Decimal Roundoff field',async () => {
        await gen_fn.Fieldvalidate(gen_path.RoundOff,gen_path.ErrorRoundOff,genip.errormsgRoundoff)
     });
     it('should edit the Date & display Format',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.DateDiaplay,genip.date,gen_path.EditSavebtn,
            common.snackbar,genip.alert)
     });
     it('should edit the Time & display Format',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.TimeDisplay,genip.time,gen_path.EditSavebtn,
            common.snackbar,genip.alert)
     });
     it('should edit the  Time zone Format',async () => {
        await gen_fn.EditAddtionalsetting(gen_path.TimeZone,genip.timezone,gen_path.EditSavebtn,
            common.snackbar,genip.alert)
     });

});