function OrderFilterIp(){
    const path = require('path');
    this.OrderandingPageUrl="/orders/order-landing"
    this.submitText="Submit new version"
    this.cancelMsg1="cancel the cloned quote"
    this.cancelMsg2="cancel as a Buyer"
    this.cancelMsg3="cancel as a seller User"
    this.cancelMsg4="cancel as a seller Admin"


    this.StartValue="₹10000"
    this.EndValue="₹20000"
    this.StartTaxableAmount="₹1000"
    this.EndTaxableAmount="₹2000"
    this.StartTotal="₹5000"
    this.EndTotal="₹15000"

    
}
module.exports = new OrderFilterIp();