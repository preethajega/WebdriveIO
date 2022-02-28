const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const taxip = require("../../Inputs/settings/taxIP");
const path = require("../../PageObjects/Settings/tax.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Tax extends Page {

    async open() {
        super.open(taxip.taxUrl); 
    }
    AddTaxName = async(btn) =>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(path.TaxName,taxip.taxName)
        await actionWrapper.clickAndSetvalue(path.TaxRate,taxip.rate)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.saveAlert)
    }
    DeleteTax = async(ele,btn,snakpath,snakip) =>{
        await browser.pause(2000)
        await actionWrapper.Click(ele)
        await browser.pause(1000)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    emptyfieldValid = async(snakpath,snakip)=>{
        await browser.pause(2000)
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.Click(path.DeletlastTax)
    }
    FieldValid = async(snakpath,snakip) =>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(path.TaxRate,taxip.rate)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.clearValues(path.TaxRate)
        await actionWrapper.clickAndSetvalue(path.TaxName,taxip.taxName)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.Click(path.DeletlastTax)
    }
    EditTaxNamefield = async(btn) =>{
        await actionWrapper.clearAndsetValue(path.TaxName,taxip.taxname2)
        await actionWrapper.clearAndsetValue(path.TaxRate,taxip.rate2)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.saveAlert)
    }
    MapedTaxDelete = async(snakpath,snakip) =>{
        await browser.pause(2000)
        await actionWrapper.Click(path.DeleteFirstTax)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    AddTaxGrp = async(btn)=>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(path.TaxgrpName,taxip.taxGrpName)
        await actionWrapper.clickSetvalueAndSelectoption(path.TaxNameGrp,taxip.taxName)
        await actionWrapper.clickSetvalueAndSelectoption(path.TaxNameGrp,taxip.taxname2)
        await actionWrapper.Click(path.TaxNameGrp)
        await actionWrapper.clickSetvalueAndSelectoption(path.CompoundTax,taxip.taxName)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.Taxgrpalert)
    }
    TaxGrpFieldValid = async(snakpath,snakip) =>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.Click(path.CancelBtn)
    }
    compoundTaxFieldValid = async()=>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.Click(path.CompoundTax)
        await actionWrapper.snackBarValidate(path.ErrCompTax,taxip.errmsgComptax)
    }
    EditTaxGrpfield = async() =>{
        await actionWrapper.Click(path.EditTaxGrp)
        await actionWrapper.clearAndsetValue(path.TaxgrpName,taxip.taxGrpName2)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.Taxgrpalert)
    }
    AddProTaxCode = async(btn) =>{
        await browser.pause(2000)
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(path.ProTaxCode,taxip.proTaxcode)
        await actionWrapper.clickAndSetvalue(path.ProDescrp,taxip.prodescription)
        await actionWrapper.clickSetvalueAndSelectoption(path.ProBtwState,taxip.taxName)
        await actionWrapper.clickSetvalueAndSelectoption(path.ProwithinState,taxip.taxname)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.saveAlert)
    }
    ProTaxCodefieldvalid = async()=>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.Click(path.ProTaxCode)
        await actionWrapper.Click(path.ProDescrp)
        await actionWrapper.Click(path.ProBtwState)
        await actionWrapper.Click(path.ProwithinState)
        await actionWrapper.Click(path.ProTaxCode)
        await actionWrapper.snackBarValidate(path.ErrTax_exem_prod,taxip.errmsg)
        await actionWrapper.Click(path.DeletlastTax)
    }
    AddTaxExcem = async(excempath,excemip,ele,btn)=>{
        await browser.refresh()
        await actionWrapper.Click(path.TaxExcemTab)
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(excempath,excemip)
        await actionWrapper.Click(ele)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,taxip.saveAlert)
    }
    TaxExcemfieldvalid = async()=>{
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.Click(path.CustmerRadioBtn)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(path.ErrTax_exem_prod,taxip.errmsg)
        await actionWrapper.Click(path.DeletlastTax)
        await actionWrapper.Click(path.Addbtn)
        await actionWrapper.clickAndSetvalue(path.ExempName,taxip.taxexcemption)
        await actionWrapper.Click(path.SavelBtn)
        await actionWrapper.snackBarValidate(path.ErrTax_exem_prod,taxip.errmsg)
        await actionWrapper.Click(path.DeletlastTax)
    }
    
}
module.exports = new Tax();