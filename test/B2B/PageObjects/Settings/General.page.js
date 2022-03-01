const Page = require("../../../B2B/PageObjects/page");

class General extends Page{

    get AddCurBtn(){
        return super.pathByXpath('//button[@aria-label="Add Currency"]')
    }
    get Code(){
        return super.pathByName('currencyCode')
    }
    get Name(){
        return super.pathByXpath('//input[@name="description"]')
    }
    get Format(){
        return super.pathByXpath('(//input[@name="priceFormat"])[last()]')
    }
    get Symbol(){
        return super.pathByXpath('(//input[@name="currencyFormat"])[last()]')
    }
    get Factor(){
        return super.pathByName("factor")
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get SaveBtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get Deletebtn(){
        return super.pathByXpath('(//button[starts-with(@id,"Currency")])[last()]')
    }
    get MapedDeleteBtn(){
        return super.pathByXpath('(//button[starts-with(@id,"Currency")])[1]')
    }
    get EditCode(){
        return super.pathByXpath('(//input[contains(@name,"currencyCode")])[last()]')
    }
    get EditFactor(){
        return super.pathByName('(//input[contains(@name,"factor")])[last()]')
    }
    get EditFormat(){
        return super.pathByXpath('(//input[@name="priceFormat"])[last()]')
    }
    get EditSymbol(){
        return super.pathByXpath('(//input[contains(@name,"currencyFormat")])[last()]')
    }
    get EditSavebtn(){
        return super.pathByXpath('(//button[text()="Save"])[last()]')
    }
    get EditCancelbtn(){
        return super.pathByXpath('(//button[text()="Cancel"])[last()]')
    }
    get ErrormsgCode(){
        return super.pathByXpath('//p[text()="Currency code required"]')
    }
    get ErrormsgName(){
        return super.pathByXpath('//p[text()="Name required"]')
    }
    get ErrormsgSymbol(){
        return super.pathByXpath("//span[text()='Required']")
    }
    get ErrormsgFactor(){
        return super.pathByXpath('//p[text()="Conversion factor required"]')
    }
    get CompIdentifier(){
        return super.pathByName('companyIdentifier')
    }
    get ErrormsgCompId(){
        return super.pathByXpath("//p[text()='Company Identifier required']")
    }
    get DefaultMailId(){
        return super.pathByName('email')
    }
    get ErrormsgMailId(){
        return super.pathByXpath("//p[text()='Email required']")
    }
    get Invalidmailid(){
        return super.pathByXpath("//p[text()='Invalid email']")
    }
    get Finicalyear(){
        return super.pathByName('finStartMonth')
    }
    get RoundOff(){
        return super.pathByName('roundOff')
    }
    get ErrorRoundOff(){
        return super.pathByXpath("//p[text()='Round off required']")
    }
    get DateDiaplay(){
        return super.pathByXpath('//input[@name="dateFormatId"]')
    }
    get TimeDisplay(){
        return super.pathByXpath('//input[@name="timeFormat"]')
    }
    get TimeZone(){
        return super.pathByXpath('//input[@name="timeZone"]')
    }
}
module.exports = new General();
