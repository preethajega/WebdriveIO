function Genip() {     
    const path = require('path');
    this.CompUrl="/settings/company"
    this.code ="AMD"
    this.factor ="0.16"
    this.symbol="AMD ֏"
    this.format="1 999,99"
    this.editcode="GBP"
    this.editsymbol="GBP £"
    this.editfactor="0.001"
    this.editformat="1,999.999"
    this.alert="Changes saved successfully"
    this.alreadyExisitsAlert="Currency code already exist"

}
module.exports = new Genip();