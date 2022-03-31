const Page = require("../../../PageObjects/page");

class QuotePage extends Page{
    get CreateOrREqApproveBtn(){
        return super.pathByXpath('//div[contains(@class,"css-6tsndk")]/button[2]')
    }
    get CreateQuoteBtn(){
        return super.pathByXpath('//button[@aria-label="Create Quote"]')
    }
    get SaveAsDraft(){
        return super.pathByXpath('//button[@aria-label="Save as draft"]')
    }
    get RequestApproval(){
        return super.pathByXpath('//button[@aria-label="Request Approval"]')
    }
    get ReqApprovalQuoteName(){
        return super.pathByName('quoteName')
    }
   
/*********************** Quote PopUp card *********************** */
    get QuoteName(){
        return super.pathById('name')
    }
    get ApproverInput1(){
        return super.pathByName('approvalList[0].user')
    }
    get ApproverClear1(){
        return super.pathByXpath('//input[@name="approvalList[0].user"]/following::button[@title="Clear"]')
    }
    get ApproverInput2(){
        return super.pathByName('approvalList[1].user')
    }
    get ApproverClear2(){
        return super.pathByXpath('//input[@name="approvalList[1].user"]/following::button[@title="Clear"]')
    }
    get Comments(){
        return super.pathByName('initiatedComments')
    }
    get ConfCancel(){
        return super.pathById('editDialogCancel')
    }
    get ConfBtn(){
        return super.pathById('editDialogButton')
    }
    get ErrQuoteName(){
        return super.pathByXpath('//p[text()="Name is required"]')
    }
    get ErrReqApprovalQuoteName(){
        return super.pathByXpath('//p[text()="Quote name required"]')
    }   
    get ErrApprover(){
        return super.pathByXpath('//p[text()="Select a approver"]')
    }
    get ErrComment(){
        return super.pathByXpath('//p[text()="Comments is required"]')
    }
    get QuoteConfWindow(){
        return super.pathByXpath('//div[@aria-describedby="dialog-description"]/h2/div')
    }



   
}
module.exports = new QuotePage();
