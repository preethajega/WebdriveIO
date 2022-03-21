const Page = require("../../../PageObjects/page");

class EndCustomerCard extends Page{

/* ************* QUOTE VAIDITY DATE ************* */
    get validFrom(){
        return super.pathByXpath('(//*[text()="Valid from"]/following::button[1])[1]');
    } 
    get validFromDateIcon(){
        return super.pathByXpath('(//*[text()="Valid from"]/following::button[1])[last()]')
    }
    get validTill(){
        return super.pathByXpath('(//*[text()="Quote Validity"]/following::input[2])[last()]');
    } 
    get validTillDateIcon(){
        return super.pathByXpath('(//*[text()="Valid from"]/following::button[1])[last()]')
    }
    get reorderBtn(){
<<<<<<< HEAD
        return super.pathById('reorder');
    }    
=======
        return super.pathById('reorder')
    }   
    get RequiredDateSidNav(){
        return super.pathByXpath('(//label[text()="Required Date"])[1]')
    } 
    get RequiredDate(){
        return super.pathByXpath('(//label[text()="Required Date"])[last()]')
    } 
    get NextMonthBtn(){
        return super.pathByXpath('//button[@title="Next month"]')
    }
    get PreviousMonthBtn(){
        return super.pathByXpath('//button[@title="Previous month"]')
    }
    get DatePath(){
        return super.pathByXpath('//div[@role="row"][3]/div[3]')
    }
>>>>>>> 2093fcae4ba6ec4dc3f6712dff0a59e9f3d3f7a9

/* ************* SPR FIELDS  ************* */

    get EndCusName(){
        return super.pathByName('sprDetails.companyName')
    }
    get ProjectName(){
        return super.pathByName('sprDetails.projectName')
    }
    get CompetitorName(){
        return super.pathByName('sprDetails.competitorNames')
    }
    get PriceJustification(){
        return super.pathByName('sprDetails.priceJustification')
    }
    get CompClearAll(){
        return super.pathByXpath('//label[text()="Competitors"]/following-sibling::div//button[@title="Clear"]')
    }

}
module.exports = new(EndCustomerCard);


