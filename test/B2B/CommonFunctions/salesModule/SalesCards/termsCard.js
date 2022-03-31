const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/termsCard.page");
const assert = require("assert");



class termsCard extends Page {

    TermsActions =async(termPath,termIp)=>{
        await actionWrapper.MoveTo(termPath)
        await actionWrapper.clearValue_selectDropdownvalue(termPath,termIp)
    }
    AddtionalTerm = async(termPath,termIp)=>{
        await actionWrapper.MoveTo(termPath)
        await actionWrapper.clickAndSetvalue(termPath,termIp)
    }

}
module.exports = new termsCard();