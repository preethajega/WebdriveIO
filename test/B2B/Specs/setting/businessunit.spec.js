const assert = require("assert");
const path = require("path");
const bu_path = require("../../PageObjects/Settings/Businessunit.page");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const BU_fn= require("../../CommonFunctions/settings/Bu");
var BUip= require("../../Inputs/settings/BuIp");
const common = require("../../PageObjects/Common/commonObjects");



describe("Division & BU Page", () => {
  it("Should allow to access login ",async () => {
    await  LoginPage.open();
    await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
    await  actionsWrappers.urlValidation("/dashboard");
    await  BU_fn.open();
    await  actionsWrappers.urlValidation("/division-bu");
  })
/* ***************  DIVISION CARD   *************************/
 
//   it('should add a new Division with cancel',async () => {
//     await browser.refresh()
//     await BU_fn.AddDiv_Chan(bu_path.DivisionTab,bu_path.NameDiv_Cha,BUip.divName,bu_path.codeDiv_Cha,BUip.divCode,
//       bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
//   });
//   it('should add a new Division with save',async () => {
//     await browser.refresh()
//     await BU_fn.AddDiv_Chan(bu_path.DivisionTab,bu_path.NameDiv_Cha,BUip.divName,bu_path.codeDiv_Cha,BUip.divCode,
//       bu_path.savebtn,common.snackbar,BUip.saveAlert)
//   });
//   it('should not alow a user to add another division without entering any details',async () => {
//     await BU_fn.EmptyAlert(bu_path.DivisionTab,bu_path.AddBtn)
//   });
//   it('should update the created Division with cancel',async () => {
//     await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.divName1,bu_path.codeDiv_Cha,BUip.divCode2,bu_path.cancelbtn)
//   });
//   it('should update the created Division with save',async () => {
//     await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.divName1,bu_path.codeDiv_Cha,BUip.divCode2,bu_path.savebtn)
//   });
//   it('should try to delete the mapped Division with save',async () => {
//     await BU_fn.DeleteBU_div_cha(bu_path.DivisionTab,bu_path.delefirstDiv_Cha,bu_path.savebtn,common.snackbar,BUip.divMapeAlert)
//   });
//   it('should not allow a user to enter the same Division Name value as a input',async () => {
//     await browser.refresh()
//     await BU_fn.AlredyExitVal(bu_path.DivisionTab,bu_path.AddBtn,bu_path.NameDiv_Cha,BUip.divName1,
//       common.snackbar,BUip.divNameExitAlert)
//   });
//   it('should not allow a user to enter the same code value as a input',async () => {
//   await browser.refresh()
//     await BU_fn.AlredyExitVal(bu_path.DivisionTab,bu_path.AddBtn,bu_path.codeDiv_Cha,BUip.divCode2,
//       common.snackbar,BUip.divCodeExitAlert)
//   });
//   it('should validate a division name field',async () => {
//     await browser.pause(1000)
//     await BU_fn.Div_ChanFieldValid(bu_path.DivisionTab,bu_path.NameErrmsg,BUip.errorMsg1)
//   });
//   it('should validate a Code field',async () => {
//     await BU_fn.Div_ChanFieldValid(bu_path.DivisionTab,bu_path.codeErrMag,BUip.errorMsg)
//   });
//   it('should delete a crated Division with cancel',async () => {
//     await browser.pause(1000)
//     await BU_fn.DeleteBU_div_cha(bu_path.DivisionTab,bu_path.delelastDiv_Cha,bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
//   });
//   it('should delete a crated Division with save',async () => {
//     await BU_fn.DeleteBU_div_cha(bu_path.DivisionTab,bu_path.delelastDiv_Cha,bu_path.savebtn,common.snackbar,BUip.saveAlert)
//   });
  

// /* ***************  BUSINESS UNIT CARD   ************************* */   


// it('should add a new BU with cancel',async () => {
//   await browser.refresh()
//   await BU_fn.AddBU(bu_path.Name,BUip.buName,bu_path.Code,BUip.buCode,bu_path.priority,BUip.priority,
//     bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
// });
// it('should add a new BU with save',async () => {
//   await browser.refresh()
//   await BU_fn.AddBU(bu_path.Name,BUip.buName,bu_path.Code,BUip.buCode,bu_path.priority,BUip.priority,
//     bu_path.savebtn,common.snackbar,BUip.saveAlert)
// });
// it('should not alow a user to add another BU without entering any details',async () => {
//   await BU_fn.EmptyAlertBU(bu_path.BUTab,bu_path.addSymbol)
// });
// it('should try to delete the mapped BU with cancel',async () => {
//   await browser.refresh()
//   await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delefirstBU,bu_path.cancelbtn,common.snackbar,BUip.buMapAlert)
// });
// it('should try to delete the mapped BU with save',async () => {
//   await browser.refresh()
//   await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delefirstBU,bu_path.savebtn,common.snackbar,BUip.buMapAlert)
// });
// it('should not allow a user to enter the same BU Name value as a input',async () => {
//   await browser.refresh()
//   await BU_fn.AlredyExitVal(bu_path.BUTab,bu_path.addSymbol,bu_path.Name,BUip.buName,
//     common.snackbar,BUip.buNameExitAlert)
// });
// it('should not allow a user to enter the BU code value as a input',async () => {
//   await browser.refresh()
//   await BU_fn.AlredyExitVal(bu_path.BUTab,bu_path.addSymbol,bu_path.Code,BUip.buCode,
//     common.snackbar,BUip.buCodeExitAlert)
// });
// it('should not allow a user to enter the BU Priority value as a input',async () => {
//   await browser.refresh()
//   await BU_fn.AlredyExitPrioVal(bu_path.BUTab,bu_path.addSymbol,bu_path.priority,BUip.priority,
//     common.snackbar,BUip.priAlredExitAlert)
// });
// it('should update the created BU with cancel',async () => {
//   await browser.refresh()
//   await BU_fn.UpdateBU(bu_path.Name,BUip.buName1,bu_path.Code,BUip.buCode2,
//     bu_path.priority,BUip.priority1,bu_path.cancelbtn)
// });
// it('should update the created BU with save',async () => {
//   await browser.refresh()
//   await BU_fn.UpdateBU(bu_path.Name,BUip.buName1,bu_path.Code,BUip.buCode2,
//     bu_path.priority,BUip.priority1,bu_path.savebtn)
// });
// it('should validate a BU name field',async () => {
//   await browser.refresh()
//   await BU_fn.BuFieldValidate(bu_path.Code,BUip.buCode3,bu_path.NameErrmsg,BUip.errorMsg1)
// });
// it('should validate a BU Priority field',async () => {
//   await browser.refresh()
//   await BU_fn.BuFieldValidate(bu_path.Code,BUip.buCode3,bu_path.ProityErrMag,BUip.errorMsg)
// });
// it('should delete a crated BU with cancel',async () => {
//   await browser.refresh()
//   await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delelastBU,bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
// });
// it('should delete a crated BU with save',async () => {
//   await browser.refresh()
//   await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delelastBU,bu_path.savebtn,common.snackbar,BUip.saveAlert)
// });


// /* ***************  CHANNEL CARD   *************************  */   

// it('should add a new Channel with cancel',async () => {
//   await browser.refresh()
//   await BU_fn.AddDiv_Chan(bu_path.ChannelTab,bu_path.NameDiv_Cha,BUip.chanName,bu_path.codeDiv_Cha,BUip.chanCode,
//     bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
// });
// it('should add a new Channel with save',async () => {
//   await browser.refresh()
//   await BU_fn.AddDiv_Chan(bu_path.ChannelTab,bu_path.NameDiv_Cha,BUip.chanName,bu_path.codeDiv_Cha,BUip.chanCode,
//     bu_path.savebtn,common.snackbar,BUip.saveAlert)
// });
// it('should not alow a user to add another Channel without entering any details',async () => {
//   await BU_fn.EmptyAlert(bu_path.ChannelTab,bu_path.AddBtn)
// });
// it('should update the created Division with cancel',async () => {
//   await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.chaname1,bu_path.codeDiv_Cha,BUip.chanCode1,bu_path.cancelbtn)
// });
// it('should update the created Division with save',async () => {
//   await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.chaname1,bu_path.codeDiv_Cha,BUip.chanCode1,bu_path.savebtn)
// });
// it('should try to delete the mapped Division with save',async () => {
//   await BU_fn.DeleteBU_div_cha(bu_path.ChannelTab,bu_path.delefirstDiv_Cha,bu_path.savebtn,
//     common.snackbar,BUip.channelMapAlert)
// });
// it('should not allow a user to enter the same Division Name value as a input',async () => {
//   await browser.refresh()
//   await BU_fn.AlredyExitVal(bu_path.ChannelTab,bu_path.AddBtn,bu_path.NameDiv_Cha,BUip.chaname1,
//     common.snackbar,BUip.channelNameExitAlert)
// });
// it('should not allow a user to enter the same code value as a input',async () => {
//   await browser.refresh()
//   await BU_fn.AlredyExitVal(bu_path.ChannelTab,bu_path.AddBtn,bu_path.codeDiv_Cha,BUip.chanCode1,
//     common.snackbar,BUip.channelCodeExitAlert)
// });
// it('should validate a division name field',async () => {
//   await browser.pause(1000)
//   await BU_fn.Div_ChanFieldValid(bu_path.ChannelTab,bu_path.NameErrmsg,BUip.errorMsg1)
// });
// it('should validate a Code field',async () => {
//   await BU_fn.Div_ChanFieldValid(bu_path.ChannelTab,bu_path.codeErrMag,BUip.errorMsg)
// });
// it('should delete a crated Division with cancel',async () => {
//   await browser.pause(1000)
//   await BU_fn.DeleteBU_div_cha(bu_path.ChannelTab,bu_path.delelastDiv_Cha,bu_path.cancelbtn,common.snackbar,BUip.saveAlert)
// });
// it('should delete a crated Division with save',async () => {
//   await BU_fn.DeleteBU_div_cha(bu_path.ChannelTab,bu_path.delelastDiv_Cha,bu_path.savebtn,common.snackbar,BUip.saveAlert)
// });


  it('santy',async () => {
    await browser.refresh()
    await BU_fn.AddDiv_Chan(bu_path.DivisionTab,bu_path.NameDiv_Cha,BUip.divName,bu_path.codeDiv_Cha,BUip.divCode,
      bu_path.savebtn,common.snackbar,BUip.saveAlert)
    await BU_fn.EmptyAlert(bu_path.DivisionTab,bu_path.AddBtn)
    await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.divName1,bu_path.codeDiv_Cha,BUip.divCode2,bu_path.savebtn)
    await BU_fn.DeleteBU_div_cha(bu_path.DivisionTab,bu_path.delefirstDiv_Cha,bu_path.savebtn,common.snackbar,BUip.divMapeAlert)
    await browser.refresh()
    await BU_fn.AlredyExitVal(bu_path.DivisionTab,bu_path.AddBtn,bu_path.NameDiv_Cha,BUip.divName1,
      common.snackbar,BUip.divNameExitAlert)
    await browser.refresh()
    await BU_fn.AlredyExitVal(bu_path.DivisionTab,bu_path.AddBtn,bu_path.codeDiv_Cha,BUip.divCode2,
      common.snackbar,BUip.divCodeExitAlert)
    await BU_fn.Div_ChanFieldValid(bu_path.DivisionTab,bu_path.NameErrmsg,BUip.errorMsg1)
    await BU_fn.Div_ChanFieldValid(bu_path.DivisionTab,bu_path.codeErrMag,BUip.errorMsg)
    await BU_fn.DeleteBU_div_cha(bu_path.DivisionTab,bu_path.delelastDiv_Cha,bu_path.savebtn,common.snackbar,BUip.saveAlert)

    await browser.refresh()
    await BU_fn.AddBU(bu_path.Name,BUip.buName,bu_path.Code,BUip.buCode,bu_path.priority,BUip.priority,
      bu_path.savebtn,common.snackbar,BUip.saveAlert)
    await BU_fn.EmptyAlertBU(bu_path.BUTab,bu_path.addSymbol)
    await browser.refresh()
    await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delefirstBU,bu_path.savebtn,common.snackbar,BUip.buMapAlert)
    await browser.refresh()
    await BU_fn.AlredyExitVal(bu_path.BUTab,bu_path.addSymbol,bu_path.Name,BUip.buName,
      common.snackbar,BUip.buNameExitAlert)
    await browser.refresh()
    await BU_fn.AlredyExitVal(bu_path.BUTab,bu_path.addSymbol,bu_path.Code,BUip.buCode,
      common.snackbar,BUip.buCodeExitAlert)
    await browser.refresh()
    await BU_fn.AlredyExitPrioVal(bu_path.BUTab,bu_path.addSymbol,bu_path.priority,BUip.priority,
      common.snackbar,BUip.priAlredExitAlert)
    await browser.refresh()
    await BU_fn.UpdateBU(bu_path.Name,BUip.buName1,bu_path.Code,BUip.buCode2,
      bu_path.priority,BUip.priority1,bu_path.savebtn)
    await browser.refresh()
    await BU_fn.BuFieldValidate(bu_path.Code,BUip.buCode3,bu_path.ProityErrMag,BUip.errorMsg)
    await browser.refresh()
    await BU_fn.BuFieldValidate(bu_path.Code,BUip.buCode3,bu_path.ProityErrMag,BUip.errorMsg)
    await browser.refresh()
    await BU_fn.DeleteBU_div_cha(bu_path.BUTab,bu_path.delelastBU,bu_path.savebtn,common.snackbar,BUip.saveAlert)
  
    await browser.refresh()
    await BU_fn.AddDiv_Chan(bu_path.ChannelTab,bu_path.NameDiv_Cha,BUip.chanName,bu_path.codeDiv_Cha,BUip.chanCode,
      bu_path.savebtn,common.snackbar,BUip.saveAlert)
    await browser.refresh()
    await BU_fn.EmptyAlert(bu_path.ChannelTab,bu_path.AddBtn)
    await BU_fn.UpdateDiv_Cha(bu_path.NameDiv_Cha,BUip.chaname1,bu_path.codeDiv_Cha,BUip.chanCode1,bu_path.savebtn)
    await BU_fn.DeleteBU_div_cha(bu_path.ChannelTab,bu_path.delefirstDiv_Cha,bu_path.savebtn,
      common.snackbar,BUip.channelMapAlert)
    await browser.refresh()
    await BU_fn.AlredyExitVal(bu_path.ChannelTab,bu_path.AddBtn,bu_path.NameDiv_Cha,BUip.chaname1,
      common.snackbar,BUip.channelNameExitAlert)
    await BU_fn.AlredyExitVal(bu_path.ChannelTab,bu_path.AddBtn,bu_path.codeDiv_Cha,BUip.chanCode1,
      common.snackbar,BUip.channelCodeExitAlert)
    await BU_fn.Div_ChanFieldValid(bu_path.ChannelTab,bu_path.codeErrMag,BUip.errorMsg)
    await BU_fn.Div_ChanFieldValid(bu_path.ChannelTab,bu_path.NameErrmsg,BUip.errorMsg1)
    await BU_fn.DeleteBU_div_cha(bu_path.ChannelTab,bu_path.delelastDiv_Cha,bu_path.savebtn,common.snackbar,BUip.saveAlert)

  });
  
})