const Page = require("../../../B2B/PageObjects/page");

class General extends Page{

    get AddCurBtn(){
        return super.pathByXpath('//button[@aria-label="Add Currency"]')
    }
    get Code(){
        return super.pathByName('currencyCode')
    }
    get Name(){
        return super.pathByXpath('//div[@role="dialog"]/div[2]/div[2]/div/input')
        //return super.pathByName('description')
    }
    get Format(){
        return super.pathByXpath('//div[@role="dialog"]/div[2]/div[3]/div/div/input')
        //return super.pathById("mui-84691")
    }
    get Symbol(){
        return super.pathByXpath('//div[@role="dialog"]/div[2]/div[4]/div/div/input')
    }
    get Factor(){
        return super.pathByName("factor")
    }
    get CancelBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[1]")
    }
    get SaveBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[2]")
    }
    get Deletebtn(){
        return super.pathById('Currency_5')
    }
    get MapedDeleteBtn(){
        return super.pathById('Currency_1')
    }
    get EditCode(){
        return super.pathByName("currencyDetail[5].currencyCode")
    }
    get EditFactor(){
        return super.pathByName('currencyFactor[5].factor')
    }
    get EditFormat(){
        return super.pathByXpath('//div[3]/div/div[2]/div/div[6]/div/div/div//div/input[@name="priceFormat"]')
    }
    get EditSymbol(){
        return super.pathByXpath('//div[3]/div/div[2]/div/div[6]/div/div/div//div/input[@name="currencyFormat"]')
    }
    get EditSavebtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
        //return super.pathByXpath("//header[contains(@class,'MuiPaper-root MuiAppBar-root MuiAppBar-positionF')][4]/div/button[2]")
    }
    get EditCancelbtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
        //return super.pathByXpath("//header[contains(@class,'MuiPaper-root MuiAppBar-root MuiAppBar-positionF')][4]/div/button[1]")
    }
    get ErrormsgCode(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogConte")]/div[1]/p')
    }
    get ErrormsgName(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogConte")]/div[2]/p')
    }
    get ErrormsgSymbol(){
        return super.pathByXpath("//span[text()='Required']")
    }
    get ErrormsgFactor(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogConte")]/div[5]/p')
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
        return super.pathByName('dateFormatId')
    }
    get TimeDisplay(){
        return super.pathByName('timeFormat')
    }
    get TimeZone(){
        return super.pathByName('timeZone')
    }
}
module.exports = new General();
