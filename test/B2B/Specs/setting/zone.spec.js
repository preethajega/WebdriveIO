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
    it('should Add a new zone with cancel',async () => {
        await zone_fn.AddZone(zone_path.CancelBtn)
    });
    it('should Add a New Zone with save',async () => {
        await zone_fn.AddZone(zone_path.saveBtn)
        await zone_fn.snakvalid(common.snackbar,zoneip.saveAlert)
    });
    it('should delete a  created New Zone with cancel',async () => {
        await zone_fn.Deletezone(zone_path.ConfCancelBtn)
    });
    it('should delete a created New Zone with delete',async () => {
        await zone_fn.Deletezone(zone_path.ConfDeleBtn)
        await zone_fn.snakvalid(common.snackbar,zoneip.deleteAlert)
    });
    it('should validate a branch Field',async () => {
        await zone_fn.MandtoryFieldvalid()
        await zone_fn.snakvalid(zone_path.errBranch,zoneip.errBranch)
        await actionsWrappers.Click(zone_path.CancelBtn)
    });


});