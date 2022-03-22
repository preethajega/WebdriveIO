const Page = require("../../../PageObjects/page");

class ApplyDiscount extends Page{


    get ApplyDisReset(){
        return super.pathByXpath('//div[@class="MuiBox-root css-138dq1"]/button[1]')
    }
    get AapplyDisApply(){
        return super.pathByXpath('//div[@class="MuiBox-root css-138dq1"]/button[2]')
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
}

module.exports = new ApplyDiscount();
