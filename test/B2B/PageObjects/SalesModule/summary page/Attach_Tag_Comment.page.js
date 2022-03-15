const Page = require("../../../PageObjects/page");

class AttachTagComment extends Page{
    
/* ************* ATTACHMENT CARD ************* */
    get SideNavAttach(){
        return super.pathByXpath('//label[@for="attachments-editSideNav"]//span[@role="button"]')
    }
    get QuoteOrderAttach(){
        return super.pathByXpath('//span[@role="button"]')
    }

/* ************* TAG CARD ************* */
    get Tag(){
        return super.pathByXpath('//input[@id="tags-outlined"]')
    }

/* ************* COMMENTS CARDS ************* */

}
module.exports = new(AttachTagComment);
