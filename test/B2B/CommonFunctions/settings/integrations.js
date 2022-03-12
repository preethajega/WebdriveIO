const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const path = require("../../PageObjects/Settings/profile.page");
var integrationIp= require("../../Inputs/settings/integrations.Ip");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class integration extends Page {

    async open() {
        super.open(integrationIp.IntegrationUrl); 
    }
}
module.exports = new integration();