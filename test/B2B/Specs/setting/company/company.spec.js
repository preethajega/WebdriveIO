const assert = require("assert");
const path = require("path");
const Comp_path = require("../../../PageObjects/Settings/company.page");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const Comp_fn = require("../../../CommonFunctions/settings/ComP");
var Compip = require("../../../Inputs/settings/CompanyIP");
const imageUpload = path.join(__dirname, './../../FileUtils/profilepic.png');


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
        await actionsWrappers.snackBarValidate(common.snackbar,compIp.saveAlert)
    });
    it('should validate a company details by updating a CompanyName with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname, Comp_path.savebtn);
    });
    it('should validate a company details updating a CompanyName values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.CompName, Compip.compname1, Comp_path.cancelbtn);
    });
    it('should validate a company details updating EBNno a values with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.EPNOName, Compip.ebno, Comp_path.savebtn);
    });
    it('should validate a company details updating a EBNno values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.EPNOName, Compip.ebno1, Comp_path.cancelbtn);
    });
/*    it('should validate a company details updating SubIndustry a values with saving', async () => {
        await Comp_fn.Updatedropdown(Comp_path.savebtn)
    });
    it('should validate a company details updating a SubIndustry values with cancel', async () => {
        await Comp_fn.Updatedropdown(Comp_path.cancelbtn)
    }); */
    it('should validate a company details updating website a values with saving', async () => {
        await Comp_fn.Updatevalue(Comp_path.website, Compip.website, Comp_path.savebtn);
    });
    it('should validate a company details updating a website values with cancel', async () => {
        await Comp_fn.Updatevalue(Comp_path.website, Compip.website1, Comp_path.cancelbtn);
    });
    it('should validate a company details website by invalid inputs', async () => {
        await Comp_fn.WebsiteFieldValid()
    });
    it('should not allow a user to save the Company Name field without entering any values', async () => {
        await Comp_fn.fieldValid(Comp_path.CompName, Comp_path.errCompName, Compip.errMsgcompname)
    });
/*    it('should validate a acc type Refelected text', async () => {
        await Comp_fn.Acctypeinertxt(Comp_path.RefelectTxt)
    }); */


});