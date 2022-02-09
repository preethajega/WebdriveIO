const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const path = require("../../PageObjects/Settings/Businessunit.page");
var BUip= require("../../Inputs/settings/BuIp");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class BusinessUnit extends Page {

  async open() {
    super.open(BUip.BUUrl); 
  }
  async wait(){
  browser.pause(8000);
}

  AddBU = async(opti,optiIp,code,codeIp,pri,priorIp,btn,snakpath,snakip) =>{
    await actionWrapper.Click(path.BUTab)
    await actionWrapper.Click(path.addSymbol);
    await actionWrapper.clickAndSetvalue(opti,optiIp);
    await actionWrapper.clickAndSetvalue(code,codeIp);
    await actionWrapper.clickAndSetvalue(pri,priorIp);
    await actionWrapper.Click(btn);
    await actionWrapper.snackBarValidate(snakpath,snakip)
  } 
  AddDiv_Chan =async(tab,NamPath,Namip,CodePath,codeip,btn,snakpath,snakip) =>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(path.AddBtn)
    await actionWrapper.clickAndSetvalue(NamPath,Namip)
    await browser.pause(1000)
    await actionWrapper.clickAndSetvalue(CodePath,codeip)
    await actionWrapper.Click(btn)
    await actionWrapper.snackBarValidate(snakpath,snakip)
  } 
  Div_ChanFieldValid = async(tab,snakpath,snakip) =>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(path.AddBtn)
    await actionWrapper.Click(path.savebtn)
    await actionWrapper.snackBarValidate(snakpath,snakip)
    await actionWrapper.Click(path.cancelbtn)

  }
  BuFieldValidate = async(Fpath,ip,msgAlert,ipAlert) =>{
    await actionWrapper.Click(path.addSymbol)
    await actionWrapper.clickAndSetvalue(Fpath,ip)
    await actionWrapper.Click(path.savebtn)
    await actionWrapper.snackBarValidate(msgAlert,ipAlert)
    await actionWrapper.Click(path.cancelbtn)
    await actionWrapper.Click(path.delelastBU)
  }
  EmptyAlert = async(tab,btn) =>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(btn)
    await actionWrapper.Click(btn)
    await actionWrapper.snackBarValidate(common.snackbar,BUip.emptyAlert)
    await actionWrapper.Click(path.cancelbtn)
  }
  EmptyAlertBU = async(tab,btn) =>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(btn)
    await actionWrapper.Click(btn)
    await actionWrapper.snackBarValidate(common.snackbar,BUip.emptyAlert)
  }


  UpdateBU = async(NamPath,Namip,CodePath,codeip,priopath,prioIp,btn) =>{
    await actionWrapper.clearAndsetValue(NamPath,Namip);
    await actionWrapper.clearAndsetValue(CodePath,codeip);
    await actionWrapper.clearAndsetValue(priopath,prioIp);
    await actionWrapper.Click(btn);
    await actionWrapper.snackBarValidate(common.snackbar,BUip.saveAlert)
  }
  DeleteBU_div_cha = async(adbtn,btn,btn1,msgAlert,ipAlert) =>{
    await actionWrapper.Click(adbtn);
    await actionWrapper.Click(btn);
    await actionWrapper.Click(btn1);
    await actionWrapper.snackBarValidate(msgAlert,ipAlert)
  }
  UpdateDiv_Cha = async(NamPath,Namip,CodePath,codeip,btn) =>{
    await actionWrapper.clearAndsetValue(NamPath,Namip);
    await actionWrapper.clearAndsetValue(CodePath,codeip);
    await actionWrapper.Click(btn);
    await actionWrapper.snackBarValidate(common.snackbar,BUip.saveAlert)
  }

  AlredyExitVal =async(tab,btn,elepath,eleip,snapkpath,snakip)=>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(btn)
    await actionWrapper.clickAndSetvalue(elepath,eleip)
    await actionWrapper.Click(path.savebtn)
    await actionWrapper.snackBarValidate(snapkpath,snakip)
    await browser.pause(1000)
    await actionWrapper.Click(path.cancelbtn)
  }
  AlredyExitPrioVal =async(tab,btn,elepath,eleip,snapkpath,snakip)=>{
    await actionWrapper.Click(tab)
    await actionWrapper.Click(btn)
    await actionWrapper.clickAndSetvalue(elepath,eleip)
    await actionWrapper.Click(path.savebtn)
    await actionWrapper.snackBarValidate(snapkpath,snakip)
  }
}

module.exports = new BusinessUnit();