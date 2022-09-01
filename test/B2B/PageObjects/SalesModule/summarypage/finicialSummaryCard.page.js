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

    ///////////////////////

    get AddOnCostInput1(){
        return super.pathByName('addonCost-financialCard')
    }
    get PFInput1(){
        return super.pathByName('pfRate-financialCard')
    }
    get ShippingCharge1(){
        return super.pathByName('overallShipping-financialCard')
    }
    get Cost_ExcludeAddOnCostValue1(){
        return super.pathByXpath('//div[text()="Cost (Excl. Add-on cost)"]/following::div[2]')
    }
    get CostValue1(){
        return super.pathByXpath('//div[text()="Total Cost"]/following::div[2]')
    }
    get GM_ExcludeAddOnCostValue1(){
        return super.pathByXpath('//div[text()="GM (%) (Excl. Add-on Cost) "]/following::h5[1]')
    }
    get OverAllGM_CostValue1(){
        return super.pathByXpath('//div[text()="Overall GM (%)"]/following::h5[1]')
    }
    get DMC_ExcludeAddOnCostValue1(){
        return super.pathByXpath('//div[text()="DMC (%) (Excl. Add-on Cost) "]/following::h5[1]')
    }
    get OverAllDMC_CostValue1(){
        return super.pathByXpath('//div[text()="Overall DMC (%)"]/following::h5[1]')
    }

}
module.exports = new FinancialCard();


