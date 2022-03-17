const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summary page/termsCard.page");
const assert = require("assert");



class termsCard extends Page {

    TermsActions =async(termPath,termIp)=>{
        await actionWrapper.clearValueAndSetValueSelectDropdown(termPath,termIp)
    }

}
module.exports = new termsCard();