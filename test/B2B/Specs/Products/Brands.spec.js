const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Brands_path = require("../../PageObjects/Products/Brands.page");
const Brand_fn = require("../../CommonFunctions/Products/Brands");
var BrandsIp = require("../../Inputs/Products/BrandsIp");
const common = require("../../PageObjects/Common/commonObjects");
const commonObjects = require("../../PageObjects/Common/commonObjects");

describe('Brands Page', () => {
    it("Should allow to access login into Brands Page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await Brand_fn.open();
        await actionsWrappers.urlValidation("/brands");
    });

    it("Should not allow to delete the mapped Brand ", async () => {
        await Brand_fn.DeleteBrand(commonObjects.yes);
        await browser.pause(2000);
       // await actionsWrappers.snackBarValidate(commonObjects.snackbar,BrandsIp.deleteAlert);
    });

    it("Should not allow to Create Empty Brand ", async () => {
        await Brand_fn.CreateBrand("",commonObjects.acceptDailog);
        await actionsWrappers.snackBarValidate(Brands_path.RequiredAlert,BrandsIp.ErrBrandname);
        await actionsWrappers.Click(commonObjects.cancelDailog);
    });


    it("Create Brand and Cancel ", async () => {
      await Brand_fn.CreateBrand(BrandsIp.BrandName,commonObjects.cancelDailog);
     });

    it("Create Brand and save ", async () => {
        await Brand_fn.CreateBrand(BrandsIp.BrandName,commonObjects.acceptDailog);
        await actionsWrappers.snackBarValidate(commonObjects.snackbar,BrandsIp.saveAlert);
     });

    it("uploadImage and Cancel ", async () => {
        await Brand_fn.UploadLogo(BrandsIp.imageUpload,commonObjects.CancelBtn)
     });

    it("uploadImage and Save ", async () => {
        await Brand_fn.UploadLogo(BrandsIp.imageUpload,commonObjects.SaveBtn)
        await actionsWrappers.snackBarValidate(commonObjects.snackbar,BrandsIp.UploadSucess);
     });


    it("Should not allow to Create Duplicate Brand ", async () => {
        await Brand_fn.CreateBrand(BrandsIp.BrandName,commonObjects.acceptDailog);
        await actionsWrappers.snackBarValidate(Brands_path.AlreadyExisits,BrandsIp.AlreadyExsists);
        await actionsWrappers.Click(commonObjects.cancelDailog);
    });

    it("Delete Brand and Cancel ", async () => {
        await Brand_fn.DeleteBrand(commonObjects.CancelBtn);

    });

    it("Delete Brand and Save ", async () => {
        await Brand_fn.DeleteBrand(commonObjects.yes);
        await actionsWrappers.snackBarValidate(commonObjects.snackbar,BrandsIp.deleteSucess);

    });





});