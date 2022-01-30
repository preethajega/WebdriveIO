function Approvalip(){
    const path = require('path');
    this.approvUrl="/settings/approvals"
    this.approvName="Defalut Approval"
    this.approvName2="DefalutApproval"
    this.approPrecedence="10"
    this.optionalAppr="On Expiry"
    this.grpName="Approver"
    this.precedence="4"
    this.precedence2="2"
    this.approver1="preetha"
    this.approver2="ray"
    this.endRange="10"
    this.errmsgApprName="Name required"
    this.saveAlert="Saved successfully"
    this.deleAlert="Deleted succesfully"
    this.changalert="Changes saved successfully"
    this.errmapedGrp="User group exists in range mapping. Please remove approver group from range before deleting"
}
module.exports = new Approvalip();