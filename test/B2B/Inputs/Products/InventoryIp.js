function InventoryIp(){
    const path = require('path');
    this.ProductName="Apple";
    this.emptyQty="";
    this.Qty="10";
    this.safetyStock="10";
    this.avgCost="2000";
    this.ProductAlert="Required - search and select a product"
    this.WarehouseAlert="Required - search and select a Warehouse"
    this.StockQtyAlert="Stock qty Required"
    this.Sucess="Changes saved successfully"
    this.SaveSucess="Saved successfully"
    this.UploadSucess='Sanity Brand updated successfully'
    this.noProductAlert="No Products inserted"
    this.tableAlert = "Required"
    this.uploadWarehouseAlert="Warehouse ID not exist";
    this.uploadProductAlert="Product ID not exist";
    this.inventoryUpload = path.join(__dirname, './../../../FileUtils/sample-inventory.xlsx');


}
module.exports = new InventoryIp();