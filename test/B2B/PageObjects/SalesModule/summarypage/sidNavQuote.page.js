const Page = require("../../../PageObjects/page");

class SidNavPage extends Page{

    get CreateOrREqApproveBtn(){
        return super.pathByXpath('//div[contains(@class,"css-15vlb5b")]//button[2]')
    }

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
    get ExportBtn(){
        return super.pathById('exportQuote')
    }
    get ApprovalExpandBtn(){
        return super.pathByXpath("(//div[contains(@class,'expandIconWrapper')])[1]")
    }
    get Approver1Status(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[2]/div[2]//div/p')
    }
    get Approver2Status(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[3]/div[2]//div/p')
    }
    get Approver3Status(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[4]/div[2]//div/p')
    }
    get ApproverName1(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[2]/div[1]/h6')
    }
    get ApproverName2(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[3]/div[1]/h6')
    }
    get ApproverName3(){
        return super.pathByXpath('//div[contains(@class,"MuiAccordionDetails")]/div/div[4]/div[1]/h6')
    }
    get ApproveBtnExpand(){
        return super.pathById('approve')
    }
    get RejectBtnExpand(){
        return super.pathById('reject')
    }
    get ApproveBtn(){
        return super.pathById('approve')
    }
    get RejectBtn(){
        return super.pathById('reject')
    }
    /************** BUYER SIDNAV PATHS ************ */
    get SubmitVersionText(){
        return super.pathByXpath("//h2[text()='Submit new version']")
    }
    get CancelMsgBox(){
        return super.pathByName('cancelMsg')
    }
    get DetailPageStatus(){
        return super.pathByXpath('(//div[@class="MuiBox-root css-70qvj9"]/p)[1]')
    }
    get BuyerCloseCardBtn(){
        return super.pathByXpath('//button[@aria-label="close"]')
    }


}
module.exports = new SidNavPage();
