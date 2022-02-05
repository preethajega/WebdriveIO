function Termip(){
    const path = require('path');
    this.termUrl="/settings/terms"
    this.delivery='At door step'
    this.delivery1='At door steps'
    this.mode="By Water"
    this.mode1="ByWater"
    this.freight="include with product price of 2%"
    this.freight1="include with product price of2%"
    this.insurance="Exclude small damage"
    this.insurance1="Exclude smalldamage"
    this.packing="with cost"
    this.packing1="withcost"
    this.warrenty="6 months from the date of supply"
    this.warrenty1="6 months from the date ofsupply"
    this.paymentterm="100% within 10 days Invoice"
    this.paymentterm1="100% within 10 daysInvoice"
    this.paycode="Online Tansaction"
    this.orderStatus="invoiced"
    this.dueDays="10"
    this.percentage="100"
    this.percentage1="50"
    this.saveAlert="Changes saved successfully"
    this.termErrAlert="Terms mapped with company preferences can't be deleted" 
    this.paymerrAlert="Terms mapped with company preferences/orders can't be deleted"
    this.paycodeErrmsg="Payment Code required"
    this.payorderErrmsg="Order Status required"
    this.dueDayErrmsg="Days required"
    this.percentageErrmsg="Percentage required"
    this.percentErrMsg2="Sum of percentage must be 100%"
    this.errmsg="Description required"
    this.termAlreExistAlert="At door step term already exist"
    this.errAlert="Description required"
    this.alreExixt="Payment term already exist"
    this.emptyPayAlert="Enter all required values to add other term"

}
module.exports = new Termip();