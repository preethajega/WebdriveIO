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
const imageUpload = path.join(__dirname, '../../FileUtils/profilepic.png');
const common = require("../../PageObjects/Common/commonObjects");
const gen_path = require("../../PageObjects/Settings/General.page");
const gen_fn = require("../../CommonFunctions/settings/general")
var genip = require("../../Inputs/settings/GeneralIP");


describe('Settings Page', () => {
    it("Should allow to access login into Profile page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await profile_fn.open();
        await actionsWrappers.urlValidation("/profile");
    });
    it('should Validate a APP Setup by updating a Logo with valid files', async () => {
        await browser.pause(5000)
        await profile_fn.UploadLogo1(Comp_path.savebtn);
        await browser.pause(2000);
        await actionsWrappers.snackBarValidate(common.snackbar, profileip.saveAlert)
        await browser.pause(3000);
    });
    it('should update a name Filed in the Profile Settings page with save', async () => {
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.Name, profileip.name, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
    });
    it('should update a Mobile Number Filed in the Profile Settings page with save', async () => {
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.MobNum, profileip.Mobnum, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
    });
    it('should update a Alternative Mobile Number Filed in the Profile Settings page with save', async () => {
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.AlterMobNum, profileip.AlterMobNum, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
    });
    it('should update a Akternatve Email Filed in the Profile Settings page with save', async () => {
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.AlterEmail, profileip.AlterMail, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
    });

    /* ************* PREFERENCE CARD ************** */

    it('should edit the Date & display Format with cancel', async () => {
        await actionsWrappers.scrollEle(profile_path.DateDisply)
        await gen_fn.EditRegionalSetting(profile_path.DateDisply, profile_path.DateDisply, genip.date, gen_path.EditCancelbtn,
            common.snackbar, profileip.saveAlert)
    });
    it('should edit the Date & display Format with save', async () => {
        await actionsWrappers.scrollEle(profile_path.DateDisply)
        await gen_fn.EditRegionalSetting(profile_path.DateDisply, profile_path.DateDisply, genip.date, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)
    });
    it('should edit the Time & display Format with cancel', async () => {
        await actionsWrappers.scrollEle(profile_path.TimeDisply)
        await gen_fn.EditRegionalSetting(profile_path.TimeDisply, profile_path.TimeDisply, genip.time, gen_path.EditCancelbtn,
            common.snackbar, profileip.saveAlert)
    });
    it('should edit the Time & display Format with save', async () => {
        await actionsWrappers.scrollEle(profile_path.TimeDisply)
        await gen_fn.EditRegionalSetting(profile_path.TimeDisply, profile_path.TimeDisply, genip.time, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)
    });
    it('should edit the  Time zone Format with cancel', async () => {
        await actionsWrappers.scrollEle(profile_path.TimeZone)
        await gen_fn.EditRegionalSetting(profile_path.TimeZone, profile_path.TimeZone, genip.timezone, gen_path.EditCancelbtn,
            common.snackbar, profileip.saveAlert)
    });
    it('should edit the  Time zone Format with save', async () => {
        await actionsWrappers.scrollEle(profile_path.TimeZone)
        await gen_fn.EditRegionalSetting(profile_path.TimeZone, profile_path.TimeZone, genip.timezone, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)
    });

    it('should change the changed data into orginal data', async () => {
        await browser.refresh();
        await browser.pause(4000);
        await profile_fn.UploadLogo1(Comp_path.savebtn);
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.Name, profileip.OrgProfileName, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.MobNum, profileip.OrgMobNum, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.AlterMobNum, profileip.OrgAlterMobNum, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
        await browser.pause(2000);
        await Comp_fn.Updatevalue(profile_path.AlterEmail, profileip.OrgAlterEmail, Comp_path.savebtn, common.snackbar, profileip.saveAlert);
        await actionsWrappers.scrollEle(profile_path.DateDisply)
        await gen_fn.EditRegionalSetting(profile_path.DateDisply, profile_path.DateDisply, genip.date, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)
        await actionsWrappers.scrollEle(profile_path.TimeDisply)
        await gen_fn.EditRegionalSetting(profile_path.TimeDisply, profile_path.TimeDisply, genip.time, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)
        await actionsWrappers.scrollEle(profile_path.TimeZone)
        await gen_fn.EditRegionalSetting(profile_path.TimeZone, profile_path.TimeZone, genip.timezone, gen_path.EditSavebtn,
            common.snackbar, profileip.saveAlert)

    });
});