const Page = require("../../../PageObjects/page");

class OrderFilter extends Page{
    /****************** SELLERSIDE FILTER CARD ***************** */
    /****************** BUYERSIDE FILTER CRAD ***************** */
    get OrderStatus(){
        return super.pathById('checkboxes-tags-demo')
    }
    get OrderId(){
        return super.pathById('oid')
    }
    get OrderName(){
        return super.pathById('oname')
    }
    get OrderBuyerInfo(){
        return super.pathById('checkboxes-Accounts')
    }
    get OrderstartDate(){
        return super.pathByXpath('//label[text()="Start Date"]/following::input[1]')
    }
    get OrderEndDate(){
        return super.pathByXpath('//label[text()="End Date"]/following::input[1]')
    }
    get OrderStartValue(){
        return super.pathById('svalue')
    }
    get OrderEndValue(){
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

}
module.exports = new OrderFilter();
