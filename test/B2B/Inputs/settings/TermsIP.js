function Termip(){
    const path = require('path');
    this.termUrl="/settings/terms"
    this.delivery='At door step'
    this.delivery1='At door steps'
    this.deliverycode="DT123"
    this.deliverycode1="DT321"

    this.mode="By Water"
    this.mode1="ByWater"
    this.modecode="MO123"
    this.modecode1="MO321"

    this.freight="include with product price of 2%"
    this.freight1="include with product price of2%"
    this.freightcode="FR123"
    this.freightcode1="FR321"

    this.insurance="Exclude small damage"
    this.insurance1="Exclude smalldamage"
    this.insurancecode="IN123"
    this.insurancecode1="IN321"

    this.percent="10"
    this.percent2="20"
    this.value="12"
    this.value2="30"
    this.packing="with cost"
    this.packing1="withcost"
    this.PFcode="PF123"
    this.PFcode1="PF321"

    this.warrenty="6 months from the date of supply"
    this.warrenty1="6 months from the date ofsupply"
    this.warrentycode="WA123"
    this.warrentycode1="WA321"

    this.paymentterm="100% within 10 days of Invoice"
    this.paymentterm1="100% within 10 daysInvoice" 
    this.paycode="Online Tansaction"
    this.orderStatus="invoiced"
    this.dueDays="10"
    this.percentage="100"
    this.percentage1="50"
    this.codeAlert="Code already exist."
    this.deliveryAlert="At door step term already exist"
    this.modeAlert="By Water term already exist"
    this.frightAlert="include with product price of 2% term already exist"
    this.insuranceAlert="Exclude small damage term already exist"
    this.PFAlert="with cost term already exist"
    this.warrentyAlert="6 months from the date of supply term already exist"
    this.paymentAlert="Payment term already exist"
    this.saveAlert="Changes saved successfully"
    this.termErrAlert="Terms mapped with company preferences can't be deleted" 
    this.paymerrAlert="Terms mapped with company preferences/orders can't be deleted"
    this.paycodeErrmsg="Payment Code required"
    this.payorderErrmsg="Order Status required"
    this.dueDayErrmsg="Days required"
    this.percentageErrmsg="Percentage required"
    this.percentErrMsg2="Sum of percentage must be 100%"
    this.errmsg="Description required"
    this.errAlert="Description required"
    this.emptyPayAlert="Enter all required values to add other term"

}
module.exports = new Termip();