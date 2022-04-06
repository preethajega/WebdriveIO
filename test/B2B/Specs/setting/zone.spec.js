const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const zone_path = require("../../PageObjects/Settings/zone.page");
const zone_fn = require("../../CommonFunctions/settings/zone")
var zoneip = require("../../Inputs/settings/zoneIP");
const common = require("../../PageObjects/Common/commonObjects");

describe('Zone Page', () => {
    it("Should allow to access login into zone page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await zone_fn.open();
        await actionsWrappers.urlValidation("/zones");
    });
    it('alert',async () => {
        // await browser.pause(5000)
        // await browser.refresh();
        // await actionsWrappers.Click(zone_path.DeleData)
        await browser.pause(10000)
        const AlertText = browser.getAlertText()
        console.log(AlertText)
        // await assert.equal("Show notifications",AlertText)
        //             await browser.acceptAlert();

        if (await AlertText === "Show notifications") {
            await browser.acceptAlert();
        }
    });
    it('should Add a new zone with cancel', async () => {
        await browser.pause(3000)
        await zone_fn.AddZone()
        await zone_fn.snakvalid(zone_path.CancelBtn, common.snackbar, zoneip.saveAlert)
    });
    it('alert',async () => {
        // await browser.pause(5000)
        // await browser.refresh();
        // await actionsWrappers.Click(zone_path.DeleData)
        await browser.pause(10000)
        const AlertText = browser.getAlertText()
        console.log(AlertText)
        // await assert.equal("Show notifications",AlertText)
        //             await browser.acceptAlert();

        if (await AlertText === "Show notifications") {
            await browser.acceptAlert();
        }
    });
    // it('should Add a New Zone with save', async () => {
    //     await zone_fn.AddZone()
    //     await zone_fn.snakvalid(zone_path.saveBtn, common.snackbar, zoneip.saveAlert)
    // });
    // it('should delete a  created New Zone with cancel', async () => {
    //     await zone_fn.Deletezone()
    //     await zone_fn.snakvalid(zone_path.ConfCancelBtn, common.snackbar, zoneip.deleteAlert)
    // });
    // it('should delete a created New Zone with delete', async () => {
    //     await zone_fn.Deletezone()
    //     await zone_fn.snakvalid(zone_path.ConfDeleBtn, common.snackbar, zoneip.deleteAlert)
    // });
    // it('should validate a branch Field', async () => {
    //     await zone_fn.MandtoryFieldvalid()
    //     await zone_fn.snakvalid(zone_path.saveBtn, zone_path.errBranch, zoneip.errbranch)
    //     await actionsWrappers.Click(zone_path.CancelBtn)
    // });


});