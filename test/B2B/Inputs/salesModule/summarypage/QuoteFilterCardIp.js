function QuoteFilterIp(){
    const path = require('path');
    this.QuoteNameOrginal="Automation Quote"
    this.RfqQname="Buyer RFQ"
    this.SPRQuoteName="Buyer SPR"
    this.submitText="Submit new version"
    this.cancelMsg1="cancel the cloned quote"
    this.cancelMsg2="cancel as a Buyer"
    this.cancelMsg3="cancel as a seller User"
    this.cancelMsg4="cancel as a seller Admin"
    this.quotecancelMsg="Quote Cancelled"
    this.QuoteStatus1="order placed"
    this.QuoteStatus2="canceled"
    this.QuoteStatus3="in progress"
    this.QuoteStatus4="quote received"
    this.QuoteStatus5="draft"
    this.QuoteStatus6="order lost"
    this.QuoteStatus7="open"
    this.QuoteStatus8="Approval In Progress"
    this.QuoteStatus9="Quote Approved"
    this.QuoteStatus=""
    this.QuoteStatus=""
    this.StartValue="₹10000"
    this.EndValue="₹20000"
    this.StartTaxableAmount="₹1000"
    this.EndTaxableAmount="₹2000"
    this.StartTotal="₹5000"
    this.EndTotal="₹15000"
    this.quotecancelMsg="Quote Cancelled"

    
    
}
module.exports = new QuoteFilterIp();