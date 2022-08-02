const Page = require("../../../B2B/PageObjects/page");
const path = require("../../../B2B/PageObjects/Settings/AddWarehouse.page");
const Branchpath = require("../../../B2B/PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
var Warehouseip = require("../../Inputs/settings/WarehouseIp");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Warehouse extends Page {
  async open() {
    super.open(Warehouseip.WareUrl);
  }

  AddWHbyMappingExisitingAddress = async (ele, input, btn) => {
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.clickAndSetvalue(ele, input)
    await actionsWrappers.clickAndSetvalue(path.WarehouseCode, Warehouseip.WarehouseCode)
    // await actionsWrappers.clickAndSetvalue(path.SalesOrgCode, Warehouseip.PlantCode)
    await actionsWrappers.DDClickAndFirstValue(path.SalesOrgCode)
    await actionsWrappers.clickSetvalueAndSelectoption(path.MappedAddress, Warehouseip.MappedAddress)
    await actionsWrappers.clickAndSetvalue(path.ContactName, Warehouseip.ContactName)
    await actionsWrappers.clickAndSetvalue(path.ContactNumber, Warehouseip.ContactNumber)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.SaveAlert)
  }

  AddWHManual = async (ele, input, btn) => {
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.clickAndSetvalue(ele, input)
    await actionsWrappers.clickAndSetvalue(path.WarehouseCode, Warehouseip.WarehouseCode)
    // await actionsWrappers.clickAndSetvalue(path.PlantCode, Warehouseip.PlantCode)
    await actionsWrappers.DDClickAndFirstValue(path.SalesOrgCode)
    await actionsWrappers.Click(path.MapwithEsixiting)
    //await actionsWrappers.clickSetvalueAndSelectoption(path.SearchAddress,Warehouseip.SearchAddressName)
    await actionsWrappers.clickAndSetvalue(path.AddressName, Warehouseip.AddressName)
    await actionsWrappers.clickAndSetvalue(path.AddressLine1, Warehouseip.AddressLine1)
    await actionsWrappers.clickAndSetvalue(path.AddressLine2, Warehouseip.AddressLine2)
    await actionsWrappers.clickSetvalueAndSelectSecondOption(path.Region, Warehouseip.Region)
    await actionsWrappers.clickSetvalueAndSelectoption(path.Province, Warehouseip.Provicence)
    await actionsWrappers.clickSetvalueAndSelectoption(path.District, Warehouseip.District)
    await actionsWrappers.clickAndSetvalue(path.Zipcode, Warehouseip.Zipcode)
    await actionsWrappers.clickAndSetvalue(path.City, Warehouseip.city)
    await actionsWrappers.clickAndSetvalue(path.Lattitude, Warehouseip.Lattitude)
    await actionsWrappers.clickAndSetvalue(path.Longitude, Warehouseip.Longitude)
    await actionsWrappers.clickAndSetvalue(path.ContactName, Warehouseip.ContactName)
    await actionsWrappers.clearValueAndSetValueSelectDropdown(path.CountryCode, Warehouseip.countryCode)
    await actionsWrappers.clickAndSetvalue(path.ContactNumber, Warehouseip.ContactNumber)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.SaveAlert)
  }

  AddWHAutofillAddress = async (ele, input, btn) => {
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.clickAndSetvalue(ele, input)
    await actionsWrappers.clickAndSetvalue(path.WarehouseCode, Warehouseip.WarehouseCode)
    // await actionsWrappers.clickAndSetvalue(path.PlantCode, Warehouseip.PlantCode)
    await actionsWrappers.DDClickAndFirstValue(path.SalesOrgCode)
    await actionsWrappers.Click(path.MapwithEsixiting)
    await actionsWrappers.clickSetvalueAndSelectoption(path.SearchAddress, Warehouseip.SearchAddressName)
    await actionsWrappers.clickAndSetvalue(path.AddressName, Warehouseip.AddressName)
    await actionsWrappers.clickAndSetvalue(path.ContactName, Warehouseip.ContactName)
    await actionsWrappers.clearValueAndSetValueSelectDropdown(path.CountryCode, Warehouseip.countryCode)
    await actionsWrappers.clickAndSetvalue(path.ContactNumber, Warehouseip.ContactNumber)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.SaveAlert)
  }

  DeleteWH = async (btn) => {
    await actionsWrappers.Click(path.WarehouseTab)
    await actionsWrappers.MoveTO1(Branchpath.SelectFirstdata)
    await browser.pause(2000)
    await actionsWrappers.HoverMoveTO(Branchpath.SelectFirstdata, path.FirstDeleteBtn)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.DeleteAlert)
  }
  EditWH = async (btn) => {
    await actionsWrappers.Click(path.WarehouseTab)
    await actionsWrappers.MoveTo(path.Editdata)
    await actionsWrappers.scrollEle(path.ContactName)
    await actionsWrappers.clearAndsetValue(path.ContactName, Warehouseip.ContactName1)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.SaveAlert)
  }

  DeleteMapppedWH = async (btn) => {
    await actionsWrappers.Click(path.WarehouseTab)
    await actionsWrappers.scrollEle(Branchpath.SelectLastData)
    await browser.pause(2000)
    await actionsWrappers.HoverMoveTO(Branchpath.SelectLastData, path.LastDeleteBtn)
    await browser.pause(2000)
    await actionsWrappers.Click(btn)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.MapedDeleteAlert)
  }
  AlreadyExistWH = async () => {
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.clickAndSetvalue(path.WarehouseName, Warehouseip.WarehouseName)
    await actionsWrappers.Click(path.WarehouseCode)
    await actionsWrappers.snackBarValidate(common.snackbar, Warehouseip.WHAlreadyExists)
    await actionsWrappers.Click(path.CancelBtn)
  }
  FieldValid = async (Elepath, eleIp) => {
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.Click(path.SaveBtn)
    await actionsWrappers.snackBarValidate(Elepath, eleIp)
    await actionsWrappers.Click(path.CancelBtn)
  }



}
module.exports = new Warehouse();