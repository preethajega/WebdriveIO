const Page = require("../../../PageObjects/page");

class OrderPage extends Page{
    get PlaceOrder(){
        return super.pathByXpath('//button[@aria-label="Place Order"]')
    }
    get PlaceOrderConfBtn(){
        return super.pathById('editDialogButton')
    }
    get CancelConfBtn(){
        return super.pathById('editDialogCancel')
    }
    get OrderCancel(){
        return super.pathById('cancelSummary')
    }
    get ErrOrderName(){
        return super.pathByXpath('//p[text()="Name is required"]')
    }


}
module.exports = new OrderPage();
