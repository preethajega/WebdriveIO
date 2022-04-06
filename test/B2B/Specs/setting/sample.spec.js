const assert = require("assert");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const approval_path = require("../../PageObjects/Settings/Approvals.page");
const approval_fn = require("../../CommonFunctions/settings/approvals")


describe('Zone Page', () => {
    it("Should allow to access login into zone page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await approval_fn.open();
        await actionsWrappers.urlValidation("/approvals");
    });
    it('alert',async () => {
        await browser.pause(5000);
        await browser.refresh();
        // await actionsWrappers.Click(zone_path.DeleData)
        await browser.pause(10000);
        const AlertText = browser.getAlertText()
        console.log(AlertText)
         if ((await AlertText) === "Show notifications") {
            await browser.acceptAlert();
        }
        // await assert.equal("Show notifications",AlertText)
        //             await browser.acceptAlert();

    });
});