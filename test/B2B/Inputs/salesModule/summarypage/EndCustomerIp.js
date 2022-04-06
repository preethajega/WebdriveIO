function EndCusip(){
    const path = require('path');
    this.approvUrl="/settings/approvals"
    this.date="15"
    this.date1="21"
    this.EndCusRefNum="CUS123"
    this.EndCusRefNum1="CUS321"
    this.EndCusName="Depan"
    this.EndCusName1="Raja"
    this.EndCusProject="Metal"
    this.EndCusProject1="Rubber"
    this.EndCusCompititers="FNP"
    this.EndCusCompititers1="SSN"
    this.ReqDeliveryDate ="Provide required delivery date"
    this.EndCusPriceJustification="Give me on this Amount"
    this.EndCusPriceJustification1="I have Accepted from client for this Amount Only"
    this.ErrMsgEndCusTillDate="End date can't be before start date"
    this.ErrMsgEndCusName="End customer name is required"
    this.ErrMsgProjectName="Project name is required"
    this.ErrMsgCompetitors="Competitor name(s) is required"
    this.ErrMsgPriceJustification="Price justification is required"
}
module.exports = new EndCusip();