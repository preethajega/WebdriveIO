function Genip() {     
    const path = require('path');
    this.genUrl="/settings/general"
    this.code ="AMD"
    this.Name="Doller"
    this.code1="ZAR"
    this.factor ="0.16"
    this.symbol="AMD ֏"
    this.format="1 999,99"
    this.editcode="GBP"
    this.editcode1="CHF"
    this.editsymbol="GBP £"
    this.editfactor="0.001"
    this.editformat="1,999.999"
    this.alert="Changes saved successfully"
    this.alreadyExisitsAlert="Currency code already exist"
    this.errorCodeMsg='Currency code required'
    this.errorNamemsg='Name required'
    this.errormsgSymbol='Required'
    this.errormsgFactor='Conversion factor required'
    this.errormsgCompIdenti='Company Identifier required'
    this.errormsgMail='Email required'
    this.errormsgRoundoff='Round off required'

}
module.exports = new Genip();