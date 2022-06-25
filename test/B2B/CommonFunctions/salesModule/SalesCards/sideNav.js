const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/sidNavQuote.page");
const assert = require("assert");



class SidNavCards extends Page {
    DownlaodPdf = async()=>{
        await actionWrapper.Click(path.MoreOptionBtn)
        await actionWrapper.Click(path.DownloadPdfBtn)
    }
    
}
module.exports = new SidNavCards();