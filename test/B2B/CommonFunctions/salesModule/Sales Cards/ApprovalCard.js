const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Approvalip = require("../../../Inputs/salesModule/summary page/ApprovalsIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summary page/Attach_Tag_Comment.page");
const assert = require("assert");



class ApprovalsCard extends Page {

    async open() {
        super.open(Approvalip.approvUrl); 
    }

    AddApproval = async(approvalPath,ApprovalIp)=>{
        await browser.pause(1000)
        await actionWrapper.clearValueAndSetValueSelectDropdown(approvalPath,ApprovalIp)
        await browser.pause(1000)
    }
}
module.exports = new ApprovalsCard();