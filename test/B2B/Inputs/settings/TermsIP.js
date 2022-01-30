function Termip(){
    const path = require('path');
    this.termUrl="/settings/terms"
    this.delivery='At door step'
    this.mode="By Water"
    this.freight="include with product price of 2%"
    this.insurance="Exclude small damage"
    this.packing="with cost"
    this.warrenty="6 months from the date of supply"
    this.paymentterm="100% within 10 days Invoice"
    this.paycode="Online Tansaction"
    this.orderStatus="invoiced"
    this.dueDays="10"
    this.percentage="100"
    this.percentage1="50"

    this.termErrAlert="Terms mapped with company preferences can't be deleted"
    this.paymerrAlert="Terms mapped with company preferences/orders can't be deleted"
    this.termsErrMsg="Description required"
    this.paycodeErrmsg="Payment Code required"
    this.payorderErrmsg="Order Status required"
    this.dueDayErrmsg="Days required"
    this.percentageErrmsg="Percentage required"
    this.percentErrMsg2="Sum of percentage must be 100%"

}
module.exports = new Termip();