const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const approvip = require("../../Inputs/settings/AproveIP");
const path = require("../../PageObjects/Settings/Approvals.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Approval extends Page {

    async open() {
        super.open(approvip.approvUrl); 
    }
}
module.exports = new Approval();