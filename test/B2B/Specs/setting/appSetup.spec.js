const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const profile_path = require("../../PageObjects/Settings/profile.page");
const profile_fn = require("../../CommonFunctions/settings/profile");
var profileip = require("../../Inputs/settings/profileIP");
const Comp_fn = require("../../CommonFunctions/settings/Company");
const Comp_path = require("../../PageObjects/Settings/company.page");
const Compip = require("../../Inputs/settings/CompanyIP");
const imageUpload = path.join(__dirname, './../../FileUtils/profilepic.png');
const common = require("../../PageObjects/Common/commonObjects");


describe('App SetUp Page', () => {
    it("Should allow to access login into App SetUp page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await profile_fn.open2();
        await actionsWrappers.urlValidation("/app");
    });
    it('should Validate a APP Setup by updating a Logo with valid files', async () => {
        await browser.pause(5000)
        await profile_fn.UploadLogo(Comp_path.savebtn);
        await browser.pause(2000);  
        await actionsWrappers.snackBarValidate(common.snackbar,profileip.AppSaveAlert)
        await browser.pause(3000);  
    });
    it('should update a name Filed in the App Setup page with save',async () => {
        await browser.refresh()  
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname, Comp_path.savebtn,common.snackbar,profileip.AppSaveAlert);
    });
    it('should update a name Filed in the App Setup page with cancel',async () => {
        await browser.pause(2000);  
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname1, Comp_path.cancelbtn,common.snackbar,profileip.AppSaveAlert);
    });
    it('should not allow a user to save the Company Name field without entering any values', async () => {
        await browser.pause(2000);  
        await Comp_fn.fieldValid(Comp_path.CompName, profile_path.ErrName, profileip.errName)
    });
    it('should change the orginal data to the App Setup Page',async () => {
        await browser.pause(2000);  
        await Comp_fn.Updatevalue(Comp_path.CompName, profileip.orgName, Comp_path.savebtn,common.snackbar,profileip.AppSaveAlert);
    });

});