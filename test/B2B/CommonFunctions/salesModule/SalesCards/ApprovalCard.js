const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Approvalip = require("../../../Inputs/salesModule/summarypage/ApprovalsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const assert = require("assert");



class ApprovalsCard extends Page {

    AddApproval = async(approvalPath,ApprovalIp)=>{
        await browser.pause(1000)
        await actionWrapper.clearValue_selectDropdownvalue(approvalPath,ApprovalIp)
        await browser.pause(1000)
    }
}
module.exports = new ApprovalsCard();