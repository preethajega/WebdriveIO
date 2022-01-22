const Page = require("../../../B2B/PageObjects/page");

class General extends Page{

    get AddCurBtn(){
        return super.pathByXpath('//button[@aria-label="Add Currency"]')
    }
    get Code(){
        return super.pathByName('currencyCode')
    }
    get Name(){
        return super.pathByName('description')
    }
    get Format(){
        return super.pathById("mui-84691")
    }
    get Symbol(){
        return super.pathByXpath('//div[@role="dialog"]/div[2]/div[4]/div/div/input')
    }
    get Factor(){
        return super.pathByXpath("factor")
    }
    get CancelBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[1]")
    }
    get SaveBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[2]")
    }
    get Deletebtn(){
        return super.pathById('Currency_6')
    }
    get EditCode(){
        return super.pathByName("currencyDetail[6].currencyCode")
    }
    get EditFactor(){
        return super.pathByName('currencyFactor[6].factor')
    }
    get EditFormat(){
        return super.pathByXpath('//div[3]/div/div[2]/div/div[7]/div/div/div//div/input[@name="priceFormat"]')
    }
    get EditSymbol(){
        return super.pathByXpath('//div[3]/div/div[2]/div/div[7]/div/div/div//div/input[@name="currencyFormat"]')
    }

}
module.exports = new General();
