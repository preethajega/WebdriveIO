const Page = require("../../../B2B/PageObjects/page");

class Inventory extends Page{

    /*Inventory landing page */
    get AddInventory() {
        return super.pathByXpath('//*[text()="Add New Inventory"]');
    }
    get selectFirstProd() {
        return super.pathByXpath('//tr[1]/td[1]');
    }
    get UncheckAll() {
        return super.pathByXpath('//*[@aria-label="uncheck"]');
    }
    get DownloadInventory() {
        return super.pathByXpath('//*[text()="Download"]');
    }

    get EditInventory() {
        return super.pathByXpath('//*[text()="Edit"]');
    }

    get UploadInventory() {
        return super.pathByXpath('//*[text()="Upload"]');
    }

    StockqtyChange(row){
        return $(`[name="inventoryList[${row}].stockQuantity"]`)
    }
    WarehouseChange(row){
        return $(`[name="inventoryList[${row}].wareHouseDtoId"]`)
    }


    /*Inventory Filter Page */
    get prodCategory() {
        return super.pathById('category');
    }
    get prodSubcategory() {
        return super.pathById('subcategory');
    }
    get prodBrand() {
        return super.pathById('brand');
    }
    get prodId() {
        return super.pathByXpath('//*[@id="brand"]/following::input[1]');
    }
    get prodwarehouse() {
        return super.pathById('warehouse');
    }
    get stockStartvalue() {
        return super.pathByName('startvalue');
    }
    get stockEndvalue() {
        return super.pathByName('endvalue');
    }

    /*Upload cart */

    get DownloadExcel() {
        return super.pathByXpath('//a[text()="Download sample excel"]');
    }
    get uploadExcel() {
        return super.pathByXpath('//input[@id="upload-excel-file"]');
    }
    get warehosueAlert(){
        return super.pathByXpath('//*[text()="Warehouse name not exist"]');
    }
    get ProductIDAlert(){
        return super.pathByXpath('//*[text()="Product ID not exist"]');
    }
    uploadStockQty(row){
        return $(`[name="inventoryForm[${row}].newStockQty"]`)
    }  
    uploadSafetyQty(row){
        return $(`[name="inventoryForm[${row}].safetyStock"]`)
    }  
    uploadAvgCost(row){
        return $(`[name="inventoryForm[${row}].averageCost"]`)
    }  
    uploadWarehouse(row){
        return $(`[name="inventoryForm[${row}].wareHouseDtoId.wareHouseName"]`)
    }
    get uploadCheckAll(){
        return super.pathByXpath('(//*[@title="Checkall"])[last()]');
    }
    get uploadDelete(){
        return super.pathByXpath('//*[@aria-label="close"]');
    }

    /*Inventory Detail page */

    get prodSearch(){
        return super.pathByXpath('//*[@placeholder="Search for products"]');
    }

    get searchResults(){
        return super.pathByXpath('//div[@role="button"][1]');
    }

    get newProdID() {
        return super.pathByName('InventoryForm.productsId.brandProductId');
    }
    get newProdBrand() {
        return super.pathByName('InventoryForm.brandId.name');
    }

    get newProdDesc() {
        return super.pathByName('InventoryForm.productsId.productShortDescription');
    }

    get newProdListprice() {
        return super.pathByName('InventoryForm.productsId.unitListPrice');
    }
    get newProdQty() {
        return super.pathByName('InventoryForm.productsId.unitQuantity');
    }

    get newProdWarehouse() {
        return super.pathByName('InventoryForm.wareHouseDtoId');
    }
    get warehouseDropDown() {
        return super.pathByXpath('//button[@title="Open"]');
    }

    get helperText(){
        return super.pathById('InventoryForm.wareHouseDtoId-helper-text');

    }

    get newProdStockQty() {
        return super.pathByName('InventoryForm.stockQuantity');
    }

    get newProdSafetyQty() {
        return super.pathByName('InventoryForm.safetyStock');
    }

    get newProdAvailableQty() {
        return super.pathByName('InventoryForm.availableQuantity');
    }

    get newProdAvgCost() {
        return super.pathByName('InventoryForm.averageCost');
    }
    get landingmoreOption() {
        return super.pathByXpath('//*[text()="Edit"]/following::button[1]');
    }
    get detailmoreOption(){
        return super.pathByXpath('//*[text()="Add New Inventory"]/following::button[1]');
    }
    get DeleteProd() {
        return super.pathByXpath('//*[text()="Delete"]');
    }
    get ClosePage() {
    return super.pathByXpath('//*[text()="Add New Inventory"]/following::button[2]');
    }
  
   



   




    

}
module.exports = new Inventory();