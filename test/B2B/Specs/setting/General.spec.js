const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const gen_path = require("../../PageObjects/Settings/General.page");
const gen_fn = require("../../CommonFunctions/settings/general")
var genip = require("../../Inputs/settings/GeneralIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('General Page', () => {
   it("Should allow to access login into general page ", async () => {
      await LoginPage.open();
      await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
      await actionsWrappers.urlValidation("/dashboard");
      await gen_fn.open();
      await actionsWrappers.urlValidation("/general");
   });
   /* ********************* ADDITIONAL SETTINGS CARD ********************** */
   it('should Edit the Company identifier field with save', async () => {
      await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier, genip.compid, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should Edit the Company identifier field with cancel', async () => {
      await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier, genip.compid1, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should Edit the Email field with save', async () => {
      await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId, genip.mail, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should Edit the Email field with cancel', async () => {
      await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId, genip.mail1, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should not allow a user to edit the field', async () => {
      await actionsWrappers.clickAndSetvalue(gen_path.Finicalyear, genip.code)
   });
   it('should validate a Company Identifier field', async () => {
      await gen_fn.Fieldvalidate(gen_path.CompIdentifier, gen_path.ErrormsgCompId, genip.errormsgCompIdenti)
   });
   it('should validate a Default MailId field', async () => {
      await gen_fn.Fieldvalidate(gen_path.DefaultMailId, gen_path.ErrormsgMailId, genip.errormsgMail)
   });
   it('should not allow a user to enter invalid EmailId', async () => {
      await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId, genip.invalidmail, gen_path.EditSavebtn,
         gen_path.Invalidmailid, genip.errormsgInvalidmail)
      await gen_path.EditCancelbtn
   });
   /* ********************* CREATE CURRENCY CARD ********************** */
   it('should create a new currency with saving ', async () => {
      await browser.refresh()
      await gen_fn.Addcur(gen_path.Code, genip.code, gen_path.Symbol, genip.symbol, gen_path.SaveBtn)
   });
   it('should create a new currency with cancel ', async () => {
      await gen_fn.Addcur(gen_path.Code, genip.code1, gen_path.Symbol, genip.symbol1, gen_path.CancelBtn)
   });
   it('should not allow a user to enter Exisiting currency', async () => {
      await gen_fn.AlreadyExistCur()
   });
   it('should edit a Exisiting Currency with saving', async () => {
      await browser.pause(2000)
      await actionsWrappers.scrollEle(gen_path.EditCode)
      await gen_fn.EditCurr(gen_path.EditCode, genip.editcode, gen_path.EditSavebtn)
   });
   it('should edit a Exisiting Currency with canceling', async () => {
      await browser.pause(2000)
      await actionsWrappers.scrollEle(gen_path.EditCode)
      await gen_fn.EditCurr(gen_path.EditCode, genip.editcode1, gen_path.EditCancelbtn)
   });
   it('should validate code field', async () => {
      await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgCode, genip.errorCodeMsg)
   });
   it('should validate Name field', async () => {
      await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgName, genip.errorNamemsg)
   });
   it('should validate a Symbol field', async () => {
      await gen_fn.Fieldvalidate(gen_path.EditSymbol, gen_path.ErrormsgSymbol, genip.errormsgSymbol)
      await browser.pause(3000)
   });
   it('should not allow a user to delete a mapped currency', async () => {
      await gen_fn.DeleteCurr(gen_path.MapedDeleteBtn, common.snackbar, genip.mappedDeleteAlert)
   });
   /*   it('should validate a Factor field', async () => {
         await browser.refresh()
         await actionsWrappers.scrollEle(gen_path.EditFactor)
         await gen_fn.Fieldvalidate(gen_path.EditFactor, gen_path.ErrormsgFactor, genip.errormsgFactor)
      }); */
   it('should delete a currency', async () => {
      await gen_fn.DeleteCurr(gen_path.Deletebtn, common.snackbar, genip.alert)
   });
   /* ********************* REGIONAL SETTING CARD ********************** */
   it('should validate a Decimal Roundoff field', async () => {
      await actionsWrappers.scrollEle(gen_path.RoundOff)
      await gen_fn.Fieldvalidate(gen_path.RoundOff, gen_path.ErrorRoundOff, genip.errormsgRoundoff)
   });
   it('should edit the decimal RoundOff field with cancel', async () => {
      await actionsWrappers.scrollEle(gen_path.RoundOff)
      await gen_fn.EditAddtionalsetting(gen_path.RoundOff, genip.roundOff, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should edit the decimal RoundOff field with save', async () => {
      await actionsWrappers.scrollEle(gen_path.RoundOff)
      await gen_fn.EditAddtionalsetting(gen_path.RoundOff, genip.roundOff, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should edit the Date & display Format with cancel', async () => {
      await actionsWrappers.scrollEle(gen_path.DateDiaplay)
      await gen_fn.EditRegionalSetting(gen_path.DateDiaplay, gen_path.DateDiaplay, genip.date, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should edit the Date & display Format with save', async () => {
      await actionsWrappers.scrollEle(gen_path.DateDiaplay)
      await gen_fn.EditRegionalSetting(gen_path.DateDiaplay, gen_path.DateDiaplay, genip.date, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should edit the Time & display Format with cancel', async () => {
      await actionsWrappers.scrollEle(gen_path.TimeDisplay)
      await gen_fn.EditRegionalSetting(gen_path.TimeDisplay, gen_path.TimeDisplay, genip.time, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should edit the Time & display Format with save', async () => {
      await actionsWrappers.scrollEle(gen_path.TimeDisplay)
      await gen_fn.EditRegionalSetting(gen_path.TimeDisplay, gen_path.TimeDisplay, genip.time, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should edit the  Time zone Format with cancel', async () => {
      await actionsWrappers.scrollEle(gen_path.TimeZone)
      await gen_fn.EditRegionalSetting(gen_path.TimeZone, gen_path.TimeZone, genip.timezone, gen_path.EditCancelbtn,
         common.snackbar, genip.alert)
   });
   it('should edit the  Time zone Format with save', async () => {
      await actionsWrappers.scrollEle(gen_path.TimeZone)
      await gen_fn.EditRegionalSetting(gen_path.TimeZone, gen_path.TimeZone, genip.timezone, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   it('should change the all the changed data to orginal', async () => {
      await browser.refresh()
      await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier, genip.orginalCompid, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
      await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId, genip.orginalMail, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
      await gen_fn.EditAddtionalsetting(gen_path.RoundOff, genip.originalroundOff, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
      await actionsWrappers.scrollEle(gen_path.DateDiaplay)
      await gen_fn.EditRegionalSetting(gen_path.DateDiaplay, gen_path.DateDiaplay, genip.orginaldate, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
      await actionsWrappers.scrollEle(gen_path.TimeDisplay)
      await gen_fn.EditRegionalSetting(gen_path.TimeDisplay, gen_path.TimeDisplay, genip.originaltime, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
      await actionsWrappers.scrollEle(gen_path.TimeZone)
      await gen_fn.EditRegionalSetting(gen_path.TimeZone, gen_path.TimeZone, genip.orginaltimezone, gen_path.EditSavebtn,
         common.snackbar, genip.alert)
   });
   // it('santy', async () => {
   //    await gen_fn.EditAddtionalsetting(gen_path.CompIdentifier,genip.compid,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   //    await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId,genip.mail,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   //    await actionsWrappers.clickAndSetvalue(gen_path.Finicalyear,genip.code)
   //    await gen_fn.Fieldvalidate(gen_path.CompIdentifier,gen_path.ErrormsgCompId,genip.errormsgCompIdenti)
   //    await gen_fn.Fieldvalidate(gen_path.DefaultMailId, gen_path.ErrormsgMailId,genip.errormsgMail)
   //    await gen_fn.EditAddtionalsetting(gen_path.DefaultMailId,genip.invalidmail,gen_path.EditSavebtn,
   //       gen_path.Invalidmailid,genip.errormsgInvalidmail)
   //    await gen_path.EditCancelbtn

   //    await gen_fn.Addcur(gen_path.Code,genip.code,gen_path.Symbol,genip.symbol,gen_path.SaveBtn)
   //    await gen_fn.AlreadyExistCur()
   //    await gen_fn.EditCurr(gen_path.EditCode,genip.editcode,gen_path.EditSavebtn)
   //    await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgCode,genip.errorCodeMsg)
   //    await gen_fn.Mandatoryfieldvalidate(gen_path.ErrormsgName,genip.errorNamemsg)
   //    await gen_fn.Fieldvalidate(gen_path.EditSymbol,gen_path.ErrormsgSymbol,genip.errormsgSymbol)
   //    await gen_fn.Fieldvalidate(gen_path.EditFactor,gen_path.ErrormsgFactor,genip.errormsgFactor)
   //    await gen_fn.DeleteCurr(gen_path.MapedDeleteBtn,common.snackbar,genip.mappedDeleteAlert)
   //    await gen_fn.DeleteCurr(gen_path.Deletebtn,common.snackbar,genip.alert)

   //    await gen_fn.Fieldvalidate(gen_path.RoundOff,gen_path.ErrorRoundOff,genip.errormsgRoundoff)
   //    await gen_fn.EditAddtionalsetting(gen_path.RoundOff,genip.roundOff,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   //    await gen_fn.EditRegionalSetting(gen_path.DateDiaplay,genip.date,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   //    await gen_fn.EditRegionalSetting(gen_path.TimeDisplay,genip.time,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   //    await gen_fn.EditRegionalSetting(gen_path.TimeZone,genip.timezone,gen_path.EditSavebtn,
   //       common.snackbar,genip.alert)
   // });

});