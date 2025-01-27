const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const tax_path = require("../../PageObjects/Settings/tax.page");
const tax_fn = require("../../CommonFunctions/settings/tax")
var taxip = require("../../Inputs/settings/taxIP");
const common = require("../../PageObjects/Common/commonObjects");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe('Tax Page', () => {
   it("Should allow to access login into tax page ", async () => {
      await LoginPage.open();
      await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
      await actionsWrappers.urlValidation("/dashboard");
      await tax_fn.open();
      await actionsWrappers.urlValidation("/tax");
   });
   /* *************     TAX NAME CARD        ************************ */
   it('should create a new tax name with cancel', async () => {
      await tax_fn.AddTaxName(tax_path.CancelBtn)
   });
   it('should create a new tax name with save', async () => {
      await tax_fn.AddTaxName(tax_path.SavelBtn)
   });
   it('should edit the Tax Name card field with cancel', async () => {
      await tax_fn.EditTaxNamefield(tax_path.CancelBtn)
   });
   it('should edit the Tax Name card field with save', async () => {
      await tax_fn.EditTaxNamefield(tax_path.SavelBtn)
   });
   it('should validate a Tax Name & Rate field in TaxName card', async () => {
      await tax_fn.FieldValid(tax_path.ErrTax_exem_prod, taxip.errmsg)
   });
   it('should delete a created Tax name with cancel', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.CancelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should delete a created Tax name with save', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should try to delete a mapeed Tax', async () => {
      await tax_fn.MapedTaxDelete(common.snackbar, taxip.taxNameAlert)
   });
   it('should validate a field without entering any values in Tax Name Card', async () => {
      await tax_fn.emptyfieldValid(common.snackbar, taxip.taxNameEmpAlert)
   });
   it('should create a new tax name with save', async () => {
      await tax_fn.AddTaxName(tax_path.SavelBtn)
   });
   /* *************     TAX GROUP CARD        ************************ */

   it('should add a new Tax group with cancel', async () => {
      await browser.refresh()
      await actionsWrappers.Click(tax_path.TaxGrpTab)
      await tax_fn.AddTaxGrp(tax_path.CancelBtn)
   });
   it('should add a new Tax group with save', async () => {
      await tax_fn.AddTaxGrp(tax_path.SavelBtn)
   });
   it('should edit the tax group name field', async () => {
      await tax_fn.EditTaxGrpfield()
   });
   it('should validate a Tax group name filed in TaxGroup Card', async () => {
      await tax_fn.TaxGrpFieldValid(tax_path.ErrTaxgrpNam, taxip.errmsgTaxgrp)
   });
   it('should validate a Tax  name filed in TaxGroup Card', async () => {
      await tax_fn.TaxGrpFieldValid(tax_path.ErrTaxNam, taxip.errmsgTaxNam)
   });
   it('should validate a compound tax field', async () => {
      await tax_fn.compoundTaxFieldValid()
   });
   it('should delete a creted tax group with cancel', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.CancelBtn, common.snackbar, taxip.Taxgrpalert)
   });
   it('should delete a creted tax group with save', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.Taxgrpalert)
   });
   it('should try to delete a mapeed Tax group', async () => {
      await tax_fn.MapedTaxDelete(common.snackbar, taxip.taxGrpAlert)
   });
   it('should add a new Tax group with save', async () => {
      await tax_fn.AddTaxGrp(tax_path.SavelBtn)
   });
   /* *************     PRODUCT TAX CODE CARD        ************************ */
   it('should create a new Product Tax Code with cancel', async () => {
      await browser.refresh()
      await actionsWrappers.Click(tax_path.ProdTaxCodeTab)
      await tax_fn.AddProTaxCode(tax_path.CancelBtn)
   });
   it('should create a new Product Tax Code with save', async () => {
      await tax_fn.AddProTaxCode(tax_path.SavelBtn)
   });
   it('should validate a Product Tax Code Field in ProductTax Code Card', async () => {
      await browser.pause(1000)
      await tax_fn.ProTaxCodefieldvalid()
   });
   it('should validate a Description Field in ProductTax Code Card', async () => {
      await tax_fn.ProTaxCodefieldvalid()
   });
   it('should validate a Between States Field in ProductTax Code Card', async () => {
      await tax_fn.ProTaxCodefieldvalid()
   });
   it('should validate a within States Field in ProductTax Code Card', async () => {
      await tax_fn.ProTaxCodefieldvalid()
   });
   it('should validate a field without entering any values in product tax code card', async () => {
      await tax_fn.emptyfieldValid(common.snackbar, taxip.protaxcodeEmpAlert)
   });
   it('should try to delete a mapeed Product Tax Code', async () => {
      await tax_fn.MapedTaxDelete(common.snackbar, taxip.proTaxcodeAlert)
      await browser.pause(3000)
   });
   it('should delete a creted product tax code with cancel', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.CancelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should delete a creted product tax code with save', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should create a new Product Tax Code with save', async () => {
      await tax_fn.AddProTaxCode(tax_path.SavelBtn)
   });
   /* *****************    TAX EXEMPTION CARD   ************************ */
   it('should create a new Tax Excemption & Excemption for Customer button with cancel ', async () => {
      await tax_fn.AddTaxExcem(tax_path.ExempName,taxip.taxexcemption2,tax_path.CustmerRadioBtn, tax_path.CancelBtn)
   });
   it('should create a new Tax Excemption & Excemption for Customer button with save ', async () => {
      await tax_fn.AddTaxExcem(tax_path.ExempName,taxip.taxexcemption,tax_path.CustmerRadioBtn, tax_path.SavelBtn)
   });
   it('should validate a field without entering any values in product tax code card', async () => {
      await tax_fn.emptyfieldValid(common.snackbar, taxip.taxExcmEmpAlert)
   });
   it('should delete a creted product tax code with save', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should create a new Tax Excemption & Excemption for Item button with cancel ', async () => {
      await tax_fn.AddTaxExcem(tax_path.ExempName,taxip.taxexcemption,tax_path.ItemRadioBtn, tax_path.CancelBtn)
   });
   it('should create a new Tax Excemption & Excemption for Item button with save ', async () => {
      await tax_fn.AddTaxExcem(tax_path.ExempName,taxip.taxexcemption2,tax_path.ItemRadioBtn, tax_path.SavelBtn)
   });
   it('should try to delete a mapeed Product Tax Code', async () => {
      await tax_fn.MapedTaxDelete(common.snackbar, taxip.exemAlert)
      await browser.pause(3000)

   });
   it('should delete a creted product tax code with cancel', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.CancelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should delete a creted product tax code with save', async () => {
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
   });
   it('should validatdate the Tax Excemption fields',async () => {
      await tax_fn.TaxExcemfieldvalid()
   });
   it('should Delete a created Taxes',async() => {
      await ActionsWrappers.Click(tax_path.ProdTaxCodeTab)
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
      await ActionsWrappers.Click(tax_path.TaxGrpTab)
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.Taxgrpalert)
      await ActionsWrappers.Click(tax_path.TaxNameTab)
      await tax_fn.DeleteTax(tax_path.DeletlastTax, tax_path.SavelBtn, common.snackbar, taxip.saveAlert)
   });
   // it('santy', async() => {
   //    await tax_fn.AddTaxName(tax_path.SavelBtn)
   //    await tax_fn.EditTaxNamefield(tax_path.SavelBtn)
   //    await tax_fn.FieldValid(tax_path.ErrTax_exem_prod,taxip.errmsg)
   //    await tax_fn.DeleteTax(tax_path.DeletlastTax,tax_path.SavelBtn,common.snackbar,taxip.saveAlert)
   //    await tax_fn.MapedTaxDelete(common.snackbar,taxip.taxNameAlert)
   //    await tax_fn.emptyfieldValid(common.snackbar,taxip.taxNameEmpAlert)
   //    await tax_fn.AddTaxName(tax_path.SavelBtn)



   // });

});