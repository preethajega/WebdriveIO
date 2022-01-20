
const Branch_path = require("../../../PageObjects/Settings/AddBranch.page");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const Branch_fn= require("../../../CommonFunctions/settings/branch");
//var Branchip= require("../../../Inputs/settings/BranchIP");


describe('open a application', () => {
    before('login',async () => {
        await browser.url("https://dev.myapptino.com/auth/login");
        await browser.maximizeWindow()
        browser.pause(2000);
        const username = await $("//input[@name='Username']");
        await username.click();
        await username.setValue("admin@apptino.com");
        const password = await $("//input[@name='Password']");
        await password.click();
        await password.setValue("Admin@123");
        const signin = await $("//button[@id='loadingButton']")
        await signin.click();
        await browser.pause(5000);
        let handle = await browser.getWindowHandle();
        await browser.switchToWindow(handle);
        await browser.pause(3000);
    
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