const Page = require("../../../B2B/PageObjects/page");

class integration extends Page{
/* *************** Direct Bank Card **************** */

    get AccName(){
        return super.pathByXpath('(//input[contains(@name,".accountName")])[last()]')
    }
    get AccNum(){
        return super.pathByXpath('(//input[contains(@name,".accountNumber")])[last()]')
    }
    get BankName(){
        return super.pathByXpath('(//input[contains(@name,".bankName")])[last()]')
    }
    get BankLocation(){
        return super.pathByXpath('(//input[contains(@name,".bankLocation")])[last()]')
    }
    get BankCode(){
        return super.pathByXpath('(//input[contains(@name,".bankCode")])[last()]')
    }
    get IBAN(){
        return super.pathByXpath('(//input[contains(@name,".iban")])[last()]')
    }

    

/* *************** Payment GateWay Card **************** */
                       /* RAZORPAY */
    get RazorPayExpand(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1nroygf"]/div[1]/div/div[2]')
    }
    get RazorEnable(){
        return super.pathById('enabled_0')
    }
    get APIKey(){
        return super.pathByName('gatewayData[0].paymentGatewayDescription[0].gateWayConfigValue')
    }
    get SecretKey(){
        return super.pathByName('gatewayData[0].paymentGatewayDescription[1].gateWayConfigValue')
    }

  
                       /* STRIPE */
    get RazorPayExpand(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1nroygf"]/div[2]/div/div[2]')
    }
    get StripeEnable(){
        return super.pathById('enabled_1')
    }
    get PublishKey(){
        return super.pathByName('gatewayData[1].paymentGatewayDescription[0].gateWayConfigValue')
    }
    get StripeSecretKey(){
        return super.pathByName('gatewayData[1].paymentGatewayDescription[1].gateWayConfigValue')
    }


                       /* CC AVENU */
    get RazorPayExpand(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1nroygf"]/div[3]/div/div[2]')
    }
    get CCAvenuEnable(){
        return super.pathById('enabled_2')
    }
    get MerchantId(){
        return super.pathByName('gatewayData[2].paymentGatewayDescription[0].gateWayConfigValue')
    }
    get AccesCode(){
        return super.pathByName('gatewayData[2].paymentGatewayDescription[1].gateWayConfigValue')
    }
    get WorkingKey(){
        return super.pathByName('gatewayData[2].paymentGatewayDescription[2].gateWayConfigValue')
    }
    


}
module.exports =new integration();