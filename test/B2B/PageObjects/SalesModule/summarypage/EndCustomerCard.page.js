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
        return super.pathById('reorder')
    }   
    get RequiredDateSidNav(){
        return super.pathByXpath('(//label[text()="Required Date"])[1]')
    } 
    get RequiredDate(){
        return super.pathByXpath('(//label[text()="Required Date"])[last()]')
    } 
    get RequoredDateIcon(){
        return super.pathByXpath('//label[text()="Required Date"]/following::button[@aria-label="Choose date"]')
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
    get DatePath1(){
        return super.pathByXpath('//div[@role="row"][2]/div[3]')
    }

    get RequiredDeliveryDate(){
        return super.pathByXpath('//p[text()="Provide required delivery date"]')
    }

/* ************* SPR FIELDS  ************* */
    get EndCusRefeNum(){
        return super.pathByName('Reference')
    }
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


    get ErrReqDate(){
        return super.pathByXpath('//p[text()="Provide required delivery date"]')
    }
    get ErrCusName(){
        return super.pathByXpath('//p[text()="End customer name is required"]')
    }
    get ErrProjectName(){
        return super.pathByXpath('//p[text()="Project name is required"]')
    }
    get ErrCompetitor(){
        return super.pathByXpath('//p[text()="Competitor name(s) is required"]')
    }
    get ErrPriceJustification(){
        return super.pathByXpath('//p[text()="Price justification is required"]')
    }


}
module.exports = new(EndCustomerCard);


