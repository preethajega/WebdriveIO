const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const termip = require("../../Inputs/settings/TermsIP");
const path = require("../../PageObjects/Settings/terms.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Term extends Page {

    async open() {
        super.open(termip.termUrl); 
    }
}
module.exports = new Term();