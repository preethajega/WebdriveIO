const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const BuIp = require("../../Inputs/settings/BuIp");
const path = require("../../PageObjects/Settings/Businessunit.page");
var BUip= require("../../Inputs/settings/BuIp");

class BusinessUnit extends Page {
 async open() {
    super.open(BuIp.BUUrl); 
  }
 async wait(){
  browser.pause(8000);
}
Addbusinessunit = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options,BUip.options);
  await actionWrapper.checkEnabledAndSetValue(await path.priority,BUip.priority);
  await actionWrapper.Click(await path.savebtn);
  if(await path.toaster.getText() === BUip.saveAlert){
    return true
  }
  }
Addbusinessunitcancel = async() =>{
    await actionWrapper.Click(path.addSymbol);
    await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options);
    await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority);
    await actionWrapper.Click(await path.cancelbtn);
}
  
Invaidpriority = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options1);
  await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority1);
  await actionWrapper.Click(await path.savebtn);
  if(await path.toaster.getText() === BUip.errorAlert){
    return true
  }
  await actionWrapper.Click(await path.cancelbtn)
  }
Exisitingpriority =async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options2);
  await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority2);
  await actionWrapper.Click(await path.savebtn)
  if(await path.errormsg.getText() === BUip.errorAlert){
    return true
  }
  await actionWrapper.Click(await path.cancelbtn)
  }
Exisitingoption  = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options);
  await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority3);
  await actionWrapper.Click(await path.savebtn);
  if(await path.toaster.getText() === BUip.errorAlert1){
    return true
  }
  await actionWrapper.Click(await path.cancelbtn)
  }
Withoutoption = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.Click(await path.options1,BUip.options1);
  await actionWrapper.checkEnabledAndSetValue(await path.priority1,BUip.priority1);
  await actionWrapper.Click(await path.savebtn);
  if (await path.errormsg.getText() === BUip.errorMsg1) {
    return true
  }
  await actionWrapper.Click(await path.cancelbtn)
  }
Withoutpriority = async() =>{
  await actionWrapper.Click(path.addSymbol);
  await actionWrapper.checkEnabledAndSetValue(await path.options1,BUip.options1);
  await actionWrapper.Click(await path.priority1);
  await actionWrapper.Click(await path.savebtn);
  if (await path.errormsg.getText() === BUip.errorMsg) {
    return true
  }
  await actionWrapper.Click(await path.cancelbtn)
  }
UpdateBU = async() =>{
  await actionWrapper.Click(path.options);
  await actionWrapper.Click(path.priority);
  await actionWrapper.Click(path.savebtn);
  if (await path.toaster.getText() === BUip.saveAlert) {
    return true
  }
  }
UpdateBUCancel = async() =>{
  await actionWrapper.Click(path.options);
  await actionWrapper.Click(path.priority);
  await actionWrapper.Click(path.cancelbtn);
}
DeleteBU = async() =>{
  await actionWrapper.Click(path.deletebtn);
  await actionWrapper.Click(await path.savebtn);
  if(await path.toaster.getText() === BUip.saveAlert){
    return true
  }
  }
DeleteMapedBU = async() =>{
  await actionWrapper.Click(path.DeleteMPDbtn);
  await actionWrapper.Click(await path.savebtn);
  if(await path.toaster.getText() === BUip.mapedalert){
    return true
  }
}
 DeleteBUCancel = async() =>{
  await actionWrapper.Click(path.DeleteMPDbtn);
  await actionWrapper.Click(await path.cancelbtn);
  }
 }
module.exports = new BusinessUnit();