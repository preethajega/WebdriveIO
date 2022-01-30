function Taxip(){
    const path = require('path');
    this.taxUrl="/settings/tax"
    this.taxName="IGST"
    this.taxname2="vat 5"
    this.rate="5"
    this.taxGrpName="IGST"
    this.compundTax="IGST"
    this.proTaxcode="TX001"
    this.description="Tab"
    this.excemption="Export Dealer"
    this.errmsg="Required"
    this.saveAlert="Changes saved successfully"
    this.Taxgrpalert="Changes updated successfully"
    this.taxNameAlert="Tax name assigned in tax group(s) please remove from group before deleting"
    this.taxGrpAlert="Tax group associated with product tax code, please remove and try again"
    this.proTaxcodeAlert="Tax code is associated with products please remove from products before deleting"
    this.exemAlert="Tax Exemption associated with a item/customer"
    this.errmsgTaxgrp="Tax group name required"
    this.errmsgTaxNam="Minimum 1 tax name required"
    this.errmsgComptax="No options - Compound tax can be selected only if there are 2 tax name"
    this.errdefaultgrp="***Field is disabled, already default assigned to a tax group"
}
module.exports = new Taxip();