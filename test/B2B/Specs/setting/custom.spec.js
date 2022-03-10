const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const custom_path = require("../../PageObjects/Settings/custom.page");
const custom_fn = require("../../CommonFunctions/settings/custom")
var customip = require("../../Inputs/settings/customIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Customization Page', () => {
   it("Should allow to access login into Customization page ", async () => {
      await LoginPage.open();
      await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
      await actionsWrappers.urlValidation("/dashboard");
      await custom_fn.open();
      await actionsWrappers.urlValidation("/customization");
   });
   it('should change the Branch Label Text with save', async () => {
      await actionsWrappers.clickAndSetvalue(custom_path.BranchLabel, customip.branch)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.BranchText, customip.branchText, custom_path.BranchLabel)
   });
   it('should change the Address Line Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.AddressLabel, customip.address)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.AddressText, customip.addressText, custom_path.AddressLabel)
   });
   it('should change the Locality Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.LocalityLabel, customip.locality)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.LocalityText, customip.localityText, custom_path.LocalityLabel)
   });

   it('should change the city Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.CityLabel, customip.city)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.CityText, customip.cityText, custom_path.CityLabel)
   });

   it('should change the District Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.DistrLabel, customip.district)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.DistrictText, customip.districtText, custom_path.DistrLabel)
   });

   it('should change the State Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.StateLabel, customip.state)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.StateText, customip.stateText, custom_path.StateLabel)
   });

   it('should change the Pincode Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.PincodeLabel, customip.pincode)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.PincodeText, customip.pincodeText, custom_path.PincodeLabel)
   });

   it('should change the Country Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.CountryLabel, customip.country)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.CountryText, customip.countryText, custom_path.CountryLabel)
   });

   it('should change the Primary Contact Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.PrimContactNoLabel, customip.primaryContact)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.PrimaryContactText, customip.primaryContactText, custom_path.PrimContactNoLabel)
   });

   it('should change the Contact No Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.ContactNoLabel, customip.contactNo)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.ContactNoText, customip.contactNoText, custom_path.ContactNoLabel)
   });

   it('should change the Tax Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.TaxLabel, customip.tax)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
      await custom_fn.labelCheck(custom_path.AddBranchbtn,custom_path.TaxText, customip.taxText, custom_path.TaxLabel)
   });
   /*  ******************** Required Btn ****************** */
   it('should chamge the all the Customization label into Required with cancel ', async () => {
      await custom_fn.Status(custom_path.BranchReq, custom_path.AddressReq, custom_path.LocalityReq, custom_path.CityReq, custom_path.DistrReq, custom_path.StateReq,
         custom_path.PincodeReq, custom_path.CountryReq, custom_path.PrimContactNoReq, custom_path.ContactNoReq, custom_path.TaxReq)
      await custom_fn.snakBarValid(custom_path.CancelBtn)
   });
   it('should chamge the all the Customization label into Required with save ', async () => {
      await custom_fn.Status(custom_path.BranchReq, custom_path.AddressReq, custom_path.LocalityReq, custom_path.CityReq, custom_path.DistrReq, custom_path.StateReq,
         custom_path.PincodeReq, custom_path.CountryReq, custom_path.PrimContactNoReq, custom_path.ContactNoReq, custom_path.TaxReq)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
   });
   /*  ******************** Hidden Btn ****************** */
   it('should chamge the all the Customization label into Hidden with cancel ', async () => {
      await custom_fn.Status(custom_path.BranchHide, custom_path.AddressHide, custom_path.LocalityHide, custom_path.CityHide, custom_path.DistrHide, custom_path.StateHide,
         custom_path.PincodeHide, custom_path.CountryHide, custom_path.PrimContactNoHide, custom_path.ContactNoHide, custom_path.TaxHide)
      await custom_fn.snakBarValid(custom_path.CancelBtn)
   });
   it('should chamge the all the Customization label into Hidden with save ', async () => {
      await custom_fn.Status(custom_path.BranchHide, custom_path.AddressHide, custom_path.LocalityHide, custom_path.CityHide, custom_path.DistrHide, custom_path.StateHide,
         custom_path.PincodeHide, custom_path.CountryHide, custom_path.PrimContactNoHide, custom_path.ContactNoHide, custom_path.TaxHide)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
   });
   /*  ******************** Optional Btn ****************** */
   it('should chamge the all the Customization label into optional with cancel ', async () => {
      await custom_fn.Status(custom_path.BranchOpt, custom_path.AddressOpt, custom_path.LocalityOpt, custom_path.CityOpt, custom_path.DistrOpt, custom_path.StateOpt,
         custom_path.PincodeOpt, custom_path.CountryOpt, custom_path.PrimContactNoOpt, custom_path.ContactNoOpt, custom_path.TaxOpt)
      await custom_fn.snakBarValid(custom_path.CancelBtn)
   });
   it('should chamge the all the Customization label into optional with save ', async () => {
      await custom_fn.Status(custom_path.BranchOpt, custom_path.AddressOpt, custom_path.LocalityOpt, custom_path.CityOpt, custom_path.DistrOpt, custom_path.StateOpt,
         custom_path.PincodeOpt, custom_path.CountryOpt, custom_path.PrimContactNoOpt, custom_path.ContactNoOpt, custom_path.TaxOpt)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
   });




});