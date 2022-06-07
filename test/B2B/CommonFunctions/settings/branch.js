const Page = require("../../../B2B/PageObjects/page");
const path = require("../../../B2B/PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
var Branchip = require("../../Inputs/settings/BranchIP");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");


class Branch extends Page {
  async open() {
    super.open(Branchip.BranchUrl);
  }

  AddBranchByAutoFill = async (btn) => {
    await actionsWrappers.Click(path.AddBranchbtn)
    await actionsWrappers.clickSetvalueAndSelectoption(path.SearchCompname, Branchip.searchcompname)
    await actionsWrappers.clickAndSetvalue(path.Branch, Branchip.BranchName)
    await actionsWrappers.clickAndSetvalue(path.ABNnumber, Branchip.ABNnumber)
    await actionsWrappers.clickAndSetvalue(path.BillingCode, Branchip.BillingCode)
    await actionsWrappers.clickAndSetvalue(path.ShipingCode, Branchip.ShippingCode)
    await actionsWrappers.clickAndSetvalue(path.BranchCode, Branchip.BranchCode)
    await actionsWrappers.clickAndSetvalue(path.SalesOrgCode, Branchip.SalesorgCode)
    await actionsWrappers.clickAndSetvalue(path.ContactName, Branchip.ContactName)
    await actionsWrappers.clickAndSetvalue(path.PhoneNumber, Branchip.PhoneNumber)
    await actionsWrappers.clickSetvalueAndSelectoption(path.Warehouse, Branchip.Warehouse)
    await actionsWrappers.Click(path.Warehouse)
    await actionsWrappers.clickSetvalueAndSelectoption(path.DefaultWarehouse, Branchip.DefaultWarehouse)
    await actionsWrappers.clickSetvalueAndSelectoption(path.BusinessUnit, Branchip.BusinessUnit2)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Branchip.saveAlert)
  }
  AddBranch = async (btn) => {
    await actionsWrappers.Click(path.AddBranchbtn)
    await actionsWrappers.clickAndSetvalue(path.Branch, Branchip.BranchName)
    await actionsWrappers.clickAndSetvalue(path.AddressLine1, Branchip.AddressLine1)
    await actionsWrappers.clickAndSetvalue(path.AddressLine2, Branchip.AddressLine2)
    await actionsWrappers.clickSetvalueAndSelectSecondOption(path.Region, Branchip.Region)
    await actionsWrappers.clickSetvalueAndSelectoption(path.State, Branchip.Provicence)
    await actionsWrappers.clickSetvalueAndSelectoption(path.Distric, Branchip.District)
    await actionsWrappers.clickAndSetvalue(path.Zipcode, Branchip.Zipcode)
    await actionsWrappers.clickAndSetvalue(path.City, Branchip.city)
    await actionsWrappers.clickAndSetvalue(path.Lattitude, Branchip.Lattitude)
    await actionsWrappers.clickAndSetvalue(path.Longitude, Branchip.Longitude)
    /*await actionsWrappers.Click(path.Billing)
    await actionsWrappers.Click(path.Shipping)*/
    await actionsWrappers.clickAndSetvalue(path.ABNnumber, Branchip.ABNnumber)
    await actionsWrappers.clickAndSetvalue(path.BillingCode, Branchip.BillingCode)
    await actionsWrappers.clickAndSetvalue(path.ShipingCode, Branchip.ShippingCode)
    await actionsWrappers.clickAndSetvalue(path.BranchCode, Branchip.BranchCode)
    await actionsWrappers.clickAndSetvalue(path.SalesOrgCode, Branchip.SalesorgCode)
    await actionsWrappers.clickAndSetvalue(path.ContactName, Branchip.ContactName)
    await actionsWrappers.clearValueAndSetValueSelectDropdown(path.countrycode, Branchip.countrycode)
    await actionsWrappers.clickAndSetvalue(path.PhoneNumber, Branchip.PhoneNumber)
    await actionsWrappers.clickSetvalueAndSelectoption1(path.Warehouse, Branchip.Warehouse)
    await actionsWrappers.Click(path.Warehouse)
    await actionsWrappers.selectDrpdownusingKeyboard(path.DefaultWarehouse)
    await actionsWrappers.clickSetvalueAndSelectoption(path.BusinessUnit, Branchip.BusinessUnit)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Branchip.saveAlert)
  }
  MappedDeleteValid = async (btn, snakip, text) => {
    await actionsWrappers.MoveTO1(path.SelectFirstdata)
    await actionsWrappers.HoverMoveTO(path.SelectFirstdata, path.FirstDeleteBtn)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await browser.pause(2000)
    if ((await snakip.isDisplayed()) === true) {
      if ((await common.snackbar.getText()) === text) {
        await browser.pause(3000)
        await actionsWrappers.scrollEleAndDoubleClick(path.SelectFirstdata)
        await actionsWrappers.scrollEleAndClick(path.Warehouse)
        await actionsWrappers.scrollEleAndClick(path.WHClearBtn)
        await actionsWrappers.scrollEleAndClick(path.Warehouse)
        await actionsWrappers.Click(path.BusinessUnit)
        await actionsWrappers.Click(path.BUClearBtn)
        await actionsWrappers.Click(path.SaveBtn)
      }
    }
  }
  DeleteBranchAddress = async (btn) => {
    await actionsWrappers.MoveTO1(path.SelectFirstdata)
    await browser.pause(2000)
    await actionsWrappers.HoverMoveTO(path.SelectFirstdata, path.FirstDeleteBtn)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Branchip.DeleteAlert)
  }
  EditBranchAddress = async (btn) => {
    await actionsWrappers.MoveTo(path.SelectFirstdata)
    await browser.pause(2000)
    await actionsWrappers.clickSetvalueAndSelectoption(path.SearchCompname, Branchip.EditSearchCompname)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Branchip.saveAlert)
  }
  DeleteMapppedBranch = async (btn) => {
    await actionsWrappers.scrollEle(path.SelectLastData)
    await actionsWrappers.HoverMoveTO(path.SelectLastData, path.LastDeleteBtn)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Branchip.MappedDeleteMSG)
  }
  FieldValid = async (Elepath, eleIp) => {
    await actionsWrappers.Click(path.AddBranchbtn)
    await actionsWrappers.Click(path.SaveBtn)
    await actionsWrappers.snackBarValidate(Elepath, eleIp)
    await actionsWrappers.Click(path.CancelBtn)
  }

}

module.exports = new Branch();