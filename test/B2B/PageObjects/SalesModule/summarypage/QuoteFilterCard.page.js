const Page = require("../../../PageObjects/page");

class QuoteFilter extends Page{
    get TempFilterBtn(){
        return super.pathByXpath('//button[@aria-label="filter"]')
    }
    get TempApplyBtn(){
        return super.pathById('filterApply')
    }
    get TempClearAllBtn(){
        return super.pathByXpath('//button[@aria-label="clearAll"]')
    }

        /****************** SELLERSIDE FILTER CARD ***************** */

    /****************** BUYERSIDE FILTER CARD ***************** */

    get QuoteStatus(){
        return super.pathById('checkboxes-tags-demo')
    }
    get quoteId(){
        return super.pathById('qid')
    }
    get quoteName(){
        return super.pathByXpath('//input[@id="qname"]')
    }
    get BuyerInfo(){
        return super.pathById('checkboxes-Accounts')
    }
    get startDate(){
        return super.pathByXpath('//label[text()="Start Date"]/following::input[1]')
    }
    get EndDate(){
        return super.pathByXpath('//label[text()="End Date"]/following::input[1]')
    }
    get StartValue(){
        return super.pathById('svalue')
    }
    get EndValue(){
        return super.pathById('evalue')
    }
    get cancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ApplyBtn(){
        return super.pathByXpath('//button[@aria-label="Apply"]')
    }
    get ClearAllBtn(){
        return super.pathByXpath('//button[@aria-label="clearAll"]')
    }
    get AllFilterTab(){
        return super.pathById('filter-tab-0')
    }
    get AddFilterBtn(){
        return super.pathByXpath('//button[@aria-label="Add Tab for filters"]')
    }
    get AllFilterBtn(){
        return super.pathByXpath('//span[text()="All"]/button')
    }

}
module.exports = new QuoteFilter();
