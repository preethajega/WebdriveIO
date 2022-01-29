const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const genip = require("../../Inputs/settings/GeneralIP");
const path = require("../../PageObjects/Settings/General.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class General extends Page {

    async open() {
        super.open(genip.genUrl); 
    }
    Addcur = async (ele,input,btn) =>{
        await actionWrapper.Click(path.AddCurBtn)
        await actionWrapper.clickAndSetvalue(ele,input)
        await actionWrapper.Click(path.Name)
        await actionWrapper.clearValue_selectDropdownvalue(path.Format,genip.format)
        await actionWrapper.clickAndSetvalue(path.Symbol,genip.symbol)
        await path.Symbol.keys("\uE007");
        await actionWrapper.clearAndsetValue(path.Factor,genip.factor)
        await actionWrapper.Click(btn)
    }
    AlreadyExistCur = async()=>{
        await actionWrapper.Click(path.AddCurBtn)
        await actionWrapper.clickAndSetvalue(path.Code,genip.code)
        await actionWrapper.Click(path.Name)
        if(await common.snackbar.isDisplayed()){
           assert.strictEqual(
          await common.snackbar.getText(),genip.alreadyExisitsAlert);
         } 
        await actionWrapper.Click(path.CancelBtn)
   }
   DeleteCurr = async(ele,errormsg,errorip) =>{
       await actionWrapper.Click(ele)
       await actionWrapper.snackBarValidate(errormsg,errorip)
   }
   EditCurr = async(ele,input,btn) =>{
       await actionWrapper.clearAndsetValue(ele,input)
       await actionWrapper.clearValue_selectDropdownvalue(path.EditSymbol,genip.editsymbol)
       await actionWrapper.clearValue_selectDropdownvalue(path.EditFormat,genip.editformat)
       await actionWrapper.clickAndSetvalue(path.EditFactor,genip.editfactor)
       await actionWrapper.Click(btn)
       await actionWrapper.snackBarValidate(common.snackbar,genip.alert)
   }
   Mandatoryfieldvalidate = async(errormsg,errorip) =>{
    await actionWrapper.Click(path.AddCurBtn)
    await actionWrapper.Click(path.SaveBtn)
    await actionWrapper.snackBarValidate(errormsg,errorip)
    await actionWrapper.Click(path.CancelBtn)

   }
    Fieldvalidate = async(ele,errormsg,errorip) =>{
        await actionWrapper.clearValues(ele)
        await actionWrapper.Click(path.EditSavebtn)
        await actionWrapper.snackBarValidate(errormsg,errorip)
        await actionWrapper.Click(path.EditCancelbtn)
    }
    EditAddtionalsetting = async(ele,input,btn,msg,input1) =>{
        await actionWrapper.clearAndsetValue(ele,input)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(msg,input1)
    }
    EditRegionalSetting = async(ele,input,btn,msg,input1) => {
        await actionWrapper.clearValue_selectDropdownvalue(ele,input)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(msg,input1)

    }


}

module.exports = new General();