const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const Branch_path = require("../../../PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const Branch_fn= require("../../../CommonFunctions/settings/branch");
var Branchip= require("../../../Inputs/settings/BranchIP");


describe('Branch card', () => {
    it("Should allow to access login into Branch card ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  Branch_fn.open();
        await  actionsWrappers.urlValidation("/company");
        });

    it('should Add a new Branch with saving',async () => {
        await Branch_fn.AddBranch(Branch_path.SaveBtn)
    });
    it('should Add a new Branch with cancel',async () => {
        await Branch_fn.AddBranch(Branch_path.CancelBtn)
    });

    it('should delete a selected Address with CabcelBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformCancelBtn)   
    });
    it('should delete a selected Address with DeleteBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformDeleteBtn)
        await browser.pause(1000)
    });

    it('should Add a new branch with AutoFill & saving', async() => {
        await browser.pause(1000)
        await Branch_fn.AddBranchByAutoFill(Branch_path.SaveBtn);
    });
    it('should Add a new branch with AutoFill & cancel', async() => {
        await browser.pause(2000)
        await Branch_fn.AddBranchByAutoFill(Branch_path.CancelBtn);
    });
    it('should edit the selected Branch with canceling',async () => {
        await browser.pause(1000)
        await Branch_fn.EditBranchAddress(Branch_path.CancelBtn)
    });
    it('should edit the selected Branch with Save',async () => {
        await browser.refresh()
        await Branch_fn.EditBranchAddress(Branch_path.SaveBtn)
    });
        it('should delete a selected Address with CabcelBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformCancelBtn)   
    });
    it('should delete a selected Address with DeleteBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformDeleteBtn)
        await browser.pause(1000)
    });
    it('should try to delete a mapped Brach with cancel',async () => {
        await browser.pause(1000)
         await Branch_fn.DeleteMapppedBranch(Branch_path.ConformCancelBtn)
    });
    it('should try to delete a mapped Brach with save',async () => {
        await browser.pause(1000)
        await Branch_fn.DeleteMapppedBranch(Branch_path.ConformDeleteBtn)
    });
    it('should validate a Branch Name field',async () => {
        await browser.pause(1000)
        await Branch_fn.FieldValid(Branch_path.errBranchName,Branchip.errmsgBranchName)
    });
    it('should validate a Address field',async () => {
        await Branch_fn.FieldValid(Branch_path.errAddress,Branchip.errmsgAddress)
    });
    it('should validate a Locality field',async () => {
        await Branch_fn.FieldValid(Branch_path.errLocality,Branchip.errmsgLocality)
    });
    it('should validate a Country field',async () => {
        await Branch_fn.FieldValid(Branch_path.errCountry,Branchip.errmsgCountry)
    });
    it('should validate a State field',async () => {
        await Branch_fn.FieldValid(Branch_path.errState,Branchip.errmsgState)
    });
    it('should validate a District field',async () => {
        await Branch_fn.FieldValid(Branch_path.errDistrict,Branchip.errmsgDistrict)
    });
    it('should validate a Pincode field',async () => {
        await Branch_fn.FieldValid(Branch_path.errPincode,Branchip.errmsgPinCode)
    });
    it('should validate a City field',async () => {
        await Branch_fn.FieldValid(Branch_path.errCity,Branchip.errmsgCity)
    });
    it('should validate a Tax field',async () => {
        await Branch_fn.FieldValid(Branch_path.errTax,Branchip.errmsgTax)
    });
    it('should validate a Contact Name field',async () => {
        await Branch_fn.FieldValid(Branch_path.errContactNam,Branchip.errmsgContactName)
    });
    it('should validate a Contact Number field',async () => {
        await Branch_fn.FieldValid(Branch_path.errContactNumb,Branchip.errmsgContactNumb)
    });

    it('santy',async () => {
        await Branch_fn.AddBranch(Branch_path.SaveBtn)
        await browser.pause(1000)
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformDeleteBtn)
        await browser.pause(1000)
        await Branch_fn.AddBranchByAutoFill(Branch_path.SaveBtn)
        await browser.refresh()
        await Branch_fn.EditBranchAddress(Branch_path.SaveBtn)
        await browser.pause(1000)
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformDeleteBtn)
        await browser.pause(1000)
        await Branch_fn.DeleteMapppedBranch(Branch_path.ConformDeleteBtn)
        await Branch_fn.FieldValid(Branch_path.errBranchName,Branchip.errmsgBranchName)
        await Branch_fn.FieldValid(Branch_path.errAddress,Branchip.errmsgAddress)
        await Branch_fn.FieldValid(Branch_path.errLocality,Branchip.errmsgLocality)
        await Branch_fn.FieldValid(Branch_path.errCountry,Branchip.errmsgCountry)
        await Branch_fn.FieldValid(Branch_path.errState,Branchip.errmsgState)
        await Branch_fn.FieldValid(Branch_path.errDistrict,Branchip.errmsgDistrict)
        await Branch_fn.FieldValid(Branch_path.errPincode,Branchip.errmsgPinCode)
        await Branch_fn.FieldValid(Branch_path.errCity,Branchip.errmsgCity)
        await Branch_fn.FieldValid(Branch_path.errTax,Branchip.errmsgTax)
        await Branch_fn.FieldValid(Branch_path.errContactNam,Branchip.errmsgContactName)
        await Branch_fn.FieldValid(Branch_path.errContactNumb,Branchip.errmsgContactNumb)
    });

});