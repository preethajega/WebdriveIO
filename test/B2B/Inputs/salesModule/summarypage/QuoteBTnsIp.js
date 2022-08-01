let today =  new Date().toISOString().replace(/\/|-|:|/g,'').slice(4,-7);

function QuoteIP(){
    const path = require('path');
    this.QuotelandingPageUrl="/Quotes/Quote-landing"
    this.OrderandingPageUrl="/orders/order-landing"
    this.ReqApprovalBtnTxt="REQUEST APPROVAL"
    this.CreateQuoteBtnTxt="CREATE QUOTE"
    this.CreateQuoteBtnTxt1="Create Quote"
    this.SPRQuoteName="Buyer SPR"
    this.RfqQuoteName="Buyer RFQ"
    this.QuoteName1="Approval"+today+"Quote"
    this.QuoteName="Automation"+today+"Quote"
    this.EditQuoteName ="Quote Name"+today+"Edited"
    this.comments="Automation Commenting on"+today+"Ok"
    this.Approvercomments="Automation Approved on"+today+"Ok"
    this.ApproverName="preethaAdmin"
    this.ApproverName1="preetha"
    this.ApproverName2="JP"
    this.ApproverName3="Growmax"
    this.ApproverName4="yeshayahu"
    this.ApproverName5="madhan"
    this.CreateQuoteText="Create Quote"
    this.ErrMsgcreateQuoteName="Name is required"
    this.ErrMsgReqApprovalQuoteName="Quote name required"
    this.ErrMsgApprover="Select a approver"
    this.ErrMsgCommentName="Comments is required"
    this.ReqApprovalAlert="Quote requires approval"
    this.tempQuoteID="QMBM22070035"
}
module.exports = new QuoteIP();