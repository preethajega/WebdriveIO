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

    AddWHbyMappingExisitingAddress = async(ele,input,btn) =>{
        await actionsWrappers.Click(path.AddWarehouseBtn)
        await actionsWrappers.clickAndSetvalue(ele,input)
        await actionsWrappers.clickAndSetvalue(path.WarehouseCode,Warehouseip.WarehouseCode)
        await actionsWrappers.clickAndSetvalue(path.PlantCode,Warehouseip.PlantCode)
        await actionsWrappers.clickSetvalueAndSelectoption(path.MappedAddress,Warehouseip.MappedAddress)
        await actionsWrappers.clickAndSetvalue(path.ContactName,Warehouseip.ContactName)
        await actionsWrappers.clickAndSetvalue(path.ContactNumber,Warehouseip.ContactNumber)
        await actionsWrappers.Click(btn)
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.SaveAlert)     
    }

    AddWHManual = async(ele,input,btn) =>{
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
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.SaveAlert)                
    }

    AddWHAutofillAddress = async(ele,input,btn) =>{
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
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.SaveAlert)       
    }

    DeleteWH = async(btn) =>{
        await actionsWrappers.scrollEleAndClick(path.FirstDeleteBtn)
        await actionsWrappers.Click(btn)
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.DeleteAlert)     
    }
    EditWH = async(btn) =>{
        await actionsWrappers.Click(path.WarehouseTab)
        await actionsWrappers.scrollEleAndClick(path.Editdata)
        await actionsWrappers.Click(path.EditBtn)
        await actionsWrappers.scrollEle(path.ContactName)
        await actionsWrappers.clickAndSetvalue(path.ContactName,Warehouseip.ContactName1)
        await actionsWrappers.Click(btn)  
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.SaveAlert)       
    }

    DeleteMapppedWH = async(btn)=>{
        await actionsWrappers.scrollEleAndClick(path.LastDeleteBtn)
        await actionsWrappers.Click(btn)
        await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.MapedDeleteAlert)       
      }
    AlreadyExistWH = async()=>{
       await actionsWrappers.Click(path.AddWarehouseBtn)
       await actionsWrappers.clickAndSetvalue(path.WarehouseName,Warehouseip.WarehouseName)
       await actionsWrappers.Click(path.WarehouseCode)
       await actionsWrappers.snackBarValidate(common.snackbar,Warehouseip.WHAlreadyExists)       
       await actionsWrappers.Click(path.CancelBtn)
  }
  FieldValid = async(Elepath,eleIp) =>{
    await actionsWrappers.Click(path.AddWarehouseBtn)
    await actionsWrappers.Click(path.SaveBtn)
    await actionsWrappers.snackBarValidate(Elepath,eleIp)
    await actionsWrappers.Click(path.CancelBtn)
  }


   
}
module.exports = new Warehouse(); 