const Warehouse_path = require("../../../PageObjects/Settings/AddWarehouse.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const Warehouse_fn = require("../../../CommonFunctions/settings/warehouse");
var Warehouseip = require("../../../Inputs/settings/WarehouseIp");

describe('Warehouse card', () => {
    it("Should allow to access login into warehouse card ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await Warehouse_fn.open();
        await actionsWrappers.urlValidation("/company");
    });

    it('should add a Warehouse with MapedExisitingAddress by saving', async () => {
        await Warehouse_fn.AddWarehousebyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with MapedExisitingAddress by canceling', async () => {
        await Warehouse_fn.AddWarehousebyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName1, Warehouse_path.CancelBtn)
    });

    it('should not allow a user to add the same warehouse name again', async () => {
        await Warehouse_fn.AlreadyExistWarehouse()
    });
    it('should delete a warehouse with CancelBtn', async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata, Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata, Warehouse_path.ConformDeleteBtn)
    });

    it('should add a Warehouse Manual by saving', async () => {
        await Warehouse_fn.AddWarehouseManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName2, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse Manual by canceling', async () => {
        await Warehouse_fn.AddWarehouseManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName3, Warehouse_path.CancelBtn)
        await browser.pause(1000);
    });

    it('should delete a warehouse with CancelBtn', async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata, Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata, Warehouse_path.ConformDeleteBtn)
        await browser.pause(1000);
    });

    it('should add a Warehouse with Autofill by saving', async () => {
        await Warehouse_fn.AddWarehouseAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName4, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with Autofill by canceling', async () => {
        await Warehouse_fn.AddWarehouseAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName5, Warehouse_path.CancelBtn)
        await browser.pause(1000);
    });
    it('should Edit the warehouse with SaveBtn', async () => {
        await browser.pause(1000);
        await Warehouse_fn.EditWarehouse(Warehouse_path.SaveBtn)
    });
    it('should Edit the warehouse with cancelBtn', async () => {
        await Warehouse_fn.EditWarehouse(Warehouse_path.CancelBtn)
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await browser.refresh()
        await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
    });
    it('should try to delete a mapped Warehouse with cancel', async () => {
        await browser.pause(1000);
        await Warehouse_fn.DeleteMapppedWH(Warehouse_path.ConformCancelBtn)
    });
    it('should try to delete a mapped Warehouse with save', async () => {
        await browser.pause(1000);
        await Warehouse_fn.DeleteMapppedWH(Warehouse_path.ConformDeleteBtn)
    });

    it('should validate a Warehouse Name field', async () => {
        await browser.pause(1000)
        await Warehouse_fn.FieldValid(Warehouse_path.errWarehouseName,Warehouseip.errmsgWHName)
    });
    it('should validate a Branch Name field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errAddressName,Warehouseip.errmsgAddressName)
    });
    it('should validate a Address field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errAddress,Warehouseip.errmsgAddress)
    });
    it('should validate a Locality field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errLocality,Warehouseip.errmsgLocality)
    });
    it('should validate a Country field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errCountry,Warehouseip.errmsgCountry)
    });
    it('should validate a State field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errState,Warehouseip.errmsgState)
    });
    it('should validate a District field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errDistrict,Warehouseip.errmsgDistrict)
    });
    it('should validate a Pincode field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errPincode,Warehouseip.errmsgPinCode)
    });
    it('should validate a City field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errCity,Warehouseip.errmsgCity)
    });

    // it('santy', async () => {
    //     await Warehouse_fn.AddWarehousebyMappingExisitingAddress(Warehouse_path.WarehouseName,
    //         Warehouseip.WarehouseName, Warehouse_path.SaveBtn)
    //     await Warehouse_fn.AlreadyExistWarehouse()
    //     await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
    //     await Warehouse_fn.AddWarehouseManual(Warehouse_path.WarehouseName,
    //         Warehouseip.WarehouseName2, Warehouse_path.SaveBtn)
    //     await browser.pause(1000);
    //     await Warehouse_fn.DeleteWarehouse(Warehouse_path.Deletedata,Warehouse_path.ConformDeleteBtn)
    //     await browser.pause(1000);
    //     await Warehouse_fn.AddWarehouseAutofillAddress(Warehouse_path.WarehouseName,
    //         Warehouseip.WarehouseName4, Warehouse_path.SaveBtn)
    //     await Warehouse_fn.EditWarehouse(Warehouse_path.SaveBtn)
    //     await Warehouse_fn.DeleteMapppedWH(Warehouse_path.ConformDeleteBtn)

    //     await Warehouse_fn.FieldValid(Warehouse_path.errWarehouseName,Warehouseip.errmsgWHName)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errAddressName,Warehouseip.errmsgAddressName)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errAddress,Warehouseip.errmsgAddress)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errLocality,Warehouseip.errmsgLocality)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errCountry,Warehouseip.errmsgCountry)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errState,Warehouseip.errmsgState)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errDistrict,Warehouseip.errmsgDistrict)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errPincode,Warehouseip.errmsgPinCode)
    //     await Warehouse_fn.FieldValid(Warehouse_path.errCity,Warehouseip.errmsgCity)

    // });



});