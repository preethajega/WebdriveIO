let today =  new Date().toISOString().replace(/\/|-|:|/g,'').slice(4,-7);

function QuoteIP(){
    const path = require('path');
    this.QuoteDetailsPageUrl="/Quotes/Quote-landing"
    this.ReqApprovalBtnTxt="REQUEST APPROVAL"
    this.CreateQuoteBtnTxt="CREATE QUOTE"
    this.QuoteName="Automation"+today+"Quote"
    this.comments="Automation Commenting on"+today+"Ok"
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
}
module.exports = new QuoteIP();