const Warehouse_path = require("../../../PageObjects/Settings/AddWarehouse.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const Warehouse_fn = require("../../../CommonFunctions/settings/warehouse");
var Warehouseip = require("../../../Inputs/settings/WarehouseIp");
const custom_fn = require("../../../CommonFunctions/settings/customization")
const custom_path = require("../../../PageObjects/Settings/customization.page");

describe('Warehouse card', () => {
    it("Should allow to access login into warehouse card ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await Warehouse_fn.open();
        await actionsWrappers.urlValidation("/company");
    });

    it('should add a Warehouse with MapedExisitingAddress by saving', async () => {
        await Warehouse_fn.AddWHbyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with MapedExisitingAddress by canceling', async () => {
        await Warehouse_fn.AddWHbyMappingExisitingAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName1, Warehouse_path.CancelBtn)
    });

    it('should not allow a user to add the same warehouse name again', async () => {
        await Warehouse_fn.AlreadyExistWH()
    });
    it('should delete a warehouse with CancelBtn', async () => {
        await Warehouse_fn.DeleteWH(Warehouse_path.ConformCancelBtn)
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await Warehouse_fn.DeleteWH(Warehouse_path.ConformDeleteBtn)
    });

    it('should add a Warehouse Manual by saving', async () => {
        await Warehouse_fn.AddWHManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName2, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse Manual by canceling', async () => {
        await Warehouse_fn.AddWHManual(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName3, Warehouse_path.CancelBtn)
        await browser.pause(1000);
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await Warehouse_fn.DeleteWH(Warehouse_path.ConformDeleteBtn)
        await browser.pause(1000);
    });

    it('should add a Warehouse with Autofill by saving', async () => {
        await Warehouse_fn.AddWHAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName4, Warehouse_path.SaveBtn)
    });
    it('should add a Warehouse with Autofill by canceling', async () => {
        await Warehouse_fn.AddWHAutofillAddress(Warehouse_path.WarehouseName,
            Warehouseip.WarehouseName5, Warehouse_path.CancelBtn)
        await browser.pause(1000);
    });
    it('should Edit the warehouse with SaveBtn', async () => {
        await browser.pause(1000);
        await Warehouse_fn.EditWH(Warehouse_path.SaveBtn)
    });
    it('should Edit the warehouse with cancelBtn', async () => {
        await Warehouse_fn.EditWH(Warehouse_path.CancelBtn)
    });
    it('should delete a warehouse with DeleteBtn', async () => {
        await browser.refresh()
        await Warehouse_fn.DeleteWH(Warehouse_path.Deletedata, Warehouse_path.ConformDeleteBtn)
    });
    it('should try to delete a mapped Warehouse with cancel', async () => {
        await browser.pause(1000);
        await Warehouse_fn.DeleteMapppedWH(Warehouse_path.ConformCancelBtn)
    });
    it('should try to delete a mapped Warehouse with save', async () => {
        await browser.pause(2000);
        await Warehouse_fn.DeleteMapppedWH(Warehouse_path.ConformDeleteBtn)
    });

    it('should validate a Warehouse Name field', async () => {
        await browser.pause(1000)
        await Warehouse_fn.FieldValid(Warehouse_path.errWarehouseName, Warehouseip.errmsgWHName)
    });
    it('should validate a Branch Name field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errAddressName, Warehouseip.errmsgAddressName)
    });
    it('should change the custom Settings mode Optional into Required',async () => {
        await actionsWrappers.scrollEleAndClick(custom_path.CustomTab)
            await custom_fn.Status(custom_path.BranchReq, custom_path.AddressReq, custom_path.LocalityReq, custom_path.CityReq, custom_path.DistrReq, custom_path.StateReq,
               custom_path.PincodeReq, custom_path.CountryReq, custom_path.PrimContactNoReq, custom_path.ContactNoReq, custom_path.TaxReq)
            await custom_fn.snakBarValid(custom_path.SavelBtn)
        await actionsWrappers.scrollEleAndClick(custom_path.CompTab)
    });
    it('should validate a Address field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errAddress, Warehouseip.errmsgAddress)
    });
    it('should validate a Locality field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errLocality, Warehouseip.errmsgLocality)
    });
    it('should validate a Country field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errCountry, Warehouseip.errmsgCountry)
    });
    it('should validate a State field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errState, Warehouseip.errmsgState)
    });
    it('should validate a District field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errDistrict, Warehouseip.errmsgDistrict)
    });
    it('should validate a Pincode field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errPincode, Warehouseip.errmsgPinCode)
    });
    it('should validate a City field', async () => {
        await Warehouse_fn.FieldValid(Warehouse_path.errCity, Warehouseip.errmsgCity)
    });
    it('should change the Customization mode into Optional',async () => {
        await actionsWrappers.scrollEleAndClick(custom_path.CustomTab)
        await custom_fn.Status(custom_path.BranchOpt, custom_path.AddressOpt, custom_path.LocalityOpt, custom_path.CityOpt, custom_path.DistrOpt, custom_path.StateOpt,
            custom_path.PincodeOpt, custom_path.CountryOpt, custom_path.PrimContactNoOpt, custom_path.ContactNoOpt, custom_path.TaxOpt)
         await custom_fn.snakBarValid(custom_path.SavelBtn) 
         await actionsWrappers.scrollEleAndClick(custom_path.CompTab)  
    });



});