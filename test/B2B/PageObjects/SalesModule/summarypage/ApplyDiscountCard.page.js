const Page = require("../../../PageObjects/page");

class ApplyDiscount extends Page{


    get TargetDiscount(){
        return super.pathByXpath('//button[text()="Target Discount"]')
    }
    get AddOnDiscount(){
        return super.pathByXpath('//button[text()="Add On Discount"]')
    }
    get ByAmountBtn(){
        return super.pathByXpath('//button[text()="By Amount"]')
    }
    get ByDiscountBtn(){
        return super.pathByXpath('//button[text()="By Discount %"]')
    }

    get ApplyDisReset(){
        return super.pathByXpath('//div[@class="MuiBox-root css-138dq1"]/button[1]')
    }
    get ApplyDisApply(){
        return super.pathByXpath('//div[@class="MuiBox-root css-138dq1"]/button[2]')
    }
    get TargetDisSeller(){
        return super.pathByXpath('//button[text()="Target Discount"]')
    }
    get OverAllDisSeller(){
        return super.pathByXpath('//button[text()="Overall Discount"]')
    }
    get AddOnDisSeller(){
        return super.pathByXpath('//button[text()="Add On Discount"]')
    }

    get ByDiscountInput(){
        return super.pathByXpath('//div[@class="MuiBox-root css-3mvcpe"]//input')
    }
    get ByAmountInput(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1djk842"]//input')
    }
    get RoundUpMinusTwo(){
        return super.pathById('Btn-2')
    }
    get RoundUpMinusOne(){
        return super.pathById('Btn-1')
    }
    get RoundUpZero(){
        return super.pathById('Btn0')
    }
    get RoundUpPlusOne(){
        return super.pathById('Btn1')
    }
    get RoundUpPlusTwo(){
        return super.pathById('Btn2')
    }
    get IncreaseBtn(){
        return super.pathById('incBtn')
    }
    get DecreaseBtn(){
        return super.pathById('decBtn')
    }
    get RoundUpReset(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1rxpjkd"]/button[1]')
    }
    get RoundUpApply(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1rxpjkd"]/button[2]')
    }
    /********************** PRICE DETAILS CARD ********************** */
    get TotalTextValue(){
        return super.pathByXpath('//h5[text()="Total"]/following::h5[1]')
    }
    get TaxAbleAmountTxtValue(){
        return super.pathByXpath('//h5[text()="Taxable Amount"]/following::h6[1]')
    }
    get SubTotalTxtValue(){
        return super.pathByXpath('//h5[text()="Subtotal"]/following::h6[1]')
    }
    get ShippingChargeTxtValue(){
        return super.pathByXpath('(//h5[text()="Shipping Charges"]/following::h6)[5]')
    }
    get PFTextvalue(){
        return super.pathByXpath('(//h5[text()="P&F Rate"]/following::h6[3])[1]')
    }
    /*********** BUYER APPLY DISCOUNT CARD ************* */
    get TargetDiscount(){
        return super.pathByName("sprDetails.sprRequestedDiscount")
    }
    get TargetPrice(){
        return super.pathByName('sprDetails.targetPrice')
    }
}

module.exports = new ApplyDiscount();
