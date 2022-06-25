const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const compitie_path = require("../../PageObjects/Settings/competitors.page");
const compitie_fn = require("../../CommonFunctions/settings/competitors")
var compitieip = require("../../Inputs/settings/competitorsIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Compitiers Page', () => {
    it("Should allow to access login into Compitiers page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await compitie_fn.open();
        await actionsWrappers.urlValidation("/competitors");
        await browser.pause(3000)
    });
    it('should Add a new Compititers with save btn', async () => {
        await compitie_fn.AddComp(common.snackbar, compitieip.saveAlert)
    });
    it('should not allow a user to enter the same Compititers name', async () => {
        await compitie_fn.AddComp(common.snackbar, compitieip.alredyExistAlert)
        await browser.pause(3000)
        await compitie_fn.DeleComp(compitie_path.CancelBtn)
    });
    it('should delete the created Compititers with cancel', async () => {
        await compitie_fn.DeleComp(compitie_path.CancelBtn)
    });
    it('should delete the created Compititers with save', async () => {
        await browser.refresh()
        await compitie_fn.DeleComp(compitie_path.Savebtn)
    });
    it('should not allow a user to enter another Compititers field without entering any inputs', async () => {
        await compitie_fn.emptyAlert()
    });

});