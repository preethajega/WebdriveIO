const Page = require("../../../PageObjects/page");

class FinancialCard extends Page{

    get AddOnCostInput(){
        return super.pathByName('addonCost')
    }
    get PFInput(){
        return super.pathByName('pfRate')
    }
    get ShippingCharge(){
        return super.pathByName('overallShipping')
    }
    get Cost_ExcludeAddOnCostValue(){
        return super.pathByXpath('(//h5[text()="Cost (Excl. Add-on cost)"]/following::h5)[1]')
    }
    get CostValue(){
        return super.pathByXpath('(//h5[text()="Total Cost"]/following::h5)[1]')
    }
    get DMC_ExcludeAddOnCostValue(){
        return super.pathByXpath('(//h5[text()="DMC (%) (Excl. Add-on Cost) "]/following::h5)[1]')
    }
    get OverAllDMC_CostValue(){
        return super.pathByXpath('(//h5[text()="Overall DMC "]/following::h5)[1]')
    }
    get GM_ExcludeAddOnCostValue(){
        return super.pathByXpath('(//h5[text()="GM (%) (Excl. Add-on Cost) "]/following::h5)[1]')
    }
    get OverAllGM_CostValue(){
        return super.pathByXpath('(//h5[text()="Overall GM "]/following::h5)[1]')
    }
    get BasCurrencyFactor(){
        return super.pathByName('bcfactor')
    }

}
module.exports = new FinancialCard();


