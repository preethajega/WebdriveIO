const Page = require("../../../B2B/PageObjects/page");
const path = require("../../../B2B/PageObjects/Settings/AddWarehouse.page");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
var Warehouseip= require("../../Inputs/settings/WarehouseIp");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Warehouse extends Page{
    async open() {
      super.open(Warehouseip.WareUrl); 
    }

    AddWarehousebyMappingExisitingAddress = async(ele,input,btn) =>{
        await actionsWrappers.Click(path.AddWarehouseBtn)
        await actionsWrappers.clickAndSetvalue(ele,input)
        await actionsWrappers.clickAndSetvalue(path.WarehouseCode,Warehouseip.WarehouseCode)
        await actionsWrappers.clickAndSetvalue(path.PlantCode,Warehouseip.PlantCode)
        await actionsWrappers.clickSetvalueAndSelectoption(path.MappedAddress,Warehouseip.MappedAddress)
        await actionsWrappers.clickAndSetvalue(path.ContactName,Warehouseip.ContactName)
        await actionsWrappers.clickAndSetvalue(path.ContactNumber,Warehouseip.ContactNumber)
        await actionsWrappers.Click(btn)     
        if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),Warehouseip.SaveAlert );
        } 

    }

    AddWarehouseManual = async(ele,input,btn) =>{
        await actionsWrappers.Click(path.AddWarehouseBtn)
        await actionsWrappers.clickAndSetvalue(ele,input)
        await actionsWrappers.clickAndSetvalue(path.WarehouseCode,Warehouseip.WarehouseCode)
        await actionsWrappers.clickAndSetvalue(path.PlantCode,Warehouseip.PlantCode)
        await actionsWrappers.Click(path.MapwithEsixiting)
        //await actionsWrappers.clickSetvalueAndSelectoption(path.SearchAddress,Warehouseip.SearchAddressName)
        await actionsWrappers.clickAndSetvalue(path.AddressName,Warehouseip.AddressName)
        await actionsWrappers.clickAndSetvalue(path.AddressLine1,Warehouseip.AddressLine1)
        await actionsWrappers.clickAndSetvalue(path.AddressLine2,Warehouseip.AddressLine2)
        await actionsWrappers.clickSetvalueAndSelectSecondOption(path.Region,Warehouseip.Region)
        await actionsWrappers.clickSetvalueAndSelectoption(path.Province,Warehouseip.Provicence)
        await actionsWrappers.clickSetvalueAndSelectoption(path.District,Warehouseip.District)
        await actionsWrappers.clickAndSetvalue(path.Zipcode,Warehouseip.Zipcode)
        await actionsWrappers.clickAndSetvalue(path.City,Warehouseip.city)
        await actionsWrappers.clickAndSetvalue(path.Lattitude,Warehouseip.Lattitude)
        await actionsWrappers.clickAndSetvalue(path.Longitude,Warehouseip.Longitude)
        await actionsWrappers.clickAndSetvalue(path.ContactName,Warehouseip.ContactName)
        await actionsWrappers.clickAndSetvalue(path.ContactNumber,Warehouseip.ContactNumber)
        await actionsWrappers.Click(btn)     
        if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),Warehouseip.SaveAlert );
        } 
        
    }

    AddWarehouseAutofillAddress = async(ele,input,btn) =>{
        await actionsWrappers.Click(path.AddWarehouseBtn)
        await actionsWrappers.clickAndSetvalue(ele,input)
        await actionsWrappers.clickAndSetvalue(path.WarehouseCode,Warehouseip.WarehouseCode)
        await actionsWrappers.clickAndSetvalue(path.PlantCode,Warehouseip.PlantCode)
        await actionsWrappers.Click(path.MapwithEsixiting)
        await actionsWrappers.clickSetvalueAndSelectoption(path.SearchAddress,Warehouseip.SearchAddressName)
        await actionsWrappers.clickAndSetvalue(path.AddressName,Warehouseip.AddressName)
        await actionsWrappers.clickAndSetvalue(path.ContactName,Warehouseip.ContactName)
        await actionsWrappers.clickAndSetvalue(path.ContactNumber,Warehouseip.ContactNumber)
        await actionsWrappers.Click(btn)     
        if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),Warehouseip.SaveAlert );
        } 
    }

    DeleteWarehouse = async(ele,btn) =>{
        await actionsWrappers.Click(path.WarehouseTab)
        await actionsWrappers.Click(ele)
        await actionsWrappers.Click(path.DeleteBtn)
        await actionsWrappers.Click(btn)
        if(await common.snackbar.isDisplayed()){
            assert.strictEqual(
                await common.snackbar.getText(), Warehouseip.DeleteAlert);
        } 
    }
    EditWarehouse = async(btn) =>{
        await actionsWrappers.Click(path.WarehouseTab)
        await actionsWrappers.scrollEleAndClick(path.Editdata)
        await actionsWrappers.Click(path.EditBtn)
        await actionsWrappers.scrollEleAndClick(path.ContactName,Warehouseip.ContactName1)
        await actionsWrappers.Click(btn)     
        if(await common.snackbar.isDisplayed()){
         assert.strictEqual(
          await common.snackbar.getText(),Warehouseip.SaveAlert );
    } 
    }

    DeleteMapppedBranch = async(btn)=>{
        await actionsWrappers.scrollEleAndClick(path.MapedData)
          await actionsWrappers.Click(path.DeleteBtn)
          await actionsWrappers.Click(btn)
          if(await common.snackbar.isDisplayed()){
             assert.strictEqual(
                await common.snackbar.getText(),Warehouseip.MapedDeleteAlert);
          } 
      }
    AlreadyExistWarehouse = async()=>{
       await actionsWrappers.Click(path.AddWarehouseBtn)
       await actionsWrappers.clickAndSetvalue(path.WarehouseName,Warehouseip.WarehouseName)
       await actionsWrappers.Click(path.WarehouseCode)
       if(await common.snackbar.isDisplayed()){
          assert.strictEqual(
         await common.snackbar.getText(),Warehouseip.WHAlreadyExists);
        } 
       await actionsWrappers.Click(path.CancelBtn)
  }

   
}
module.exports = new Warehouse(); 