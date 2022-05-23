const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Inventory_path = require("../../PageObjects/Products/Inventroy.page");
const Inventory_Fn = require("../../CommonFunctions/Products/Inventory");
var InventoryIp = require("../../Inputs/Products/InventoryIp");
const commonObjects = require("../../PageObjects/Common/commonObjects");
const filterObjects = require("../../PageObjects/Common/filterpage");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");


describe('Inventory Page', () => {
    it("Should allow to access login into Inventory Page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await Inventory_Fn.open();
        await actionsWrappers.urlValidation("/inventory/landing");
    });
    
    // it("Should navigate to detail page then close the page ", async () => {
    //     await actionsWrappers.Click(Inventory_path.AddInventory);
    //     await actionsWrappers.urlValidation("/inventory/details");
    //     await actionsWrappers.Click(Inventory_path.ClosePage);
    //     await actionsWrappers.urlValidation("/inventory/landing");
    // }); 
    
    it("Clear filter if applied ", async () => {
        await actionsWrappers.ClearFilter(
            filterObjects.filterResults,
            filterObjects.Filter,
            filterObjects.clearAll,
            filterObjects.save
        )
  
    });





    // it("Change the Stock qty from landing page and click cancel ", async ()=>{
    //     await Inventory_Fn.QtyChange(Inventory_path.StockqtyChange(0),
    //         InventoryIp.Qty,commonObjects.CancelBtn);
    // });

    // it("Should Change the Stock qty from landing page ", async ()=>{
    //     await Inventory_Fn.QtyChange(Inventory_path.StockqtyChange(0),
    //         InventoryIp.Qty,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.Sucess);
    // });

    // it("Change the Stock qty as empty from landing page ", async ()=>{
    //     await Inventory_Fn.QtyChange(Inventory_path.StockqtyChange(0),
    //     InventoryIp.emptyQty,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.tableAlert);
    // });

    // it("Change the Warehouse from landing page and click cancel ", async ()=>{
    //     await Inventory_Fn.WarehouseChange(Inventory_path.WarehouseChange(1),commonObjects.CancelBtn)
    // });

    // it("Change the Warehouse from landing page and click save ", async ()=>{
    //     await Inventory_Fn.WarehouseChange(Inventory_path.WarehouseChange(1),commonObjects.submit)
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.Sucess);
    // });

    // it("select the one Product & select all the products landing page ", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,commonObjects.submit);
    // });

    // it("select the one Product & Unselect all the products landing page ", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.UncheckAll);
    // });

    // it("select the Product & download from landing page ", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.DownloadInventory);
    // });

    // it("select the Product & Delete  and click cancel", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.moreOption);
    //     await Inventory_Fn.landingPageChange(Inventory_path.DeleteProd,commonObjects.CancelBtn);

    // });

    // it("select the Product & Delete the product from landing page ", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.moreOption);
    //     await Inventory_Fn.landingPageChange(Inventory_path.DeleteProd,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.Sucess);

    // });

    // it("select the Product & Edit the product from landing page ", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.EditInventory);
    //     await actionsWrappers.urlValidation("/inventory/details");
    //     await Inventory_Fn.QtyChange(Inventory_path.newProdStockQty,
    //        InventoryIp.Qty,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.SaveSucess);
    // });

    // it("Click save without upload excel", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.UploadInventory,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.noProductAlert);
    //     await actionsWrappers.Click(commonObjects.cancelTxt);
    // });

    // it("Download the Sample Excel", async ()=>{
    //     await Inventory_Fn.landingPageChange(Inventory_path.UploadInventory,Inventory_path.DownloadExcel);
    // });

    // it("Upload the Sample Excel and click cancel", async ()=>{
    //     await Inventory_Fn.UploadInventory(InventoryIp.inventoryUpload);
    //     await actionsWrappers.Click(commonObjects.cancelTxt);
    // });
    // it("Upload the Sample Excel and delete added products", async ()=>{
    //     await Inventory_Fn.UploadInventory(InventoryIp.inventoryUpload);
    //     await Inventory_Fn.landingPageChange(Inventory_path.uploadCheckAll,Inventory_path.uploadDelete);
    //     await actionsWrappers.Click(commonObjects.cancelTxt);
    // });

    // it("Upload the Sample Excel and Change the Stockqty as zero and submit", async ()=>{
    //     await Inventory_Fn.emptyQtyRequiredCheck(InventoryIp.inventoryUpload,
    //         Inventory_path.uploadStockQty(0))
    // });
    
    // it("Upload the Sample Excel and Change the Safetyqty as zero and submit", async ()=>{
    //     await Inventory_Fn.emptyQtyRequiredCheck(InventoryIp.inventoryUpload,
    //         Inventory_path.uploadSafetyQty(0))

    // });

    // it("Upload the Sample Excel and Change the avgcost as zero and submit", async ()=>{
    //     await Inventory_Fn.emptyQtyRequiredCheck(InventoryIp.inventoryUpload,
    //         Inventory_path.uploadAvgCost(0))
    // });

    // it("Upload the Sample Excel and Change the qty & warehouse", async ()=>{
    //     await Inventory_Fn.UploadInventory(InventoryIp.inventoryUpload);
    //     await Inventory_Fn.UploadQtyChange(
    //        Inventory_path.uploadStockQty(0),InventoryIp.Qty)
    //     await Inventory_Fn.UploadQtyChange(
    //        Inventory_path.uploadSafetyQty(0),InventoryIp.safetyStock)
    //     await Inventory_Fn.UploadQtyChange(
    //        Inventory_path.uploadAvgCost(0),InventoryIp.avgCost)
    //     await Inventory_Fn.WarehouseChange(Inventory_path.uploadWarehouse(0),
    //     commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.SaveSucess);
    //      });

    // it("select the Product & Delete the product from landing page ", async ()=>{
    //     await browser.pause(3000);
    //     await Inventory_Fn.landingPageChange(Inventory_path.selectFirstProd,Inventory_path.landingmoreOption)
    //     await Inventory_Fn.landingPageChange(Inventory_path.DeleteProd,commonObjects.submit);
    //     await actionsWrappers.snackBarValidate(commonObjects.snackbar,InventoryIp.Sucess);

    // });




    });
