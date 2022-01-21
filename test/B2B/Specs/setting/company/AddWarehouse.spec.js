const Warehouse_path = require("../../../PageObjects/Settings/AddWarehouse.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const Warehouse_fn= require("../../../CommonFunctions/settings/warehouse");
var Warehouseip= require("../../../Inputs/settings/WarehouseIp");

describe('Company Page', () => {
    it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  Warehouse_fn.open();
        await  actionsWrappers.urlValidation("/company");
        });

    it('should add a Warehouse with MapedExisitingAddress by saving',async () => {
        await Warehouse_fn.AddWarehousebyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName,Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with MapedExisitingAddress by canceling',async () => {
        await Warehouse_fn.AddWarehousebyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName1,Warehouse_path.CancelBtn)
    });

    it('should not allow a user to add the same warehouse name again',async () => {
        await Warehouse_fn.AlreadyExistWarehouse()
    });
    it('should delete a warehouse with CancelBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
    });

    it('should add a Warehouse Manual by saving',async () => {
        await Warehouse_fn.AddWarehouseManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName2,Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse Manual by canceling',async () => {
        await Warehouse_fn.AddWarehouseManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName3,Warehouse_path.CancelBtn)
            browser.pause(1000);
    });

    it('should delete a warehouse with CancelBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
        browser.pause(1000);
    });

    it('should add a Warehouse with Autofill by saving',async () => {
        await Warehouse_fn.AddWarehouseAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName4,Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with Autofill by canceling',async () => {
        await Warehouse_fn.AddWarehouseAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName5,Warehouse_path.CancelBtn)
            browser.pause(1000);
    });

    it('should delete a warehouse with CancelBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn',async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
    });
    
    it('should Edit the warehouse with SaveBtn',async () => {
        await Warehouse_fn.EditWarehouse(Warehouse_path.SaveBtn)
    });
    it('should Edit the warehouse with cancelBtn',async () => {
        await Warehouse_fn.EditWarehouse(Warehouse_path.CancelBtn)
    });
    it('should try to delete a mapped Brach with cancel',async () => {
        await Warehouse_fn.DeleteMapppedBranch(Warehouse_path.CancelBtn)
        browser.pause(1000);
   });
   it('should try to delete a mapped Brach with save',async () => {
       await Warehouse_fn.DeleteMapppedBranch(Warehouse_path.SaveBtn)
       browser.pause(1000);
   });   

});