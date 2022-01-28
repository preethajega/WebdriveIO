const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const Branch_path = require("../../../PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const Branch_fn= require("../../../CommonFunctions/settings/branch");
//var Branchip= require("../../../Inputs/settings/BranchIP");


describe('Company Page', () => {
    it("Should allow to access login into company page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  Branch_fn.open();
        await  actionsWrappers.urlValidation("/company");
        });
    it('should open Dashboard company', async () => {
        await browser.url("https://dev.myapptino.com/settings/company")
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
        browser.pause(1000);
    });

    it('should Add a new branch with AutoFill & saving', async() => {
        await Branch_fn.AddBranchByAutoFill(Branch_path.SaveBtn);
        browser.pause(1000);
    });
    it('should Add a new branch with AutoFill & cancel', async() => {
        
        await Branch_fn.AddBranchByAutoFill(Branch_path.CancelBtn);
    });
    it('should delete a selected Address with CabcelBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformCancelBtn)   
    });
    it('should delete a selected Address with DeleteBtn',async () => {
        await Branch_fn.DeleteBranchAddress(Branch_path.ConformDeleteBtn)
        browser.pause(1000);
    });

    it('should edit the selected Branch with canceling',async () => {
        
        await Branch_fn.EditBranchAddress(Branch_path.CancelBtn)
        browser.pause(1000);
    });
    it('should edit the selected Branch with Save',async () => {
        await Branch_fn.EditBranchAddress(Branch_path.SaveBtn)
        browser.pause(1000);
    });
    it('should try to delete a mapped Brach with cancel',async () => {
         await Branch_fn.DeleteMapppedBranch(Branch_path.CancelBtn)
         browser.pause(1000);
    });
    it('should try to delete a mapped Brach with save',async () => {
        await Branch_fn.DeleteMapppedBranch(Branch_path.SaveBtn)
        browser.pause(1000);
    });
});