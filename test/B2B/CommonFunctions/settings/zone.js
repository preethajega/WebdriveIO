const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const zoneip = require("../../Inputs/settings/zoneIP");
const path = require("../../PageObjects/Settings/zone.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");

class Zone extends Page {
    async open() {
        super.open(zoneip.zoneUrl); 
    }
}
module.exports = new Zone();