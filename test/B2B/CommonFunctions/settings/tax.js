const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const taxip = require("../../Inputs/settings/taxIP");
const path = require("../../PageObjects/Settings/tax.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Tax extends Page {

    async open() {
        super.open(taxip.taxUrl); 
    }
}
module.exports = new Tax();