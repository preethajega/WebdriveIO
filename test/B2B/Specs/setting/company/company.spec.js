const assert = require("assert");
const path = require("path");
const Comp_path = require("../../../PageObjects/Settings/company.page");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const Comp_fn = require("../../../CommonFunctions/settings/Company");
var Compip = require("../../../Inputs/settings/CompanyIP");
const imageUpload = path.join(__dirname, './../../FileUtils/profilepic.png');
const common = require("../../../PageObjects/Common/commonObjects");
const { should } = require("chai");



describe('Company Page', () => {
    it("Should allow to access login into company page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await Comp_fn.open();
        await actionsWrappers.urlValidation("/company");
    });
    it('should Validate a company details by updating a Logo with valid files', async () => {
        await Comp_fn.UploadLogo(Comp_path.savebtn);
        await actionsWrappers.snackBarValidate(common.snackbar,Compip.saveAlert)
    });
    it('should validate a company details by updating a CompanyName with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details updating a CompanyName values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname1, Comp_path.cancelbtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details updating EBNno a values with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.EPNOName, Compip.ebno, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details updating a EBNno values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.EPNOName, Compip.ebno1, Comp_path.cancelbtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details updating SubIndustry a values with saving', async () => {
        await Comp_fn.Updatedropdown(Comp_path.SubIndustry,Comp_path.SubIndustry,Compip.subindustry,Comp_path.savebtn)
    });
    it('should validate a company details updating a SubIndustry values with cancel', async () => {
        await Comp_fn.Updatedropdown(Comp_path.SubIndustry,Comp_path.SubIndustry,Compip.subindustry1,Comp_path.cancelbtn)
    }); 
    it('should validate a company details updating website a values with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.website, Compip.website, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details updating a website values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.website, Compip.website1, Comp_path.cancelbtn,common.snackbar,Compip.saveAlert);
    });
    it('should validate a company details website by invalid inputs', async () => {
        await Comp_fn.WebsiteFieldValid(Comp_path.savebtn)
    });
    it('should not allow a user to save the Company Name field without entering any values', async () => {
        await Comp_fn.fieldValid(Comp_path.CompName, Comp_path.errCompName, Compip.errMsgcompname)
    });
     it('should allow a user to save the Subindustry without entering any values ',async () => {
        await browser.pause(6000)
        await Comp_fn.clearDropdown(Comp_path.SubIndustry,Comp_path.savebtn)
        await browser.pause(6000)

    });
// /*    it('should validate a acc type Refelected text', async () => {
//         await Comp_fn.Acctypeinertxt(Comp_path.RefelectTxt)
//     }); */
    it('should replace the all the changed data into orginal',async () => {
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.OrgComName, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
        await Comp_fn.Updatevalue(Comp_path.EPNOName, Compip.orgEbno, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
        await Comp_fn.Updatedropdown(Comp_path.SubIndustry,Comp_path.SubIndustry,Compip.orgSubIndustry,Comp_path.savebtn)
        await Comp_fn.Updatevalue(Comp_path.website, Compip.OrgWebSite, Comp_path.savebtn,common.snackbar,Compip.saveAlert);
    });

});