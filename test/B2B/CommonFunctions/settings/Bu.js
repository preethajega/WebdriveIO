const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const BuIp = require("../../Inputs/settings/BuIp");
const path = require("../../PageObjects/Settings/Businessunit.page");
var BUip= require("../../Inputs/settings/BuIp");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class BusinessUnit extends Page {
 async open() {
    super.open(BuIp.BUUrl); 
  }
 async wait(){
  browser.pause(8000);
}

Addbusinessunit = async(opti,optiIp,pri,priorIp,btn) =>{
  await actionWrapper.Click(path.BUTab)
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(opti,optiIp);
  await actionWrapper.checkEnabledAndSetValue(pri,priorIp);
  await actionWrapper.Click(btn);
  await actionWrapper.snackBarValidate(common.snackbar,BUip.saveAlert)
  }
// Addbusinessunitcancel = async() =>{
//     await actionWrapper.Click(path.addSymbol);
//     await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options);
//     await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority);
//     await actionWrapper.Click(await path.cancelbtn);
// }
  
 FieldValidate = async(opti,optiIp,pri,priorIp) =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(opti,optiIp);
  await actionWrapper.checkEnabledAndSetValue(pri,priorIp);
  await actionWrapper.Click(await path.savebtn);
  await actionWrapper.snackBarValidate(msgAlert,ipAlert)
  await actionWrapper.Click(await path.cancelbtn)
  }
// Exisitingpriority =async() =>{
//   await actionWrapper.Click(path.addSymbol);
//   await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options2);
//   await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority2);
//   await actionWrapper.Click(await path.savebtn)
//   if(await path.errormsg.getText() === BUip.errorAlert){
//     return true
//   }
//   await actionWrapper.Click(await path.cancelbtn)
//   }
// Exisitingoption  = async() =>{
//   await actionWrapper.Click(path.addSymbol);
//   await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options);
//   await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority3);
//   await actionWrapper.Click(await path.savebtn);
//   if(await path.snackbar.getText() === BUip.errorAlert1){
//     return true
//   }
//   await actionWrapper.Click(await path.cancelbtn)
//   }
Withoutoption = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.Click(path.options1,BUip.options1);
  await actionWrapper.checkEnabledAndSetValue(path.priority1,BUip.priority1);
  await actionWrapper.Click(await path.savebtn);
  await actionWrapper.snackBarValidate(path.errormsg,BUip.errorMsg1)
  await actionWrapper.Click(await path.cancelbtn)
  }
Withoutpriority = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options1);
  await actionWrapper.Click(await path.priority1);
  await actionWrapper.Click(await path.savebtn);
  await actionWrapper.snackBarValidate(path.errormsg,BUip.errorMsg)
  await actionWrapper.Click(await path.cancelbtn)
  }
UpdateBU = async(btn) =>{
  await actionWrapper.clearAndsetValue(path.options,BUip.updateop);
  await actionWrapper.clearAndsetValue(path.priority,BUip.updatepri);
  await actionWrapper.Click(btn);
  await actionWrapper.snackBarValidate(common.snackbar,BUip.saveAlert)
}

DeleteBU = async(btn,btn1,msgAlert,ipAlert) =>{
  await actionWrapper.Click(btn);
  await actionWrapper.Click(btn1);
  await actionWrapper.snackBarValidate(msgAlert,ipAlert)
  }
// DeleteMapedBU = async() =>{
//   await actionWrapper.Click(path.DeleteMPDbtn);
//   await actionWrapper.Click(await path.savebtn);
//   if(await path.snackbar.getText() === BUip.mapedalert){
//     return true
//   }
// }
//  DeleteBUCancel = async() =>{
//   await actionWrapper.Click(path.DeleteMPDbtn);
//   await actionWrapper.Click(await path.cancelbtn);
//   }
}

module.exports = new BusinessUnit();