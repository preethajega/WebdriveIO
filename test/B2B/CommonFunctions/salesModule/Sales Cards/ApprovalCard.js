const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summary page/Attach_Tag_Comment.page");
const assert = require("assert");



class ApprovalsCard extends Page {

    AddApproval = async(approvalPath,ApprovalIp)=>{
        await browser.pause(1000)
        await actionWrapper.clearValueAndSetValueSelectDropdown(approvalPath,ApprovalIp)
        await browser.pause(1000)
    }
}
module.exports = new ApprovalsCard();