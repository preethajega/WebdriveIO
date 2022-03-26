function Approvalip(){
    const path = require('path');
    this.approvUrl="/settings/approvals"
    this.deliverTerm="Door Delivery"
    this.paymentTerm="100% within 10 days Invoice"
    this.paymentTerm1="60 days from the date of invoice"
    this.paymentTerm2="40 days from the date of invoice"
    this.warrantyTerm="6 Months From Date of Invoice "
    this.warrantyTerm1="1 Years From Date of Invoice "
    this.PFTerms="10% of total value"
    this.PFTerm1="20% of total value"
    this.ModeOFDispatchTerm2="Door Delivery"
    this.ModeOFDispatchTerm="By Air"
    this.ModeOFDispatchTerm1="By Road"
    this.FreightTerm="Extra at actuals"
    this.FreightTerm1="Door Delivery"
    this.insuranceTerm1="Door Delivery"
    this.insuranceTerm="Excluded. Buyer Scope"
    this.AddtionalTerm="Door Delivery"
    this.AddtionalTerm1="Door Delivery"
}
module.exports = new Approvalip();