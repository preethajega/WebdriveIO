const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const customip = require("../../Inputs/settings/customIP");
const path = require("../../PageObjects/Settings/custom.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");

class Custom extends Page {
    async open() {
        super.open(customip.customUrl); 
    }
}
module.exports = new Custom();