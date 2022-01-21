const Page = require("../../../B2B/PageObjects/page");
const path = require("../../../B2B/PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
var Branchip= require("../../Inputs/settings/BranchIP");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");


class Branch extends Page{
   async open() {
    super.open(Branchip.BranchUrl); 
   }

    AddBranchByAutoFill = async (btn) =>{
     await actionsWrappers.Click(path.AddBranchbtn)  
     await actionsWrappers.clickSetvalueAndSelectoption(path.SearchCompname,Branchip.searchcompname)
     await actionsWrappers.clickAndSetvalue(path.Branch,Branchip.BranchName)
     await actionsWrappers.clickAndSetvalue(path.ABNnumber,Branchip.ABNnumber)
     await actionsWrappers.clickAndSetvalue(path.BillingCode,Branchip.BillingCode)
     await actionsWrappers.clickAndSetvalue(path.ShipingCode,Branchip.ShippingCode)
     await actionsWrappers.clickAndSetvalue(path.BranchCode,Branchip.BranchCode)
     await actionsWrappers.clickAndSetvalue(path.SalesOrgCode,Branchip.SalesorgCode)
     await actionsWrappers.clickAndSetvalue(path.ContactName,Branchip.ContactName)
     await actionsWrappers.clickAndSetvalue(path.PhoneNumber,Branchip.PhoneNumber)
    // await actionsWrappers.clickSetvalueAndSelectoption(path.Warehouse,Branchip.Warehouse)
    //  await actionsWrappers.clickSetvalueAndSelectoption(path.DefaultWarehouse,Branchip.DefaultWarehouse)
    //  await actionsWrappers.clickSetvalueAndSelectoption(path.BusinessUnit,Branchip.BusinessUnit)
      await actionsWrappers.Click(btn)     
     if(await common.snackbar.isDisplayed()){
        await assert.strictEqual(
          await common.snackbar.getText(),Branchip.saveAlert );
    } 
    }
    AddBranch = async(btn) =>{
     await actionsWrappers.Click(path.AddBranchbtn)
     await actionsWrappers.clickAndSetvalue(path.Branch,Branchip.BranchName)
     await actionsWrappers.clickAndSetvalue(path.AddressLine1,Branchip.AddressLine1)
     await actionsWrappers.clickAndSetvalue(path.AddressLine2,Branchip.AddressLine2)
     await actionsWrappers.clickSetvalueAndSelectSecondOption(path.Region,Branchip.Region)
     await actionsWrappers.clickSetvalueAndSelectoption(path.State,Branchip.Provicence)
     await actionsWrappers.clickSetvalueAndSelectoption(path.Distric,Branchip.District)
     await actionsWrappers.clickAndSetvalue(path.Zipcode,Branchip.Zipcode)
     await actionsWrappers.clickAndSetvalue(path.City,Branchip.city)
     await actionsWrappers.clickAndSetvalue(path.Lattitude,Branchip.Lattitude)
     await actionsWrappers.clickAndSetvalue(path.Longitude,Branchip.Longitude)
     await actionsWrappers.scrollEleAndClick(path.Billing)
     await actionsWrappers.scrollEleAndClick(path.Shipping)
     await actionsWrappers.clickAndSetvalue(path.ABNnumber,Branchip.ABNnumber)
     await actionsWrappers.clickAndSetvalue(path.BillingCode,Branchip.BillingCode)
     await actionsWrappers.clickAndSetvalue(path.ShipingCode,Branchip.ShippingCode)
     await actionsWrappers.clickAndSetvalue(path.BranchCode,Branchip.BranchCode)
     await actionsWrappers.clickAndSetvalue(path.SalesOrgCode,Branchip.SalesorgCode)
     await actionsWrappers.clickAndSetvalue(path.ContactName,Branchip.ContactName)
     await actionsWrappers.clickAndSetvalue(path.PhoneNumber,Branchip.PhoneNumber)
     // await actionsWrappers.clickSetvalueAndSelectoption(path.Warehouse,Branchip.Warehouse)
    //  await actionsWrappers.clickSetvalueAndSelectoption(path.DefaultWarehouse,Branchip.DefaultWarehouse)
    //  await actionsWrappers.clickSetvalueAndSelectoption(path.BusinessUnit,Branchip.BusinessUnit)
    await actionsWrappers.Click(btn)     
    if(await common.snackbar.isDisplayed()){
       await assert.strictEqual(
         await common.snackbar.getText(),Branchip.saveAlert );
   } 
    }
    DeleteBranchAddress = async(btn) =>{
        await actionsWrappers.scrollEleAndClick(path.Deletedata)
        await actionsWrappers.Click(path.DeleteBtn)
        await actionsWrappers.Click(btn)
        if(await common.snackbar.isDisplayed()){
            await assert.strictEqual(
              await common.snackbar.getText(),Branchip.DeleteAlert);
        } 
    }
    EditBranchAddress = async(btn) =>{
        await actionsWrappers.scrollEleAndClick(path.Editdata)
        await actionsWrappers.Click(path.EditBtn)
        await actionsWrappers.clearValue_selectDropdownvalue(path.SearchCompname,Branchip.EditSearchCompname)
        await actionsWrappers.Click(btn)     
        if(await common.snackbar.isDisplayed()){
         assert.strictEqual(
          await common.snackbar.getText(),Branchip.saveAlert );
    } 
    }
    DeleteMapppedBranch = async(btn)=>{
      await actionsWrappers.scrollEleAndClick(path.MapedData)
        await actionsWrappers.Click(path.DeleteBtn)
        await actionsWrappers.Click(btn)
        if(await common.snackbar.isDisplayed()){
            await assert.strictEqual(
              await common.snackbar.getText(),Branchip.MapedDeleteAlert);
        } 
    }

}

module.exports = new Branch();