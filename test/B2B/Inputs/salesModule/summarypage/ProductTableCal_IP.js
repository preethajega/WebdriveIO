function ProductTableCalIp(){
    const path = require('path');
    this.SettingModuleUrl="/settings/modules"
    this.QuoteSummaryUrl="/checkout/quote-summary"
    this.ULP1=500
    this.ULP2=700
    this.ULP3=1500
    this.DIS1=5
    this.DIS2=15
    this.DIS3=20

    this.UP=500
    this.UP1=650
    this.Cost1=550
    this.Cost2=430
    this.Addoncost=160
    this.Addoncost1=525
    this.Qty1=1
    this.Qty2=2
    this.Qty3=3
    this.PF=20
    this.shipCharge=350
    this.shipCharge1=400
}
module.exports = new ProductTableCalIp()