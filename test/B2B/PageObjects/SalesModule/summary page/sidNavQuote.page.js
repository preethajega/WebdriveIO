const Page = require("../../../PageObjects/page");

class SidNavPage extends Page{

    get RespondBtn(){
        return super.pathByXpath('//button[@aria-label="Respond"]')
    }
    get PlaceOrderBtn(){
        return super.pathByXpath('//button[@aria-label="Place Order"]')
    }
    get MoreOptionBtn(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get ViewDocumentBtn(){
        return super.pathByXpath('//li[text()="View Document"]')
    }
    get CancelQuoteBtn(){
        return super.pathByXpath('//li[text()="Cancel Quote"]')
    }
    get OrderLostBtn(){
        return super.pathByXpath('//li[text()="Order Lost"]')
    }
    get CloneBtn(){
        return super.pathByXpath('//li[text()="Clone"]')
    }
    get DownloadPdfBtn(){
        return super.pathByXpath('//li[text()="Download PDF"]')
    }
    get SumbitToCustomer(){
        return super.pathByXpath('//button[@aria-label="Submit to customer"]')
    }
    get ReviewBtn(){
        return super.pathByXpath('//button[@aria-label="Review"]')
    }
    get SubmitReviewBtn(){
        return super.pathByXpath('//button[@aria-label="Submit Review"]')
    }
    get RejectQuoteBtn(){
        return super.pathById('reject')
    }
    get SaveQuoteInReviewPage(){
        return super.pathByXpath('//li[text()="Save"]')
    }
    get saveQuoteBtn(){
        return super.pathById('savequote')
    }
    get ConfCancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ConfYesBtn(){
        return super.pathByXpath('//button[@aria-label="Yes"]')
    }
    get EditQuoteBtn(){
        return super.pathByXpath('//button[@aria-label="Edit Quote"]')
    }
    get SumbitBtn(){
        return super.pathByXpath('//button[@aria-label="Submit"]')
    }
    get CloseCardBtn(){
        return super.pathByXpath('//button[@aria-label="Close"]')
    }



}
module.exports = new SidNavPage();
