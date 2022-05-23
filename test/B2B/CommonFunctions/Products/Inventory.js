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
        await actionWrapper.snackBarValidate(commonObjects.snackbar,InventoryIp.tableAlert);
        await actionWrapper.Click(commonObjects.cancelTxt);
    }

    deleteProduct  = async(ele1,ele2,ele3,ele4)=>{
        this.landingPageChange(ele1,ele2);
        this.landingPageChange(ele3,ele4);
    }

}

module.exports = new Inventory();