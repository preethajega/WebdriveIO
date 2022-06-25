const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const InventoryIp = require("../../Inputs/Products/InventoryIp")
const path = require("../../PageObjects/Products/Inventroy.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const commonObjects = require("../../PageObjects/Common/commonObjects");
const filterObjects = require("../../PageObjects/Common/filterpage");

class Inventory extends Page {
    
    async open() {
        super.open("inventory/landing"); 
    }


    InventoryClearFilter = async() =>{
        await actionWrapper.ClearFilter(filterObjects.filterResults,filterObjects.Filter,
            filterObjects.clearAll,filterObjects.save); 
    }
    QtyChange = async(ele,value,ele2)=>{
        await actionWrapper.isNotEmpty_clearAndsetValue(ele,value)
        await actionWrapper.Click(ele2);
    }
    WarehouseChange = async(ele1,ele2)=>{
        await actionWrapper.selectDrpdownusingKeyboard(ele1);
        await actionWrapper.Click(ele2);
    }
    landingPageChange = async(ele1,ele2)=>{
        await actionWrapper.Click(ele1)
        await actionWrapper.Click(ele2);
    }

    UploadInventory =async(filePath)=>{
        await actionWrapper.Click(path.UploadInventory)
        await browser.pause(2000);
        await attchmentUpload.upload(path.uploadExcel,filePath);
    }
    UploadQtyChange = async(ele,value)=>{
        await actionWrapper.isNotEmpty_clearAndsetValue(ele,value);
    }

    emptyQtyRequiredCheck = async(ele1,ele2)=>{
        this.UploadInventory(ele1);
        this.QtyChange(ele2,InventoryIp.emptyQty,commonObjects.submit);
        await actionWrapper.snackBarValidate(commonObjects.snackbar,InventoryIp.RequiredAlert);
        await actionWrapper.Click(commonObjects.cancelTxt);
    }

    deleteProduct  = async(ele1,ele2,ele3,ele4)=>{
        this.landingPageChange(ele1,ele2);
        this.landingPageChange(ele3,ele4);
    }

    ClearInventoryFilters = async()=>{
        await actionWrapper.ClearFilter( filterObjects.filterResults,filterObjects.Filter,
            filterObjects.clearAll,filterObjects.save);
    }

    ApplyFilterusingDrpDown = async(ele,input)=>{
        await actionWrapper.Click(filterObjects.Filter);
        await actionWrapper.clickSetvalueAndSelectoption(ele,InventoryIp.firstletter);
        await actionWrapper.Click(filterObjects.save);
        await actionWrapper.displayValidation(filterObjects.filterResults)
    }

    ApplyFilterusingIp= async(ele,input)=>{
        await actionWrapper.Click(filterObjects.Filter);
        await actionWrapper.clickAndSetvalue(ele,input);
        await actionWrapper.Click(filterObjects.save);
        await actionWrapper.displayValidation(filterObjects.filterResults)
    }

    searchandSelectProduct = async (input) =>{
        await actionWrapper.Click(path.AddInventory)
        await actionWrapper.checkEnabledAndSetValue(path.prodSearch,input)
        await browser.pause(2000);
        await actionWrapper.Click(path.searchResults)
    }

    insertProdDetails = async (ele,input)=>{
        if (await ele.isDisplayed()===false){
             ele.scrollintoview();
        }
        await actionWrapper.isEmpty_setValue(ele,input)

    }

    WarehouseSelect =async(ele,input,ele2,ele3)=>{
        if (await ele.getValue !==''){
            await actionWrapper.clearValue_selectDropdownvalue
        }

    
    }



}

module.exports = new Inventory();