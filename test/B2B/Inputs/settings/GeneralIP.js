function Genip() {     
    const path = require('path');
    this.genUrl="/settings/general"
    this.compid="SSI"
    this.compid1="SI"
    this.mail="preetha@apptino.com"
    this.mail1="zen@gmail.com"
    this.invalidmail="adtional setting"
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
    this.date='22/0/202'
    this.time="12"
    this.timezone="(GMT+04:00) Ye"
    this.alert="Changes saved successfully"
    this.alreadyExisitsAlert="Currency code already exist"
    this.errorCodeMsg='Currency code required'
    this.errorNamemsg='Name required'
    this.errormsgSymbol='Required'
    this.errormsgFactor='Conversion factor required'
    this.errormsgCompIdenti='Company Identifier required'
    this.errormsgMail='Email required'
    this.errormsgRoundoff='Round off required'
    this.mappedDeleteAlert="Currency mapped with company cannot be deleted"
    this.errormsgInvalidmail="Invalid email"

}
module.exports = new Genip();